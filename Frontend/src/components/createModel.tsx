import { useRef, useState } from "react";
import { Crossicon } from "../icons/crossicons";
import { Button } from "./button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import React, { forwardRef } from "react";

enum contenttype {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateModel({ open, onClose }) {

    const titleref = useRef<HTMLInputElement | null>();
    const linkref = useRef<HTMLInputElement | null>();
    const [type, setType] = useState(contenttype.Youtube)


    async function addcontent() {
        const title = titleref.current?.value;
        const link = linkref.current?.value;

        const response = await axios.post(`${BACKEND_URL}/content`, {
            title,
            link,
            type
        },{
            headers:{
                "authorization": localStorage.getItem("Token")
            }
        })

        onClose()
    }

    return <div>
        {open &&  <div className="w-screen h-screen fixed top-0 left-0
         bg-slate-600 opacity-90 flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="bg-white p-4 rounded-md">
               <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                <Crossicon />
                </div>
               </div>
               <div>
               <Input placeholder = {"Title"} ref={titleref}/>
               <Input placeholder = {"Link"} ref={linkref} />
               </div>
               <div>
                <h1 className="flex justify-center">Type</h1>
                <div className="flex pt-2">
                <Button text="Youtube" variants= {type === contenttype.Youtube ? "primary" : "secondary"} onClick={()=>{
                    setType(contenttype.Youtube)
                }}></Button>
                <Button text="Twitter" variants= {type === contenttype.Twitter ? "primary" : "secondary"} onClick={()=>{
                    setType(contenttype.Twitter)
                }} ></Button>
                </div>
               </div>
               <div className="flex justify-center pt-4">
               <Button variants="primary" text="Submit" onClick={addcontent}/>
               </div>
            </span>
            </div>
        </div>}
    </div>
}

const Input = React.forwardRef<HTMLInputElement, { placeholder: string }>(
    ({ placeholder }, ref) => (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type="text"
          className="px-2 py-2 border rounded-md"
        />
      </div>
    )
  );