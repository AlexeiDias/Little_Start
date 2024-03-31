
import Link from "next/link"


export default function Navbar_top (){
    return (
      <nav  className="jua navbar navbar-expand-lg bg-body-tertiary " >
      <div className="container-fluid justify-content-center">
        {/*<a className="navbar-brand" href="#">Navbar</a>*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Program
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/program/food_menu">Food Menu</Link></li>
                <li><a className="dropdown-item" href="/program/circle_time">Circle time</a></li>
                <li><a className="dropdown-item" href="/program/storytelling">Storytelling</a></li>
                <li><a className="dropdown-item" href="/program/warm_up_songs">Warm up songs</a></li>
                <li><a className="dropdown-item" href="/program/our_day">Our day</a></li>
                <li><a className="dropdown-item" href="/program/colorful_day">Colorful Day</a></li>
                <li><a className="dropdown-item" href="/program/letter_of_the_week">Letter of the week</a></li>
                <li><a className="dropdown-item" href="/program/number_of_the_day">Number of the day</a></li>
                <li><a className="dropdown-item" href="/program/music_time">Music Time</a></li>
                <li><a className="dropdown-item" href="/program/cooking">Let’s get cooking</a></li>
              </ul>
            </li>
             {/*<li className="nav-item">
             <Link className="nav-link" href="/calendar">Calendar</Link>
            </li>*/}
            <li className="nav-item">
            <Link className="nav-link" href="/about">About Us</Link>
             
            </li>
            {/*<li className="nav-item">
            <Link className="nav-link" href="/enrollment">Enrollment</Link>
          
            </li>*/}
            {/*<li className="nav-item">
              <Link className="nav-link" href="/waiting_list">Waiting List</Link>
            </li>*/}
            
            
            {/*<li className="nav-item">
              <a className="nav-link" href="/forms">Enrollment Forms Download</a>
            </li>*/}

            {/*<li className="nav-item">
              <a className="nav-link" href="/supplemmental">Supplemmental Information</a>
            </li>*/}

            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    )
        
        
}

