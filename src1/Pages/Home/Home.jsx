import React from 'react';

export default function Home() {
    const myStyles = {
        backgroundColor: 'orangered',  
        borderColor: 'darkblue' ,
        margin : 100        
      };
    return (
        <>
            <div
                class="card"
                style={myStyles}
            >
                {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
            
        </>
    );
}