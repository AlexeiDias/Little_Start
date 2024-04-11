export const metadata = {
    title: "Little Start cards Intro",
};


// pages/.js
import "../globals.css";
import styles from './Cards_intro.module.css';

export default function Cards_intro() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
     
      <div className={styles.text}>
        <h4  className='text-center fontLighBrown'>🌟 Explore Little Start 🌟</h4>
        <p>Dive deeper into the heart of Little Start Daycare with just a click! Each card below opens a window into our world, where nurturing care, holistic growth, and joyful discovery come together. From our philosophy to our daily adventures, learn more about how we make every day special for our little stars. Click on any card to start exploring—we can&apos;t wait to share our story with you!

</p>
        
      </div>
    </div>
  );
}
