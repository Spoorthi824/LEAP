import React from 'react';
import { Link } from 'react-router-dom';
import './EducationalResources.css'; // Include CSS for styling

const EducationalResources = () => {
  return (
    <div className="educational-resources">
      
     
      <main className="main-content">
        <section className="intro">
          <h2>Explore Our 3D Models</h2>
          <p>Interactive gallery showcasing 3D models related to nutrition and health.</p>
          <Link to="/3d-models" className="cta-button">View All Models</Link>
        </section>

        <section className="videos">
          <h2>Nutritional Education Videos</h2>
          <div className="video-grid">
            {/* Replace with actual video data */}
            {[1, 2, 3].map((video) => (
              <div key={video} className="video-thumbnail">
                <h3>Video Title {video}</h3>
                {/* Add video thumbnail and player */}
              </div>
            ))}
          </div>
          <Link to="/videos" className="cta-button">Watch Now</Link>
        </section>

        <section className="resources">
          <h2>Helpful Guides and Handouts</h2>
          <ul>
            <li><a href="/guides/meal-planning.pdf" download>Meal Planning Guide</a></li>
            <li><a href="/guides/healthy-recipes.pdf" download>Healthy Recipes</a></li>
          </ul>
          <Link to="/resources" className="cta-button">Download Resources</Link>
        </section>

        <section className="faqs">
          <h2>Frequently Asked Questions</h2>
          {/* Example FAQ items */}
          <div className="faq-item">
            <h4>What is a balanced diet?</h4>
            <p>A balanced diet includes a variety of foods from all food groups...</p>
          </div>
          {/* More FAQs */}
        </section>

        <section className="community">
          <h2>Share Your Knowledge</h2>
          <p>Submit your own tips, recipes, or experiences.</p>
          <Link to="/submit-tips" className="cta-button">Submit Your Tips</Link>
        </section>
      </main>

      
    </div>
  );
};

export default EducationalResources;
