import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Use connection string and real auth here
    // For now, mock successful login
    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container animate-fade-in">
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      
      <div className="login-card">
        <div className="login-header">
          {/* Logo placeholder, assumes user adds logo.png to public folder */}
          <img src="/logo.png" alt="Sensor Academy" className="login-logo" onError={(e) => { e.target.style.display = 'none'; }} />
          <h2>Welcome to<br/><span>Sensor Academy</span> admin!</h2>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="admin@sensoracademy.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
        
        <div className="social-login">
          <p>Or Sign in with</p>
          <div className="social-icons">
            <button className="social-btn facebook" aria-label="Facebook">f</button>
            <button className="social-btn google" aria-label="Google">G</button>
            <button className="social-btn apple" aria-label="Apple"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
