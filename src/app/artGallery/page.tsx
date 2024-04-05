"use client"
import  Masonry  from 'react-masonry-css';
import styles from './Gallery.module.css';
import Image from 'next/image'; // Import Image component

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const images = [
  // Add your image URLs here
  // Example: { src: '/path/to/image1.jpg', alt: 'Description of image 1' },
  { src: '/pastel2.png', alt: 'Description of image 1' },
  { src: '/photo1.png', alt: 'Description of image 1' },
  { src: '/photo3.JPG', alt: 'Description of image 1' },
  
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((image, index) => (
          <div key={index}>
            {/* Assume your images are 16:9 aspect ratio */}
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={16} // Replace with the actual width for better accuracy
              height={9} // Replace with the actual height for better accuracy
              layout="responsive" 
              style={{ display: 'block' }} 
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

