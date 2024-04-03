import Link from "next/link"


export default function CardGroup (){
    return(
        <div className="card-group ">
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
    <img src="./Cooking.webp" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className="card-text text-center">Welcome to a world where tiny hands make big wonders!  </h5>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
      <Link className="nav-link" href="/getCooking"><button type="button" className="btn btn-primary btn-lg ">Know more</button></Link>
  
</div>
    </div>
  </div>
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <img src="./waitingList.webp" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className="card-text text-center pDarkBrown">Discover a place where every day is an adventure and learning knows no bounds!  </h5>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
      <Link className="nav-link" href="/waiting_list"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
    </div>
  </div>
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <img src="./gallery.webp" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className="card-text text-center">Step into a world where imagination has no limits and every color tells a story!   </h5>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
      <Link className="nav-link" href="/artGallery"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
    </div>
  </div>
  <div className="card m-5 backGrounCard"> {/* Add margin to the right of each card */}
  <img src="./menu2.webp" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/*<h5 className="card-title">Let's get cooking</h5>*/}
      <h5 className="card-text text-center">Welcome to a culinary adventure where every bite is a step towards wellness and vibrant health!  </h5>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
      <Link className="nav-link" href="/menu"><button type="button" className="btn btn-primary btn-lg ">Sign me in</button></Link>
      
  
</div>
  </div>
  </div>
  </div>
    )
}