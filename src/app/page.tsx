"use client"
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

  
export default class NextJsCarousel extends Component { 
    render() { 
        return ( 
            <div> 
               
              <Carousel> 
                  <div> 
                      <img src="/photo1.png" alt="image1"/> 
                      <p className="legend">Image 1</p> 
  
                  </div> 
                  <div> 
                      <img src="/photo2.jpg" alt="image2" /> 
                      <p className="legend">Image 2</p> 
  
                  </div> 
                  <div> 
                      <img src="/photo3.JPG" alt="image3"/> 
                      <p className="legend">Image 3</p> 
  
                  </div> 
                  <div> 
                      <img src="/photo4.jpg" alt="image4"/> 
                      <p className="legend">Image 4</p> 
  
                  </div> 
                  <div> 
                      <img src="/photo5.png" alt="image5"/> 
                      <p className="legend">Image 5</p> 
  
                  </div> 
                  <div> 
                      <img src="/photo6.png" alt="image5"/> 
                      <p className="legend">Image 5</p> 
  
                  </div> 
              </Carousel> 
            </div> 
        ); 
    } 
};