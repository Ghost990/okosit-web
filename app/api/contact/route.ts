import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { firstName, lastName, email, company, phone, subject, message } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Okosit Contact Form <onboarding@resend.dev>', // Using Resend sandbox domain for testing
      to: ['ghost990@gmail.com'], // Using verified email for testing
      subject: `Kapcsolatfelvételi űrlap: ${subject}`,
      replyTo: email,
      text: `
        Név: ${firstName} ${lastName}
        Email: ${email}
        Telefonszám: ${phone || 'Nincs megadva'}
        Cég: ${company || 'Nincs megadva'}
        
        Üzenet:
        ${message}
      `,
      // You can also use HTML template
      html: `
        <h2>Új kapcsolatfelvételi űrlap beküldése</h2>
        <p><strong>Név:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefonszám:</strong> ${phone || 'Nincs megadva'}</p>
        <p><strong>Cég:</strong> ${company || 'Nincs megadva'}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <hr />
        <h3>Üzenet:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
