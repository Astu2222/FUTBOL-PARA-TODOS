'use client'
import Image from 'next/image'
import { useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Link from 'next/link';

export default function Home() {

 

  return (
    <div className='fondo' style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100vh"}}>
    <div style={{display:"flex", flexWrap:"wrap", height:"100%", width:"100%",alignItems:"center",justifyContent:"center"}}>

      

      <Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

       <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="/tyc.jpg"

          style={{objectFit:"cover", height:"200px", width:"100%"}}


        />
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large " style={{margin:"10px"}}>TyC Sports</h4>
        <Link href="/tyc" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
        <button>Ver canal</button>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">

      </CardBody>
    </Card>







{/* TNT SPORTS */}

    <Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/tnt.png"

   style={{objectFit:"cover", height:"200px", width:"100%"}}


 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>TNT Sports</h4>
 <Link href="/tnt" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>
</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>

      

{/* ESPN PREMIUM */}

<Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/espnPremium.jpg"

   style={{objectFit:"cover", height:"200px", width:"100%"}}

 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>ESPN Premium</h4>
 <Link href="/espnPremium" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>
</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>



{/* ESPN 1 */}

<Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/espn1.png"

   style={{objectFit:"cover", height:"200px", width:"100%"}}

 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>ESPN 1</h4>
 <Link href="/espn1" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>
</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>
    

{/* FOX SPORTS 1 */}

<Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/fox.avif"

   style={{objectFit:"cover", height:"200px", width:"100%"}}

 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>FOX SPORTS 1</h4>

 <Link href="/foxSports1" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>

</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>


{/* TV PUBLICA */}

<Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/tvp.jpg"

   style={{objectFit:"cover", height:"200px", width:"100%"}}

 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>TV PUBLICA</h4>

 <Link href="/tvPublica" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>
 
</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>
    
  
{/* ESPN 2 */}

<Card style={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px"}}>

<img
   alt="Card background"
   className="object-cover rounded-xl"
   src="/espn2.png"

   style={{objectFit:"cover", height:"200px", width:"100%"}}

 />
<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
 <h4 className="font-bold text-large " style={{margin:"10px"}}>ESPN 2</h4>

 <Link href="/espn2" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green", padding:"20px",borderRadius:"20px"}}>
 <button>Ver canal</button>
 </Link>
 
</CardHeader>
<CardBody className="overflow-visible py-2">

</CardBody>
</Card>

    

    

    </div>
    
    </div>
    
   
  )
}







