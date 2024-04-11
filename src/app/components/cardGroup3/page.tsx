import Link from "next/link"
import { Container, Row } from "react-bootstrap"
import Image from "next/image"

export default function CardGroup3 (){
    return(
      <Container>
        <div className="card-group ">

           {/* On this first row the 1st card is about our afterclass program called Let's get cooking. The second card is about our food menu of the week, Every week we will have a new menu.*/}
       
          <div className="card m-5 backGrounCard"> 
    <Image src="/program.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Explore our schedule to see how we make each day a fun-filled adventure in discovery! </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/program"><button type="button" className="btn btn-primary btn-lg ">Know more</button></Link>
  
</div>
    </div>
  </div>
      {/*The second card is about our food menu of the week, Every week we will have a new menu */}
  
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/calendar.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Our calendar it&apos;s filled with joy and anticipation for all the special days at the daycare!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/calendar"><button type="button" className="btn btn-primary btn-lg ">Check it out</button></Link>
      
  
</div>
  </div>
  </div>

  
  
  </div>
  </Container>
    )
}