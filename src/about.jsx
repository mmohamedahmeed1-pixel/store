import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function About() {
  return (
    <div className="page-container">
      <h1><FaInfoCircle style={{ marginRight: 10 }} /> About Us</h1>
      <p>
        Welcome to our website! We focus on delivering high-quality products and services
        with excellent customer support. Our mission is to create a smooth and enjoyable
        experience for every visitor.
      </p>
      <p>
        Our team works hard to improve the platform and provide the best possible value.
      </p>
    </div>
  );
}

export default About;