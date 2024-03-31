"use client"
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default function supplemmental (){
    return (

        <div> 

                
               
        <Carousel> 
            <div> 
                <img src="/Safe_sleep.png" alt="image1"/> 
                <p className="legend">Image 1</p> 

            </div> 
            <div> 
                <img src="/Safe_sleep_environment.png" alt="image2" /> 
                <p className="legend">Image 2</p> 

            </div> 
            <div> 
                <img src="/lead_poisoning.png" alt="image3"/> 
                <p className="legend">Image 3</p> 

            </div> 
            <div> 
                <img src="/Sources_of_lead.png" alt="image4"/> 
                <p className="legend">Image 4</p> 

            </div> 
            
            
        </Carousel> 
      </div> 
    )
}