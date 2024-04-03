// pages/OurDay.js
import Image from 'next/image';
import styles from './OurDay.module.css'; // Ensure to create this CSS module

export default function OurDay() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A Day at Little Star Daycare</h1>
      <Image
        src="/path/to/your/image-placeholder.jpg" // Update with your image path
        alt="A Day at Little Star Daycare"
        width={600}
        height={400}
        className={styles.image}
      />
      <div className={styles.text}>
        {/* Insert the provided text here, structuring it into paragraphs */}
        <p>Welcome to a day filled with discovery, joy, and growth at Little Star Daycare, where each moment is an opportunity for our little stars to shine brighter. Our day is thoughtfully planned to nurture the minds, bodies, and spirits of our young learners, ensuring they receive a balanced mix of education, play, and rest. Here’s a glimpse into a typical day with us:</p>
        <h6>Morning Arrival & Homemade Breakfast</h6>
        <p>Our day begins as we welcome our children with warm smiles into our cozy, inviting space. We kickstart the morning with a delicious homemade breakfast, lovingly prepared to fuel their bodies and minds for the day ahead. It’s a time of gentle chatter and laughter as we gather around the table, sharing stories and plans for the day.</p>
        <h6>Circle Time: A Time for Connection and Learning</h6>
        <p>With breakfast cleared away, we gather in our special circle, a sacred space for connection and shared learning. Circle time at Little Star Daycare is a vibrant tapestry woven with storytelling, sing-along songs, and puppet play, sparking imaginations and encouraging language development. It’s a time where each child feels seen and heard, an integral part of our little community.</p>
        <h6>Creative Exploration with Art Projects</h6>
        <p>As the stories and songs wind down, our focus shifts to art projects. Hands dip into colors, crafting creations that express their inner worlds. Our art sessions are more than just fun; they’re a journey into creativity, fine motor skill development, and emotional expression.</p>
        <h6>Outdoor Adventures and Nature Play</h6>
        <p>Next, we venture into our fun outside area, a natural playground designed to inspire. Here, we engage with nature, water plants, and embark on creative projects using leaves, sticks, and rocks. It’s a time for sensory exploration, environmental education, and the pure joy of outdoor play.</p>
        <h6>Nourishing the Body and Mind</h6>
        <p>After our outdoor adventures, we wash up and gather for a super holistic and nutritious lunch. Every meal at Little Star Daycare is an opportunity to teach our children about the importance of healthy eating, with dishes that are as delicious as they are nutritious.</p>
        <h6>Quiet Time for Rest and Reflection</h6>
        <p>Post-lunch, we settle into a period of quiet time. This essential pause in our day allows for relaxation, reflection, and rest, ensuring our little ones remain balanced and centered.</p>
        <h6>S.T.E.A.M. Learning: Engaging Young Minds</h6>
        <p>Refreshed from quiet time, we dive into our S.T.E.A.M. class, an engaging session focused on Numbers 0-10 and simple shapes like circles, squares, and triangles. Through hands-on activities, we lay the foundations for mathematical thinking, problem-solving, and creativity.</p>
        <h6>Energetic Afternoons with Sports</h6>
        <p>As the afternoon progresses, it’s time for sport! Our activities, including Capoeira and Soccer, not only promote physical health but also teach teamwork, discipline, and the joy of movement.</p>
        <h6>Wrapping Up with Nutritious Snacks</h6>
        <p>Our day nears its end with a serving of delicious, nutritious snacks. It’s a time to refuel, reflect on the day’s adventures, and share stories of our discoveries and achievements.</p>
        <h6>Farewell Until Tomorrow</h6>
        <p>As our day at Little Star Daycare draws to a close, we bid farewell to our little stars, sending them home with hearts full of joy, minds brimming with new knowledge, and bodies energized by wholesome care. Each day is a step on their journey of growth, and we’re honored to guide them, one joyful day at a time.</p>
        <p>At Little Star Daycare, every day is an adventure, a learning experience, and a step toward a brighter future. Join us, and let’s make each day count!</p>
        <p className='f-2'>Each week, we'll return all projects completed by the children to their parents. This way, you'll stay updated on your child's progress and the creative milestones they've reached throughout the week.</p>
        {/* Continue with the rest of the text */}
      </div>
    </div>
  );
}
