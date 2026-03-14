import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

function Help() {
  return (
    <div className="page-container">
      <h1><FaQuestionCircle style={{ marginRight: 10 }} /> Help & Support</h1>

      <p>If you need any assistance, please check the following options:</p>

      <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
        <li>📞 Phone support: +1 234 567 890</li>
        <li>📧 Email: support@mywebsite.com</li>
        <li>💬 Live chat available during working hours</li>
      </ul>

      <p>We are always here to help you!</p>
    </div>
  );
}

export default Help;
