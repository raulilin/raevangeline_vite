import { useState } from "react";
import { cn } from "../utils/utils";

export default function Experiences(){
    const [selected, setSelected] = useState(0);

    function onClickItem(pItem:number){
        setSelected(pItem)
    }

    const ExpImages = [
        {name : "down the rabbit hole (wip)", value: "websiteexperiences.png" },
        {name : "???? ?????????", value: "websiteexperiencesnone.png" },
        {name : "???? ?????????", value: "websiteexperiencesnone.png" },
    ];

    return(
        <>
            <div className="basis-1/4 border-2 border-purple-900 items-center h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                <div className="flex border-b-2 border-purple-900 p-1 text-lg 5xl:text-2xl">
                    choose wisely (short stories)
                    <p className="ml-auto">X</p>
                </div>
                <div className="rotate-180"> ∟</div>
                <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                    <p onClick={() => onClickItem(0)}
                       className={cn('text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black ',
                                    (selected==0) ? 'border-4' : ''
                                   )}> 
                        {'>'} 1 - Down the rabbit hole
                    </p>
                    <p onClick={() => onClickItem(1)}
                       className={cn('text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black',
                                    (selected==1) ? 'border-4' : ''
                                   )}> 
                        {'>'} ? - ????????? ?????????
                    </p>
                    <p onClick={() => onClickItem(2)}
                       className={cn('text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black',
                                    (selected==2) ? 'border-4' : ''
                                   )}> 
                        {'>'} ? - ????????? ?????????
                    </p>
                </span>
                <div> ∟</div>                    
            </div>   

            <div className="basis-3/4 border-2 border-purple-900 items-center h-fit bg-black mr-5 sm:mr-0 max-w-200 5xl:max-w-200">
                <div className="flex border-b-2 border-purple-900 p-1 text-lg 5xl:text-2xl">
                    {ExpImages[selected].name}
                    <p className="ml-auto">X</p>
                </div>
                <div className="rotate-180"> ∟</div>
                <span className="flex flex-col p-1 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl items-center">
                    <img src={ExpImages[selected].value} className='animate-fade-in max-w-[1000px] min-w-[700px]'  style={{ cursor: 'pointer' }}/>
                </span>                
                <div> ∟</div>                    
            </div>   
        </>
    )
}