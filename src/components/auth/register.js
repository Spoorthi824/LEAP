// src/components/Auth/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions';
import axios from '../../services/apei';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', formData);
      dispatch(setUser(response.data));
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
