
import { BrainIcon } from "../icons/brainicon";
import { Twittericon } from "../icons/twittericon";
import { Youtubeicon } from "../icons/youtubeicon";
import { SidebarIcon } from "./SidebarItems";


export function Sidebar(){
    return   <div className="h-screen bg-white border-2 w-60  absolute left-0 top-0 pl-6">
        <div className="text-2xl flex pt-4  items-center">
            <BrainIcon />
            Brainly
        </div>
        <div className="pt-4">
            <SidebarIcon text="Twitter"  icon={<Twittericon/>}/>
            <SidebarIcon text="Youtube"  icon={<Youtubeicon/>}/>
        </div>
    </div>
}