import React from 'react';
import './VirtualConsultations.css'; // Include CSS for styling

const VirtualConsultations = () => {
  return (
    <div className="virtual-consultations">
      

      <main className="main-content">
        <section className="intro">
          <h2>Why Choose Virtual Consultations?</h2>
          <p>Our virtual consultations provide you with convenient access to healthcare professionals, allowing you to address your medical needs from the comfort of your home.</p>
        </section>

        <section className="services">
          <h2>Available Services</h2>
          <ul>
            <li><strong>General Consultations:</strong> Get advice and treatment for various health issues.</li>
            <li><strong>Specialist Referrals:</strong> Consult with specialists through video calls.</li>
            <li><strong>Mental Health Support:</strong> Speak with licensed therapists for mental health assistance.</li>
            <li><strong>Follow-Up Appointments:</strong> Convenient follow-up consultations to monitor your health.</li>
          </ul>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>Sign up for an account and log in.</li>
            <li>Choose the type of consultation you need.</li>
            <li>Book an appointment at your convenience.</li>
            <li>Join the consultation via video call.</li>
          </ol>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How do I schedule an appointment?</h4>
            <p>You can schedule an appointment by logging into your account and selecting your preferred service.</p>
          </div>
          <div className="faq-item">
            <h4>What technology do I need?</h4>
            <p>You'll need a device with a camera and microphone, and a stable internet connection.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>

        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>Book your virtual consultation today and take a step towards better health!</p>
          <button className="cta-button">Schedule an Appointment</button>
        </section>
      </main>

      
    </div>
  );
};

export default VirtualConsultations;
