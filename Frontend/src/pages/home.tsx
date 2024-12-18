import { useState } from "react"
import { Button } from "../components/button"
import { Card } from "../components/card"
import { CreateModel } from "../components/createModel"
import { Plusicon } from "../icons/Plusicons"
import { Shareicon } from "../icons/shareicons"
import { Sidebar } from "../components/sidebar"
import { UseContent } from "../Hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"



export function Home() {
const [model, setModel] = useState(false)
const contents = UseContent();
  return (

   <div>
    <Sidebar />

    <div className="pt-2 ml-60 min-h-screen bg-slate-300">
    <CreateModel open={model} onClose={()=>{
      setModel(false)
    }} />

    <div className="flex justify-end">
    <Button onClick= {()=>{setModel(true)}} variants="primary" text="Add Content" startIcon={<Plusicon />}/>
    <Button onClick={async ()=>{
      const response = await axios.post(`${BACKEND_URL}brain/share`,{
        share : true
      },{
        headers: {
          "Authorization": localStorage.getItem("Token")
        }
      });
      const url = `http://localhost:4000/user/brain/share/${response.data.Hash}`;
      alert(url)
    }} variants="secondary" text="Share" startIcon={ <Shareicon /> }/>
    </div>
    
    <div className="flex flex-wrap space-x-4 pt-4 pl-4" >

    {contents.map(({type, title, link})=><Card type = {type}  link={link} title={title}/>)}
    </div>
    </div>
   </div>
  )
}


