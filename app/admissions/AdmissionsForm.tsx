'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, FormEvent, useState } from 'react';

const courseMap: Record<string, string> = {
  'Advanced Vocational Diploma in General Duty Assistant': 'advanced-gda',
  'Vocational Diploma in General Duty Assistant': 'vocational-gda',
  'Diploma in Patient Care Assistant': 'patient-care',
  'Diploma in First aid and Patient Care': 'first-aid-patient-care',
  'Diploma in Medical Laboratory Technology': 'medical-lab-tech',
  'Diploma in Operation Theatre Technology': 'operation-theatre-tech',
  'Village Health worker': 'village-health-worker',
};

export default function AdmissionsForm() {
  const searchParams = useSearchParams();
  const courseRef = useRef<HTMLSelectElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam && courseRef.current) {
      const val = courseMap[courseParam] || '';
      if (val) courseRef.current.value = val;
    }
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const address = (form.elements.namedItem('address') as HTMLTextAreaElement).value;
    const qualification = (form.elements.namedItem('qualification') as HTMLSelectElement).value;
    const course = (form.elements.namedItem('course') as HTMLSelectElement).value;

    const msg = `Admission Application:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nQualification: ${qualification}\nCourse: ${course}`;
    window.open(`https://wa.me/919942185370?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="adm-success">
        <div className="adm-success-icon"><i className="fas fa-check-circle"></i></div>
        <h3>Application Sent!</h3>
        <p>Your application has been forwarded via WhatsApp. Our admissions team will contact you shortly.</p>
        <button className="adm-btn" onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <form className="adm-form" onSubmit={handleSubmit} noValidate>
      {/* Row 1 */}
      <div className="adm-row">
        <div className="adm-field">
          <label htmlFor="name">
            <i className="fas fa-user"></i> Full Name <span>*</span>
          </label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div className="adm-field">
          <label htmlFor="phone">
            <i className="fas fa-phone"></i> Phone Number <span>*</span>
          </label>
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>

      {/* Row 2 */}
      <div className="adm-row">
        <div className="adm-field">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email Address
          </label>
          <input type="email" id="email" name="email" placeholder="you@example.com" />
        </div>
        <div className="adm-field">
          <label htmlFor="qualification">
            <i className="fas fa-graduation-cap"></i> Qualification <span>*</span>
          </label>
          <select id="qualification" name="qualification" required>
            <option value="">Select qualification</option>
            <option value="10th">10th pass / fail</option>
            <option value="12th">12th pass / fail</option>
          </select>
        </div>
      </div>

      {/* Course */}
      <div className="adm-field adm-field-full">
        <label htmlFor="course">
          <i className="fas fa-book-open"></i> Choose Your Course <span>*</span>
        </label>
        <select id="course" name="course" ref={courseRef} required>
          <option value="">Select a course</option>
          <option value="advanced-gda">Advanced Vocational Diploma in General Duty Assistant (2 Years)</option>
          <option value="vocational-gda">Vocational Diploma in General Duty Assistant (1 Year)</option>
          <option value="patient-care">Diploma in Patient Care Assistant (2 Years)</option>
          <option value="first-aid-patient-care">Diploma in First Aid and Patient Care (2 Years)</option>
          <option value="medical-lab-tech">Diploma in Medical Laboratory Technology (2 Years)</option>
          <option value="operation-theatre-tech">Diploma in Operation Theatre Technology (2 Years)</option>
          <option value="village-health-worker">Village Health Worker (1 Year)</option>
        </select>
      </div>

      {/* Address */}
      <div className="adm-field adm-field-full">
        <label htmlFor="address">
          <i className="fas fa-map-marker-alt"></i> Address <span>*</span>
        </label>
        <textarea id="address" name="address" rows={3} placeholder="Your full address" required></textarea>
      </div>

      <button type="submit" className="adm-btn">
        <i className="fab fa-whatsapp"></i> Send Application via WhatsApp
      </button>
    </form>
  );
}
