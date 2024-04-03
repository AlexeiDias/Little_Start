// pages/CircleTime.js
import Image from 'next/image';
import styles from './CircleTime.module.css';

export default function CircleTime() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Magic of Circle Time</h1>
      <div className={styles.imageContainer}>
  <Image
    src="/circle-time-png.webp" // Placeholder image path
    alt="Circle Time"
    width={500}
    height={300}
    // Remove className from here as it applies to the Image and not its container
  />
</div>

      <p className={styles.description}>
        Preschool Circle Time is not just a routine gathering; it&apos;s a vibrant and essential part of our day that fosters social, emotional, cognitive, and language development among young learners. This special time provides a structured setting for children to bond, share experiences, and explore new ideas together, laying the groundwork for a lifelong love of learning.
      </p>
      <h2>Why Circle Time Matters</h2>
      <ul className={styles.list}>
        <li>Enhances Social Skills: Children learn to listen, take turns, and respect others.</li>
        <li>Promotes Emotional Growth: A safe space to express feelings and learn empathy.</li>
        <li>Boosts Cognitive Development: Engaging activities that spark curiosity and critical thinking.</li>
        <li>Supports Language Skills: Rich opportunities for speaking, listening, and new vocabulary.</li>
      </ul>
      <p className={styles.conclusion}>
        Join us in celebrating the wonder and joy of Circle Time, where every moment is an opportunity for growth, connection, and discovery. Dive into our circle, where every child&apos;s voice is heard, and every story matters.
      </p>
    </div>
  );
}
