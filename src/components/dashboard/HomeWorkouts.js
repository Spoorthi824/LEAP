import React from 'react';
import { Link } from 'react-router-dom';
import './HomeWorkouts.css'; // Include CSS for styling

const HomeWorkouts = () => {
  return (
    <div className="home-workouts">
     

   

      <main className="main-content">
        <section className="intro">
          <h2>Get Started with Home Workouts</h2>
          <p>Join our home workout programs tailored to various fitness levels.</p>
        </section>

        <section className="workout-programs">
          <h2>Workout Programs</h2>
          <div className="program-list">
            {/* Replace with actual program data */}
            {[1, 2, 3].map((program) => (
              <div key={program} className="program-card">
                <h3>Workout Program {program}</h3>
                <p>Duration: 30 minutes</p>
                <p>Focus: Strength, Cardio, Flexibility</p>
                <Link to={`/workouts/${program}`} className="cta-button">Join Now</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="fitness-challenges">
          <h2>Fitness Challenges</h2>
          <p>Compete with others and earn rewards!</p>
          <ul>
            <li><strong>30-Day Squat Challenge:</strong> Complete 100 squats daily.</li>
            <li><strong>Step Challenge:</strong> Track your steps, aim for 10,000 a day!</li>
            <li><strong>Yoga Challenge:</strong> Practice yoga for 20 minutes daily.</li>
          </ul>
          <Link to="/challenges" className="cta-button">View All Challenges</Link>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>Do I need any equipment for these workouts?</h4>
            <p>Most workouts can be done with minimal or no equipment.</p>
          </div>
          {/* More FAQs */}
        </section>
      </main>

     
    </div>
  );
};

export default HomeWorkouts;
