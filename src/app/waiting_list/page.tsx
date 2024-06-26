import { Container, Row } from "react-bootstrap";

export default function Waiting_list (){
    return (
        <Container>
                <div className="essential-features align-items-center ">
        <Row  className="g-4">
            <div className="card text-center backGrounCard">
            <div className="card-body text-justify">
    
                <h5 className="text-center m-5 tittle">🌟 Join Our Daycare Waiting List! 🌈</h5>
            <p className='text-justify  fs-6 jua fontDarkBrown'>
                Discover a place where every day is an adventure and learning knows no bounds! Due to high demand, we&apos;ve introduced a waiting list for our cherished daycare community. Whether you&apos;re planning ahead or finding us for the first time, securing a spot on our waiting list ensures your little one doesn&apos;t miss out on the magic of discovery and the warmth of our caring environment. 🏫💖
        <p className='m-5 fontDarkBrown'>
                <h5>Why Join?</h5>
        <ul >
        <li >Priority Enrollment: Get first dibs when spaces open up.</li>
        <li >Stay Informed: Receive updates about our programs and events.</li>
        <li >3 Mattertags </li>
        <li >Peace of Mind: Ensure your child&apos;s place in our nurturing setting.</li>
        <h5>Don&apos;t miss a beat – Join our waiting list today and be part of our family&apos;s next chapter.</h5>
        </ul>
        </p>
        </p>
    </div>
    <div className="card">
  {/*<h5 className="card-text m-2"> Please fill up our Waiting List form belllow*/}

  
  <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSeZ_z3gPMYtbbAS1y9pr-ytL9vKytv0bdpJfLt6ciCkYMKQVw/viewform?embedded=true"
  width="auto"
  height="1262"
  style={{ border: 'none', margin: '0' }} // Apply inline styles
  loading="lazy"
>
  Loading…
</iframe>

        </div>
    </div>
      </Row>
      
    </div>
  </Container>   
    );
}