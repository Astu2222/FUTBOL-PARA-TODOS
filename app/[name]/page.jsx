'use client'
import React from 'react'

export default function page({params}) {
  return (
    <div>

    {params.name === "tyc" ? (<>
    
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
        <iframe style={{ width: "100%", height: "100%" }} allowfullscreen="" src="https://en-vivo.live/tyc.php"></iframe>
    </div>
    
    </>) : null} 


    {params.name === "tnt" ? (<>
    
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
        <iframe allow="encrypted-media" id="iframe" name="iframe" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=VE5UX1Nwb3J0c19IRA" style={{height:"100vh", width:"100vw"}}></iframe>
    </div>
  
  </>) : null } 


  {params.name === "espnPremium" ? (<>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
    <iframe style={{width:"100%", height:"100vh"}} id="iframe" allow="encrypted-media" frameborder="0" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE&lang=1"></iframe>  
    </div>
  </>) : null } 


  {params.name === "espn1" ? (<>
    
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
    <iframe style={{width:"100%", height:"100vh"}} id="iframe" allow="encrypted-media" frameborder="0" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=RVNQTjJIRA"></iframe>    </div>
  </>) : null } 

  {params.name === "foxSports1" ? (<>
    
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>


    <iframe style={{width:"100%", height:"100vh"}} id="iframe" allow="encrypted-media" frameborder="0" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=Rm94U3BvcnRz"></iframe>    

   
    </div>
  </>) : null } 


  {params.name === "tvPublica" ? (<>
    
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>


    <iframe style={{width:"100%", height:"100vh"}} id="iframe" allow="encrypted-media" frameborder="0" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=Q2FuYWw3"></iframe>    


   
    </div>
  </>) : null } 


  {params.name === "espn2" ? (<>
    
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>


    <iframe style={{width:"100%", height:"100vh"}} id="iframe" allow="encrypted-media" frameborder="0" allowfullscreen="" src="https://embed.skyblue.boats/cvatt.html?get=RVNQTjJfQXJn"></iframe>    


   
    </div>
  </>) : null } 





  




    </div>
  )
}






