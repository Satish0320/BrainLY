import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";



export function UseContent() {
    const[content, setContent] = useState([]);

     function  refresh(){
        axios.get(`${BACKEND_URL}/contents`,{
            headers:{
                "Authorization": localStorage.getItem("Token")
            }
        })
        .then((response)=>{
            setContent(response.data.contents)
        })
    }

    useEffect( ()=>{
        refresh()
        const interval = setInterval(()=>{
            refresh()
        }, 5 * 1000)

        return()=>{
            clearInterval(interval)
        }
    }, [] )

    return content;
}