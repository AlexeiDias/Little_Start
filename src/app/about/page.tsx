export const metadata = {
    title: "About Codevolution",
};


// pages/AboutUs.js
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.imageWrapper}>
        <Image
          src="/Joy.jpg" // Replace with your image path
          alt="Our Daycare"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
      <div className={styles.text}>
        <h2>🌟 About Us at [Your Daycare Name] 🌟</h2>
        <p>Hello, wonderful families! I'm Tais Deschamps, a devoted mother to two incredible children, aged 7 and 8, and a passionate holistic nutritionist enthusiast. At [Your Daycare Name], nestled in the heart of our family home, we've created a vibrant, nurturing space where young minds and bodies can thrive.</p>
        <h6>Our Philosophy</h6>
        <p>We believe that every child deserves a holistic approach to care that nourishes the body, mind, and spirit. That's why we're committed to serving nutritious meals for breakfast, lunch, dinner, and snacks, carefully prepared to ensure our little ones are fueled with the energy they need for a day full of discovery.</p>
        <h6>A Day Full of Discovery</h6>
        <ul>
            <li>Circle Time: A cozy gathering that fosters social skills and emotional connection.</li>
            <li>Storytelling & Warm-up Songs: Where imagination soars and language skills blossom.</li>
            <li>Colors, Letters, and Numbers of the Day: Fun, interactive sessions that lay the foundation for academic growth.</li>
            <li>Music Instruments Time: Encouraging self-expression and a love for music.</li>
            <li>Outdoor Fun & Arts Projects: Our safe outdoor area is a haven for creativity, from art projects that spark creativity to sports that introduce teamwork and physical health.</li>
        </ul>
       <h6>Why Choose Us?</h6>
       <p>With years of experience and a deep commitment to holistic care, our daycare is more than just a place to spend the day. It's a home where each child is valued, understood, and encouraged to explore their world with confidence. Our environment is one of warmth, safety, and joy, where every activity is designed with your child's well-being in mind.</p>
       <h6>Join Our Family</h6>
       <p>We're excited to welcome you into our daycare family. At [Your Daycare Name], your child will not only grow and learn but will also embrace a lifelong love of learning and a deep appreciation for health and wellness. Let's embark on this beautiful journey together, nurturing the next generation with care, love, and joy.</p>
       <h6>Warmly,</h6>
       <p>Tais Deschamps and the [Your Daycare Name] Family</p>
      </div>
    </div>
  );
}
