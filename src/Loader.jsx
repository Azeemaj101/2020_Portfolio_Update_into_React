import React from 'react'
import load from "./images/load.mp4";
function myHandler() {
    document.getElementsByClassName("hel")[0].style.display ="block";
    document.getElementById("loader").style.display = "none";
  }


const Loader = () => {
    return (
        <div id="loader">
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",backgroundColor:"black"}}>
            <video width="220" height="220" muted autoPlay="autoplay" onEnded={myHandler} playsInline id="myVideo">
                <source src={load} type="video/mp4" />
              </video>
        </div>
    </div>
    )
}
document.getElementById('myVideo');

export default Loader
