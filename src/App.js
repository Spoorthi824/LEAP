import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import components
import DailyToDo from './components/dashboard/DailyToDo';
import EducationalResources from './components/dashboard/EducationalResources';
import VirtualConsultations from './components/dashboard/VirtualConsultations';
import CommunityPrograms from './components/dashboard/CommunityPrograms';
import HomeWorkouts from './components/dashboard/HomeWorkouts'; 
import Features from './components/Features';
import NutritionGuidance from './components/dashboard/NutritionGuidance';
import VirtualMedicalServices from './components/dashboard/VirtualMedicalServices';
import SDOHQuestionnaires from './components/dashboard/SDOHQuestionnaires';

function App() {
  return (
    <Router>
      <div className="App">
        <Features />
        <Routes>
          <Route path="/tasks" element={<DailyToDo />} />
          <Route path="/resources" element={<EducationalResources />} />
          <Route path="/consultations" element={<VirtualConsultations />} />
          <Route path="/community-programs" element={<CommunityPrograms />} />
          <Route path="/home-workouts" element={<HomeWorkouts />} />
          <Route path="/nutrition" element={<NutritionGuidance />} />
          <Route path="/medical-services" element={<VirtualMedicalServices />} />
          <Route path="/register" element={<SDOHQuestionnaires />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
