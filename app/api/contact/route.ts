import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { firstName, lastName, email, phone, company, subject, message } = await request.json();
    
    // Since we can't reliably get the locale in a server action, we'll use a parameter
    // In a real implementation, you would pass the locale from the client
    // For now, we'll default to Hungarian
    const isEnglish = false; // Default to Hungarian for email templates

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Email content based on locale
    const emailSubject = isEnglish 
      ? `Contact Form: ${subject}` 
      : `Kapcsolatfelvételi űrlap: ${subject}`;
      
    const notProvided = isEnglish ? 'Not provided' : 'Nincs megadva';
    
    const textContent = isEnglish 
      ? `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || notProvided}
        Company: ${company || notProvided}
        
        Message:
        ${message}
      `
      : `
        Név: ${firstName} ${lastName}
        Email: ${email}
        Telefonszám: ${phone || notProvided}
        Cég: ${company || notProvided}
        
        Üzenet:
        ${message}
      `;
      
    const htmlTitle = isEnglish ? 'New Contact Form Submission' : 'Új kapcsolatfelvételi űrlap beküldése';
    const nameLabel = isEnglish ? 'Name' : 'Név';
    const phoneLabel = isEnglish ? 'Phone' : 'Telefonszám';
    const companyLabel = isEnglish ? 'Company' : 'Cég';
    const subjectLabel = isEnglish ? 'Subject' : 'Tárgy';
    const messageLabel = isEnglish ? 'Message' : 'Üzenet';
    
    const htmlContent = `
      <h2>${htmlTitle}</h2>
      <p><strong>${nameLabel}:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>${phoneLabel}:</strong> ${phone || notProvided}</p>
      <p><strong>${companyLabel}:</strong> ${company || notProvided}</p>
      <p><strong>${subjectLabel}:</strong> ${subject}</p>
      <hr />
      <h3>${messageLabel}:</h3>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Okosit Contact Form <onboarding@resend.dev>', // Using Resend sandbox domain for testing
      to: ['ghost990@gmail.com'], // Using verified email for testing
      subject: emailSubject,
      replyTo: email,
      text: textContent,
      html: htmlContent,
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
