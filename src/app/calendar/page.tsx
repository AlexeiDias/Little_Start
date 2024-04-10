// pages/CalendarPage.js
import { Container } from 'react-bootstrap';
import styles from './CalendarPage.module.css'; // Ensure you have this CSS module file created

export const metadata = {
    title: "Little Start Day Care Calendar Year",
};

export default function CalendarPage() {
  return (
    <>
      <Container>
      <div className={styles.calendarContainer}>
        <h1>Our Daycare Calendar</h1>
        <div
          className={styles.calendar}
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://calendar.google.com/calendar/embed?src=384c98ee5ccca56855806976a509a9c69d9dbe1ed60a9fc061ed83d0d32a83d3%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
         ` 
        }}
        />
      </div>
      </Container>
    </>
  );
}
