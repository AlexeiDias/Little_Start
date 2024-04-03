// pages/ContactUs.js
import styles from './ContactUs.module.css'; // Make sure to create this CSS module file

export const metadata = {
    title: "Little Start Day Care Contact",
};

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌟 Get In Touch With Us 🌟</h1>
      <p>
        At Little Star Daycare, we're always here to answer any questions you might have and provide the information you need. Whether you're interested in enrolling your child, learning more about our programs, or simply want to say hello, we're just a message or phone call away.
      </p>
      <div className={styles.contactInfo}>
        <p><strong>Email Us:</strong></p>
        <p>For inquiries, support, or feedback, feel free to reach out to us at <a href="mailto:info@littlestartdaycare.com">info@littlestartdaycare.com</a>. We're committed to responding to your emails promptly because we understand how important your concerns and questions are.</p>
        <p><strong>Call Us:</strong></p>
        <p>Prefer a more personal touch? Give us a call at <a href="tel:+14157059104">415-705-9104</a>. Whether you have a quick question or need detailed information, we're here to provide the answers you're looking for.</p>
      </div>
      <p>
        We value open communication and look forward to connecting with you. Thank you for considering Little Star Daycare for your child’s early learning journey. Let’s light up their potential together!
      </p>
    </div>
  );
}
