// app/pvt/emailLayout.ts
export function emailLayout(senderName: string, senderEmail: string, message: string) {
  return `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #f7f9fc; padding: 20px; border-radius: 8px; color: #1a202c;">
      <h2 style="color: #4c51bf;">New Contact Request</h2>
      <p style="font-size: 16px; line-height: 1.6;">
        <strong>Name:</strong> ${senderName}<br/>
        <strong>Email:</strong> ${senderEmail}<br/>
      </p>
      <p style="font-size: 16px; line-height: 1.6; margin-top: 10px;">
        <strong>Message:</strong><br/>
        ${message}
      </p>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;" />
      <p style="font-size: 14px; color: #718096;">This message was sent via your portfolio contact form.</p>
    </div>
  `;
}