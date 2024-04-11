import Link from "next/link"
import { Container, Row } from "react-bootstrap"
import Image from "next/image"

export default function CardGroup2 (){
    return(
      
        <Container>
        <div className="card-group ">

          

  {/* In the sencond row we will start with a card about our art gallery we will add new projects every week*/}
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/gallery.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className=" jua card-text text-center fontDarkBrown">Step into a world where imagination has no limits and every color tells a story!   </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/artGallery"><button type="button" className="btn btn-primary btn-lg ">Visit</button></Link>
      
  
</div>
    </div>
  </div>
 {/* The second card on the second row is about our waiting list.*/}

  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/waitingList.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className="jua card-text text-center fontDarkBrown">Discover a place where every day is an adventure and learning knows no bounds!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/waiting_list"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
    </div>
  </div>
  
  
  </div>
  </Container>
    )
}