import React, { useState } from 'react';
import './SDOHQuestionnaires.css'; // Include CSS for styling

const SDOHQuestionnaires = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    income: '',
    employmentStatus: '',
    housingSituation: '',
    healthConditions: '',
  });
  
  const [recommendations, setRecommendations] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock recommendations based on user input
    const generatedRecommendations = generateRecommendations(formData);
    setRecommendations(generatedRecommendations);
  };

  const generateRecommendations = (data) => {
    // Sample logic to generate recommendations based on user input
    let recommendations = [];
    if (data.income === 'low') {
      recommendations.push('Consider local food assistance programs.');
    }
    if (data.housingSituation === 'unstable') {
      recommendations.push('Explore housing support services in your area.');
    }
    if (data.healthConditions) {
      recommendations.push('Follow up with your healthcare provider regarding your conditions.');
    }
    return recommendations.length > 0 ? recommendations : ['Maintain a balanced diet and regular exercise.'];
  };

  return (
    <div className="sdoh-questionnaires">
      <header className="header">
        <h1>SDOH Questionnaires</h1>
        <p>Personalized health recommendations based on social and health data.</p>
      </header>

     

      <main className="main-content">
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <h2>Complete the Questionnaire</h2>

          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>

          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            Annual Income:
            <select name="income" value={formData.income} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>

          <label>
            Employment Status:
            <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
            </select>
          </label>

          <label>
            Housing Situation:
            <select name="housingSituation" value={formData.housingSituation} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="stable">Stable</option>
              <option value="unstable">Unstable</option>
              <option value="homeless">Homeless</option>
            </select>
          </label>

          <label>
            Any existing health conditions (if yes, please specify):
            <input type="text" name="healthConditions" value={formData.healthConditions} onChange={handleChange} />
          </label>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        {recommendations && (
          <section className="recommendations">
            <h2>Your Recommendations:</h2>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>For more personalized health guidance, contact our support team.</p>
        <form className="newsletter">
          <label htmlFor="email">Subscribe for updates:</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
};

export default SDOHQuestionnaires;
