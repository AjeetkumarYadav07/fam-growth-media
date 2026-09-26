import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const RECIPIENT_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "info@famgrowthmedia.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone / WhatsApp number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const whatsappLink = `https://wa.me/${cleanPhone.replace("+", "")}`;

    // 1. Always persist lead to local storage so no inquiry is ever lost
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "inquiries.json");
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, "utf-8");
        leads = fileContent ? JSON.parse(fileContent) : [];
      }
      leads.push({
        id: `lead_${Date.now()}`,
        name,
        email,
        phone,
        service: service || "General Inquiry",
        message: message || "No message provided",
        submittedAt: timestamp,
        targetEmail: RECIPIENT_EMAIL,
      });
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
    } catch (saveError) {
      console.error("Error persisting inquiry to JSON:", saveError);
    }

    console.log("==================================================");
    console.log(`📩 NEW INQUIRY FOR: ${RECIPIENT_EMAIL}`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📱 Phone / WhatsApp: ${phone}`);
    console.log(`🎯 Service: ${service}`);
    console.log(`💬 Message: ${message || "N/A"}`);
    console.log(`⏰ Time: ${timestamp}`);
    console.log("==================================================");

    // 2. Send email via SMTP if credentials are configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); padding: 20px; border-radius: 12px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 800;">FAM GROWTH MEDIA</h1>
            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">New Client Inquiry Received</p>
          </div>

          <div style="padding: 24px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold; width: 140px;">CLIENT NAME:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 15px; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold;">WORK EMAIL:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold;">CALL / WHATSAPP:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">
                  <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none; font-weight: 700;">${phone}</a>
                  &nbsp;|&nbsp;
                  <a href="${whatsappLink}" target="_blank" style="color: #10b981; text-decoration: none; font-weight: 600;">Chat on WhatsApp →</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold;">PRIMARY SERVICE:</td>
                <td style="padding: 10px 0; color: #7c3aed; font-size: 15px; font-weight: 700;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold; vertical-align: top;">PROJECT DETAILS:</td>
                <td style="padding: 10px 0; color: #334155; font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 12px; border-radius: 8px;">
                  ${message || "No specific details provided."}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: bold;">RECEIVED AT:</td>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
            This email was automatically routed to <strong>${RECIPIENT_EMAIL}</strong> from the FAM Growth Media website inquiry form.
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"FAM Growth Media Leads" <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `🚀 New Lead: ${name} - ${service}`,
        text: `New Inquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
        html: htmlContent,
      });

      console.log(`✅ Email sent successfully to ${RECIPIENT_EMAIL}`);
    } else {
      console.log(
        `ℹ️ SMTP not configured. Lead successfully logged to src/data/inquiries.json. To send direct emails to ${RECIPIENT_EMAIL}, set SMTP_USER and SMTP_PASS in .env.local`
      );
    }

    return NextResponse.json({
      success: true,
      message: `Inquiry received and forwarded to ${RECIPIENT_EMAIL}`,
      recipient: RECIPIENT_EMAIL,
    });
  } catch (error: any) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or message directly." },
      { status: 500 }
    );
  }
}
