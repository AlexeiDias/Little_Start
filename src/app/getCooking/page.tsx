// pages/OurDay.js
import Image from 'next/image';
import styles from './getCooking.module.css'; // Ensure to create this CSS module
import { Container } from 'react-bootstrap';
export default function OurDay() {
  return (
   
    <div className={styles.container}>
      <h2 className={`styles.title jua text-center fontLighBrown`}>Welcome to our cheef tods program</h2>
      <div className={styles.imageWrapper}>
        <Image
          src="/cooking.jpg" // Replace with your image path
          alt="Our Daycare"
          width={600}
          height={400}
          layout="responsive"
         
        />
      </div>
      <div className={styles.text}>
        {/* Insert the provided text here, structuring it into paragraphs */}
        <p>Our &quot;Let&quot;s Get Cooking&quot; workshop is specially designed for our daycare&quot;s budding chefs, where imagination meets nutrition.</p>
        <div className={styles.imageWrapper}>
        <Image
          src="/muffin.jpeg" // Replace with your image path
          alt="Our Daycare"
          width={600}
          height={400}
          layout="responsive"
         
        />
      </div>
        {/*<h6>Morning Arrival & Homemade Breakfast</h6>*/}
        <p>It&quot;s more than just mixing ingredients; it&quot;s about creating joy, learning life skills, and embracing healthy eating.</p>
        <div className={styles.imageWrapper}>
        <Image
          src="/pastel2.png" // Replace with your image path
          alt="Our Daycare"
          width={600}
          height={400}
          layout="responsive"
         
        />
      </div>
        {/*<h6>Circle Time: A Time for Connection and Learning</h6>*/}
        <p>Dive into this fun, hands-on adventure, where every recipe is a story, and every dish is a masterpiece crafted by your child.</p>
        <div className={styles.imageWrapper}>
        
      </div>
      
        
      <div className="card-body text-justify backGrounCard">
    
       
    <p className='text-justify  fs-6 jua'>
    Suitable for ages: 3-6
Duration: Weekly sessions, 1 hour each
What&quot;s Cooking?: A delightful mix of easy, nutritious recipes

👩‍🍳 Spots are limited – Sign up today and let&quot;s stir up some fun!
    </p>
    

</div>
</div>
<div className="card">
  {/*<h5 className="card-text m-2"> Please fill up our Waiting List form belllow*/}

  
  <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSfhFueSf0HkLtt8PMJ_jwomGY3FxR42IVITT7KhAlp1_o8H-g/viewform?embedded=true"
  width="auto"
  height="1262"
  style={{ border: 'none', margin: '0' }} // Apply inline styles
  loading="lazy"
>
  Loading…
</iframe>

        </div>
     
    </div>
    
  );
}
