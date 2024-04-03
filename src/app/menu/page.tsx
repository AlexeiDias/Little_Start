
import styles from './MenuPage.module.css';

const weeklyMenu = [
  {
    day: 'Monday',
    meals: {
      breakfast: {
        name: 'Whole Grain Pancakes with Fresh Berries',
        image: './Whole-Wheat-Pancakes.jpg', // Replace with the path to your image
        description: 'A delightful start with whole grain pancakes topped with a colorful mix of fresh berries.'
      },
      lunch: {
        name: 'Quinoa Salad with Roasted Vegetables',
        image: './Quinoa.jpg', // Replace with the path to your image
        description: 'Nutritious quinoa salad mixed with a variety of roasted seasonal vegetables.'
      },
      dinner: {
        name: 'Grilled Chicken with Sweet Potato Mash',
        image: './grilled-chicken.webp', // Replace with the path to your image
        description: 'Tender grilled chicken served with a side of creamy sweet potato mash.'
      }
    }
  },
  {
    day: 'Tuesday',
    meals: {
      breakfast: {
        name: 'Whole Grain Pancakes with Fresh Berries',
        image: '/images/pancakes.jpg', // Replace with the path to your image
        description: 'A delightful start with whole grain pancakes topped with a colorful mix of fresh berries.'
      },
      lunch: {
        name: 'Quinoa Salad with Roasted Vegetables',
        image: '/images/quinoa-salad.jpg', // Replace with the path to your image
        description: 'Nutritious quinoa salad mixed with a variety of roasted seasonal vegetables.'
      },
      dinner: {
        name: 'Grilled Chicken with Sweet Potato Mash',
        image: '/images/grilled-chicken.jpg', // Replace with the path to your image
        description: 'Tender grilled chicken served with a side of creamy sweet potato mash.'
      }
    }
  },
  {
    day: 'Wednesday',
    meals: {
      breakfast: {
        name: 'Whole Grain Pancakes with Fresh Berries',
        image: '/images/pancakes.jpg', // Replace with the path to your image
        description: 'A delightful start with whole grain pancakes topped with a colorful mix of fresh berries.'
      },
      lunch: {
        name: 'Quinoa Salad with Roasted Vegetables',
        image: '/images/quinoa-salad.jpg', // Replace with the path to your image
        description: 'Nutritious quinoa salad mixed with a variety of roasted seasonal vegetables.'
      },
      dinner: {
        name: 'Grilled Chicken with Sweet Potato Mash',
        image: '/images/grilled-chicken.jpg', // Replace with the path to your image
        description: 'Tender grilled chicken served with a side of creamy sweet potato mash.'
      }
    }
  },
  {
    day: 'Thuesday',
    meals: {
      breakfast: {
        name: 'Whole Grain Pancakes with Fresh Berries',
        image: '/images/pancakes.jpg', // Replace with the path to your image
        description: 'A delightful start with whole grain pancakes topped with a colorful mix of fresh berries.'
      },
      lunch: {
        name: 'Quinoa Salad with Roasted Vegetables',
        image: '/images/quinoa-salad.jpg', // Replace with the path to your image
        description: 'Nutritious quinoa salad mixed with a variety of roasted seasonal vegetables.'
      },
      dinner: {
        name: 'Grilled Chicken with Sweet Potato Mash',
        image: '/images/grilled-chicken.jpg', // Replace with the path to your image
        description: 'Tender grilled chicken served with a side of creamy sweet potato mash.'
      }
    }
  },
  {
    day: 'Friday',
    meals: {
      breakfast: {
        name: 'Whole Grain Pancakes with Fresh Berries',
        image: '/images/pancakes.jpg', // Replace with the path to your image
        description: 'A delightful start with whole grain pancakes topped with a colorful mix of fresh berries.'
      },
      lunch: {
        name: 'Quinoa Salad with Roasted Vegetables',
        image: '/images/quinoa-salad.jpg', // Replace with the path to your image
        description: 'Nutritious quinoa salad mixed with a variety of roasted seasonal vegetables.'
      },
      dinner: {
        name: 'Grilled Chicken with Sweet Potato Mash',
        image: '/images/grilled-chicken.jpg', // Replace with the path to your image
        description: 'Tender grilled chicken served with a side of creamy sweet potato mash.'
      }
    }
  },
  // Repeat the structure above for each day of the week
];

export default function MenuPage() {
  return (
    <div className={styles.menuContainer}>
      {weeklyMenu.map((dayMenu, index) => (
        <div key={index} className={styles.dayMenu}>
          <h2>{dayMenu.day}</h2>
          {Object.entries(dayMenu.meals).map(([mealTime, mealDetails], mealIndex) => (
            <div key={mealIndex} className={styles.meal}>
              <h3>{mealTime.charAt(0).toUpperCase() + mealTime.slice(1)}</h3>
              <img src={mealDetails.image} alt={mealDetails.name} className={styles.mealImage} />
              <p className={styles.mealName}>{mealDetails.name}</p>
              <p>{mealDetails.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
