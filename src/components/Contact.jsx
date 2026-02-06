import React from "react";

const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "jadhavpranay08@gmail.com",
    link: "mailto:jadhavpranay08@gmail.com",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/pranayaj",
    link: "https://www.linkedin.com/in/pranayaj/",
  },
  {
    icon: "🐱",
    label: "GitHub",
    value: "github.com/pranayaj",
    link: "https://github.com/pranayaj",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-fullwidth">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{contact.icon}</span>
            <div className="contact-info">
              <p className="contact-label">{contact.label}</p>
              <p className="contact-value">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
