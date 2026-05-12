'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const msg = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    window.open(`https://wa.me/919942185370?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="adm-success">
        <div className="adm-success-icon"><i className="fas fa-check-circle"></i></div>
        <h3>Message Sent!</h3>
        <p>Your message has been forwarded via WhatsApp. We&apos;ll get back to you shortly.</p>
        <button className="adm-btn" onClick={() => setSent(false)}>Send Another</button>
      </div>
    );
  }

  return (
    <form className="adm-form" onSubmit={handleSubmit} noValidate>
      <div className="adm-row">
        <div className="adm-field">
          <label htmlFor="c-name"><i className="fas fa-user"></i> Full Name <span>*</span></label>
          <input type="text" id="c-name" name="name" placeholder="Your full name" required />
        </div>
        <div className="adm-field">
          <label htmlFor="c-phone"><i className="fas fa-phone"></i> Phone <span>*</span></label>
          <input type="tel" id="c-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>
      <div className="adm-row">
        <div className="adm-field">
          <label htmlFor="c-email"><i className="fas fa-envelope"></i> Email</label>
          <input type="email" id="c-email" name="email" placeholder="you@example.com" />
        </div>
        <div className="adm-field">
          <label htmlFor="c-subject"><i className="fas fa-tag"></i> Subject <span>*</span></label>
          <select id="c-subject" name="subject" required>
            <option value="">Select a subject</option>
            <option value="admission">Admission Inquiry</option>
            <option value="course">Course Information</option>
            <option value="general">General Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="adm-field adm-field-full">
        <label htmlFor="c-message"><i className="fas fa-comment-alt"></i> Message <span>*</span></label>
        <textarea id="c-message" name="message" rows={4} placeholder="Write your message here…" required></textarea>
      </div>
      <button type="submit" className="adm-btn">
        <i className="fab fa-whatsapp"></i> Send via WhatsApp
      </button>
    </form>
  );
}
