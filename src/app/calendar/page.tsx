// pages/CalendarPage.js

import styles from './CalendarPage.module.css'; // Ensure you have this CSS module file created

export const metadata = {
    title: "Little Start Day Care Calendar Year",
};

export default function CalendarPage() {
  return (
    <>
      
      <div className={styles.calendarContainer}>
        <h1>Our Daycare Calendar</h1>
        <div
          className={styles.calendar}
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://calendar.google.com/calendar/embed?src=5cb4b93edd2510c37e65c195bb3d979970f3f6fda3ca5f8362bcc509fa90cfe8%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
         ` 
        }}
        />
      </div>
    </>
  );
}
