import React from "react";

export default function Footer() {
  return (
    
    <footer style={styles.footer}>
      <div style={styles.container}>

       
        <div style={styles.column}>
          <h3 style={styles.title}>My Website</h3>
          <p style={styles.text}>
            High quality products and fast delivery.  
            Your satisfaction is our priority.
          </p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.subtitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>Products</li>
            <li style={styles.listItem}>About</li>
            <li style={styles.listItem}>Contact</li>
          </ul>
        </div>

       
        <div style={styles.column}>
          <h3 style={styles.subtitle}>Contact Us</h3>
          <p style={styles.text}>Email: support@mywebsite.com</p>
          <p style={styles.text}>Phone: +1 234 567 890</p>
        </div>
      </div>

      <p style={styles.copy}>
        © 2026 My Website — All Rights Reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 20px",
    marginTop: "50px"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },

  column: {
    width: "250px",
    minWidth: "200px",
  },

  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    opacity: 0.8,
    marginBottom: "5px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    marginBottom: "8px",
    cursor: "pointer",
    opacity: 0.8,
    transition: "0.3s",
  },

  copy: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "13px",
    opacity: 0.6,
  },
};

