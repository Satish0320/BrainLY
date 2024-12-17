import { Crossicon } from "../icons/crossicons";
import { Button } from "./button";

export function CreateModel({ open, onClose }) {

    return <div>
        {open &&  <div className="w-screen h-screen fixed top-0 left-0
         bg-slate-600 opacity-80 flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="bg-white p-4 rounded-md">
               <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                <Crossicon />
                </div>
               </div>
               <div>
               <Input placeholder = {"Title"} />
               <Input placeholder = {"Link"}/>
               </div>
               <div className="flex justify-center">
               <Button variants="primary" text="Submit" />
               </div>
            </span>
            </div>
        </div>}
    </div>
}

function Input({onChange, placeholder}: {placeholder:string, onChange: ()=> void}){
    return <div>
        <input placeholder= {placeholder} type={"text"} className="px-2 py-2 border rounded-md" onChange={onChange} />
    </div>
}