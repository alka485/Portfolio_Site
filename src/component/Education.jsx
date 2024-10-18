/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="education-page">
      <h1>Education & Certifications</h1>

      <section className="education-section">
        <h2>Academic Background</h2>
        <div className="education-item">
          <h3>Master of Science in Computer Science</h3>
          <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), India</p>
          <span>Graduated: 2010</span>
          <p>Coursework: Advanced Algorithms, AI, Machine Learning, DBMS.</p>
        </div>

        <div className="education-item">
          <h3>Web Development Certificate</h3>
          <p>University of Washington</p>
          <span>Completed: 2023</span>
          <p>Focus: Full-stack development, APIs, ReactJS.</p>
        </div>

        <div className="education-item">
          <h3>Software Engineering Certificate</h3>
          <p>Per Scholas</p>
          <span>Completed: 2023</span>
          <p>Emphasis: Agile, JavaScript, React.</p>
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <ul>
          <li>Udemy: JavaScript Algorithms & Data Structures Masterclass</li>
          <li>Coursera: Front-End Web Development with React</li>
          <li>Udemy: Advanced CSS and Sass: Flexbox, Grid, Animations</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Key Projects</h2>
        <div className="project-item">
          <h3>Finance Tracker App</h3>
          <p>A tool to manage expenses with a user-friendly interface and real-time visualization.</p>
        </div>

        <div className="project-item">
          <h3>Recipe Search App</h3>
          <p>Integrated Edamam API for dietary preference-based recipe search.</p>
        </div>
      </section>

      <section className="learning-section">
        <h2>Continuous Learning</h2>
        <p>I continually improve my skills with online courses, coding challenges, and personal projects.</p>
      </section>

      <section className="contact-section">
        <h2>Want to Learn More?</h2>
        <p>Feel free to <Link to="/contact">contact me</Link> if you'd like to discuss my education or projects in more detail.</p>
      </section>
    </div>
  );
};

export default Education;
