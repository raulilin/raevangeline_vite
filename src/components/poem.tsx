import { useEffect, useState } from "react";
import { getPoems } from "../api/api";
import type { poems } from "../types/types";

export function Poem() {
    
    //const poems = await getPoems();

    const [poems, setPoems] = useState<poems[] | null>([])
  
    useEffect(() => {
        getPoems().then(data => setPoems(data))
    }, [])
    
    return (
        <div className="border-1 border-pink-900 items-center h-fit">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
                {poems?.at(0)?.poems_title}
                <p className="ml-auto">X</p>
            </div>
            <div className="rotate-180"> ∟</div>
            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] 5xl:text-xl pt-auto whitespace-pre-wrap">
                {poems?.at(0)?.poems_text}
            </span>
            <div> ∟</div>
        </div>
    )
}