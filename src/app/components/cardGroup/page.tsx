import Link from "next/link"
import Image from "next/image"

export default function CardGroup (){
    return(
        <div className="card-group ">
       
          <div className="card m-5 backGrounCard"> 
    <Image src="/Cooking.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Welcome to a world where tiny hands make big wonders!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/getCooking"><button type="button" className="btn btn-primary btn-lg ">Know more</button></Link>
  
</div>
    </div>
  </div>
 
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/waitingList.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className="jua card-text text-center fontDarkBrown">Discover a place where every day is an adventure and learning knows no bounds!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/waiting_list"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
    </div>
  </div>
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/gallery.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className=" jua card-text text-center fontDarkBrown">Step into a world where imagination has no limits and every color tells a story!   </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/artGallery"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
    </div>
  </div>
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <Image src="/menu2.webp" className="card-img-top" alt="..." width={500} height={300}/>
    <div className="card-body">
      
      <h5 className=" jua card-text text-center fontDarkBrown">Welcome to a culinary adventure where every bite is a step towards wellness and vibrant health!  </h5>
      
      <div className="d-flex justify-content-center">
      <Link className="nav-link" href="/menu"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
  </div>
  </div>
  </div>
    )
}