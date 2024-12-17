
import { Deleteicons } from "../icons/deleteicons";
import { Plusicon } from "../icons/Plusicons"
import { Shareicon } from "../icons/shareicons"

interface Cinterface {
    title: string;
    link: string;
    type: "youtube" | "twitter"
}

const youtubelink = (url: string): string => {
    const videoId = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}`: ""
}

export const Card = ({title, link, type}: Cinterface) => {

    return (
        <div>
            <div className="max-w-72 min-h-48 min-w-72 p-8 bg-slate-200 rounded-md shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="pr-2 text-gray-500">
                            <Plusicon />
                        </div>
                        <div>{title}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <a href={link} target="_blank">
                            <Shareicon />
                            </a>
                        </div>
                        <div className="pr-2 text-gray-500">
                            <Deleteicons />
                        </div>
                    </div>
                </div>

                {/* Embedded Video */}
                 <div className="mt-4">
                    {type === "youtube" && <iframe
                        width="100%"
                        height="200"
                        src={youtubelink(link)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe> }  

                    {type === "twitter" && <blockquote className="twitter-tweet"> 
                    <a href= {link.replace("x.com", "twitter.com")} >
                   </a>
                    </blockquote>}
                </div>  
            </div>
        </div>
    );
};
