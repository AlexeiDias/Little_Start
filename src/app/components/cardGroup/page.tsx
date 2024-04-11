import Link from "next/link"
import { Container, Row } from "react-bootstrap"
import Image from "next/image"

export default function CardGroup (){
    return(
      <Container>
        <div className="card-group ">

           {/* On this first row the 1st card is about our afterclass program called Let's get cooking. The second card is about our food menu of the week, Every week we will have a new menu.*/}
       
          <div className="card m-5 backGrounCard"> 
    <Image src="/Cooking.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Welcome to a world where tiny hands make big wonders!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/getCooking"><button type="button" className="btn btn-primary btn-lg ">Know more</button></Link>
  
</div>
    </div>
  </div>
      {/*The second card is about our food menu of the week, Every week we will have a new menu */}
  
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/menu2.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Welcome to a culinary adventure where every bite is a step towards wellness and vibrant health!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/menu"><button type="button" className="btn btn-primary btn-lg ">Take a peek</button></Link>
      
  
</div>
  </div>
  </div>

  
  
  </div>
  </Container>
    )
}