import { Row, Container, Image } from "react-bootstrap"


export default function GetCooking (){
    return(
        <Container className="justify-content-md-center mt-5 cardSize ">
            <h3 className="card-title jua tittle text-center mb-5 align-middle">Welcome to our cheef tods program</h3>
            <div className="card mb-3 cardSize backGrounCard" >
  <div className="row g-0">
    <div className="col-md-6">
      <Image src="./cooking.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body backGrounCard">
      
        <p className="card-text jua fs-2 align-middle fontDarkBrown">Our &quot;Let&quot;s Get Cooking&quot; workshop is specially designed for our daycare&quot;s budding chefs, where imagination meets nutrition.</p>
        
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 cardSize" >
  <div className="row g-0">
    
    <div className="col-md-6 backGrounCard">
      <div className="card-body ">
      
        <p className="card-text jua fs-2 fontDarkBrown">It&quot;s more than just mixing ingredients; it&quot;s about creating joy, learning life skills, and embracing healthy eating.</p>
        
      </div>
    </div>
    <div className="col-md-6 ">
      <Image src="./muffin.jpeg" className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
<div className="card mb-3 cardSize backGrounCard" >
  <div className="row g-0">
    <div className="col-md-6">
      <Image src="./pastel2.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6 backGrounCard">
      <div className="card-body ">
      
        <p className="card-text jua fs-2 fontDarkBrown">Dive into this fun, hands-on adventure, where every recipe is a story, and every dish is a masterpiece crafted by your child.</p>
        
      </div>
    </div>
  </div>
</div>
        <div className="essential-features align-items-center ">
      <Row  className="g-4">
      <div className="card text-center backGrounCard">
  <div className="card-header">
  
  </div>
 
  
 
  <div className="card-body text-justify backGrounCard">
    
       
        <p className='text-justify  fs-6 jua'>
        Suitable for ages: 3-6
Duration: Weekly sessions, 1 hour each
What’s Cooking?: A delightful mix of easy, nutritious recipes

👩‍🍳 Spots are limited – Sign up today and let&quot;s stir up some fun!
        </p>
    
  </div>
  <div className="card-footer text-body-secondary">
  {/*<h5 className="card-text m-2"> Please fill up our Waiting List form belllow*/}

  
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeZ_z3gPMYtbbAS1y9pr-ytL9vKytv0bdpJfLt6ciCkYMKQVw/viewform?embedded=true" width="640" height="1262" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</div>
      </Row>
      
    </div>
    </Container>
    
        )
    }