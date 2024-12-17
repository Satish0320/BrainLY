import { useState } from "react"
import { Button } from "../components/button"
import { Card } from "../components/card"
import { CreateModel } from "../components/createModel"
import { Plusicon } from "../icons/Plusicons"
import { Shareicon } from "../icons/shareicons"
import { Sidebar } from "../components/sidebar"



export function Home() {
const [model, setModel] = useState(false)
  return (

   <div>
    <Sidebar />

    <div className="pt-2 ml-60 min-h-screen bg-slate-300">
    <CreateModel open={model} onClose={()=>{
      setModel(false)
    }} />

    <div className="flex justify-end">
    <Button onClick= {()=>{setModel(true)}} variants="primary" text="Add Content" startIcon={<Plusicon />}/>
    <Button variants="secondary" text="Share" startIcon={ <Shareicon /> }/>
    </div>
    
    <div className="flex space-x-4 pt-4 pl-4">
    <Card type = "twitter"  link="https://x.com/DGukesh/status/1868748670461788667/photo/1"
     title="tweet Gukesh"/>
    <Card type = "youtube"  link="https://www.youtube.com/watch?v=w7kRA6F9QCk" 
    title="Vlog Gukesh"/>
    </div>
    </div>
   </div>
  )
}


