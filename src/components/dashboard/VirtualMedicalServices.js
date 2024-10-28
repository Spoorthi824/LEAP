import React from 'react';
import './VirtualMedicalServices.css'; // Include CSS for styling

const VirtualMedicalServices = () => {
  return (
    <div className="virtual-medical-services">
      <header className="header">
        <h1>Virtual Medical Services</h1>
        <p>Access telemedicine consultations, mental health support, remote monitoring, and more.</p>
      </header>

     
      <main className="main-content">
        <section className="telemedicine">
          <h2>Telemedicine Consultations</h2>
          <p>Consult with licensed medical professionals via secure video calls. Get personalized care from the comfort of your home.</p>
          <button className="cta-button">Schedule a Telemedicine Appointment</button>
        </section>

        <section className="mental-health-support">
          <h2>Mental Health Support</h2>
          <p>Access counseling and therapy services with licensed mental health professionals through virtual sessions.</p>
          <button className="cta-button">Book a Mental Health Session</button>
        </section>

        <section className="remote-monitoring">
          <h2>Remote Monitoring</h2>
          <p>Utilize technology to monitor your health from home. Our services include regular check-ins and health tracking through connected devices.</p>
          <button className="cta-button">Learn More About Remote Monitoring</button>
        </section>

        <section className="additional-services">
          <h2>Additional Services</h2>
          <ul>
            <li>Chronic disease management</li>
            <li>Medication management and reminders</li>
            <li>Nutrition counseling and support</li>
            <li>Fitness and wellness coaching</li>
          </ul>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How do I schedule a telemedicine appointment?</h4>
            <p>You can schedule an appointment through our online booking system or by contacting our support team.</p>
          </div>
          <div className="faq-item">
            <h4>Is my information secure during virtual consultations?</h4>
            <p>Yes, we use secure encryption to protect your personal information during all consultations.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>
      </main>

      <footer className="footer">
        <p>Contact us for more information on our virtual medical services.</p>
        <form className="newsletter">
          <label htmlFor="email">Subscribe for updates on our services:</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
};

export default VirtualMedicalServices;
