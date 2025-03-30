import React from 'react';
import img from './start.jpg'

function Image(){
    return(
        <div>
            <img 
            src={img} 
            alt="Start"
            style={{
                    border: "5px solid white",  // Change to white
                    borderRadius: "10px", // Optional: adds rounded corners
                    padding: "5px" // Optional: adds space inside the border
                }}
            />
        </div>
    )
}

export default Image;