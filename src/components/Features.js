// components/Features.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

function Features() {
  const featureList = [
    {
      title: "SDOH Questionnaires",
      description: "Personalized health recommendations based on social and health data.",
      path: "/register"
    },
    {
      title: "Daily To-Do Lists",
      description: "Earn points by completing health tasks like exercise, hydration, and meal planning.",
      path: "/tasks"
    },
    {
      title: "Educational Resources",
      description: "Nutritional health education through 3D models and literacy-specific videos.",
      path: "/resources"
    },
    {
      title: "Community Programs",
      description: "Join community initiatives like tree planting and clean-up drives for rewards.",
      path: "/community-programs"
    },
    {
      title: "Home Workouts & Competitions",
      description: "Engage in home workout programs and fitness challenges.",
      path: "/home-workouts"
    },
    {
      title: "Virtual Consultations",
      description: "Access medical consultations from the comfort of your home.",
      path: "/consultations"
    },
    {
      title: "Nutrition Guidance",
      description: "Affordable meal plans, balanced diet tips, and recipe suggestions.",
      path: "/nutrition"
    },
    {
      title: "Virtual Medical Services",
      description: "Telemedicine consultations, mental health support, remote monitoring, and more.",
      path: "/medical-services"
    },
  ];

  return (
    <section className="features">
      {featureList.map((feature, index) => (
        <Link to={feature.path} key={index} className="feature-card">
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
        </Link>
      ))}
    </section>
  );
}

export default Features;
