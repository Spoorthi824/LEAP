import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityPrograms.css'; // Include CSS for styling

const CommunityPrograms = () => {
  return (
    <div className="community-programs">
      


      <main className="main-content">
        

        <section className="program-list">
          <h2>Upcoming Programs</h2>
          <div className="programs">
            {/* Replace with actual program data */}
            {[1, 2, 3].map((program) => (
              <div key={program} className="program-card">
                <h3>Program Title {program}</h3>
                <p>Date: <strong>MM/DD/YYYY</strong></p>
                <p>Description of the program and how to get involved.</p>
                <Link to={`/programs/${program}`} className="cta-button">Join Now</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="rewards">
          <h2>Earn Rewards!</h2>
          <p>Every participation earns you points that can be redeemed for rewards. Here's how:</p>
          <ul>
            <li>Tree Planting: 50 points</li>
            <li>Clean-Up Drive: 30 points</li>
            <li>Community Workshops: 20 points</li>
          </ul>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How do I sign up for a program?</h4>
            <p>Simply click on the "Join Now" button for the program you’re interested in.</p>
          </div>
          {/* More FAQs */}
        </section>
      </main>

      
    </div>
  );
};

export default CommunityPrograms;
