import React from 'react';
import './NutritionGuidance.css'; // Include CSS for styling

const NutritionGuidance = () => {
  return (
    <div className="nutrition-guidance">
      <header className="header">
        <h1>Nutrition Guidance</h1>
        <p>Your resource for affordable meal plans, balanced diet tips, and delicious recipes.</p>
      </header>

      

      <main className="main-content">
        <section className="meal-plans">
          <h2>Affordable Meal Plans</h2>
          <p>Explore our weekly meal plans designed to fit your budget and dietary needs.</p>
          <ul className="meal-plan-list">
            <li>
              <h3>Week 1: Budget-Friendly Meals</h3>
              <ul>
                <li>Breakfast: Oatmeal with fruits</li>
                <li>Lunch: Lentil soup with whole-grain bread</li>
                <li>Dinner: Grilled chicken with steamed veggies</li>
              </ul>
            </li>
            <li>
              <h3>Week 2: Vegetarian Delights</h3>
              <ul>
                <li>Breakfast: Smoothie bowl</li>
                <li>Lunch: Quinoa salad</li>
                <li>Dinner: Stir-fried tofu with vegetables</li>
              </ul>
            </li>
            {/* Add more weeks as needed */}
          </ul>
        </section>

        <section className="balanced-diet-tips">
          <h2>Balanced Diet Tips</h2>
          <ul>
            <li>Incorporate a variety of fruits and vegetables into your meals.</li>
            <li>Choose whole grains over refined grains.</li>
            <li>Include lean proteins such as chicken, fish, beans, and nuts.</li>
            <li>Limit processed foods and added sugars.</li>
            <li>Stay hydrated; aim for 8 cups of water a day.</li>
          </ul>
        </section>

        <section className="recipes">
          <h2>Healthy Recipes</h2>
          <div className="recipe-list">
            <div className="recipe-card">
              <h3>Quinoa Salad</h3>
              <p>A refreshing salad packed with nutrients.</p>
              <button className="cta-button">View Recipe</button>
            </div>
            <div className="recipe-card">
              <h3>Vegetable Stir-Fry</h3>
              <p>A quick and easy dish loaded with veggies.</p>
              <button className="cta-button">View Recipe</button>
            </div>
            <div className="recipe-card">
              <h3>Overnight Oats</h3>
              <p>A nutritious and convenient breakfast option.</p>
              <button className="cta-button">View Recipe</button>
            </div>
            {/* Add more recipes as needed */}
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How do I create a balanced meal plan?</h4>
            <p>Start by including a protein source, healthy fats, and plenty of vegetables in each meal.</p>
          </div>
          <div className="faq-item">
            <h4>Are there specific diets I should follow?</h4>
            <p>Consult with a nutritionist to determine the best diet for your health goals.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>
      </main>

      <footer className="footer">
        <p>Contact us for personalized nutrition guidance.</p>
        <form className="newsletter">
          <label htmlFor="email">Subscribe for healthy eating tips:</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
};

export default NutritionGuidance;
