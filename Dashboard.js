import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">VRV Dashboard</h1>
      <p className="dashboard-description">
        Welcome to the VRV SEC Dashboard. Track key metrics and insights about cybersecurity.</p>
      <p className="dashboard-description2"> Role-Based Access Control Option</p>

      <div className="dashboard-navigation">
        <Link to="/users" className="nav-button">User Management</Link>
        <Link to="/roles" className="nav-button">Role Management</Link>
      </div>

      <div className="statistics">
        <div className="stat-card">
          <h3>Total Clients</h3>
          <p>200+</p>
        </div>
        <div className="stat-card">
          <h3>Endpoints Secured</h3>
          <p>1M+</p>
        </div>
        <div className="stat-card">
          <h3>Threats Blocked</h3>
          <p>500K+</p>
        </div>
        <div className="stat-card">
          <h3>Countries Served</h3>
          <p>12+</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Threat Trends (2022)</h3>
          <img
            src="https://surfshark.com/research/_next/public/data-breach-impact/downloads/visuals-for-press/top-10-countries-by-cybercrime-density.png"
            alt="Threat Trends (2022) Chart"
          />
          <p className='SurfsharkMention'>All images have been sourced by SurfShark.com</p>
        </div>
        <div className="chart-card">
          <h3>Cybercrime Impact ($)</h3>
          <img
            src="https://surfshark.com/research/_next/public/data-breach-impact/downloads/visuals-for-press/impact-of-different-cybercrimes.png"
            alt="Cybercrime Impact ($) Chart"
          />
        </div>
      </div>

      <div className='NearFooterPart'>
      <h3>About us</h3>
      <p>VRV Security, founded in 2020 in Chennai, Tamil Nadu, is a global powerhouse in AI-driven cybersecurity solutions. With a presence in over 12 countries, we have rapidly expanded to protect digital assets for Fortune 500 companies and government organizations. In 2024, our company valuation soared to $400 million, and we continue to set new benchmarks in cybersecurity. We deliver more than 500,000 hours of proactive threat monitoring annually and have secured over 1 million endpoints worldwide. Trusted by over 200 international clients across 5 continents, our expert team ensures unparalleled security and client satisfaction.</p>
      <h3>What We Do</h3>
      <p>Our advanced cybersecurity offerings are built on AI and cloud technologies, tailored to protect modern digital infrastructures. Our key services include:

         AI-Dependent Services and Solutions VAPT**: Leveraging artificial intelligence, we perform comprehensive Vulnerability Assessment and Penetration Testing (VAPT) to identify and mitigate threats efficiently.
         Cloud Infrastructure VAPT**: We secure cloud environments by assessing vulnerabilities, ensuring robust defense mechanisms for sensitive data and applications.
         Threat Monitoring & SOC**: Our Security Operations Center (SOC) provides 24/7 threat monitoring, incident response, and real-time analytics to safeguard against evolving cyber threats.
         Company Infrastructure & Services VAPT**: We specialize in protecting complex enterprise infrastructure with tailor-made security strategies to prevent unauthorized access and data breaches.</p>

    <h3>Our Mission</h3>
    <p>At VRV Security, our mission is to redefine cybersecurity by delivering adaptive, AI-driven solutions that anticipate and mitigate threats before they materialize. We aim to set the gold standard in proactive threat management and ensure our clients operate in a secure and resilient digital landscape. Our commitment to innovation and excellence has earned us a 95% client retention rate, a testament to our reliable and effective security measures. We strive to continue pushing boundaries and staying at the forefront of global cybersecurity.</p>
      </div>

      <div className="image-banner">
        <img 
          src="https://surfshark.com/research/_next/public/data-breach-impact/downloads/visuals-for-press/yearly-growth-of-cybercrime-costs.png"
          alt="Cybercrime Cost Growth Chart"
        />
      </div>
    </div>
  );
};

export default Dashboard;
