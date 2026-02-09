import { useEffect, useState } from "react";
import { getRandomIntCryp } from "../../utils/utils";


export default function MyGoddess(){    
    const MomoImages = [
        {id : 0, value: "/images/momozi/1.webp" },
        {id : 1, value: "/images/momozi/1.webp" },
        {id : 1, value: "/images/momozi/1.webp" },
    ];

    const [image, setImage] = useState<any>([MomoImages[0].value]);

    useEffect(() => {
      const interval = setInterval(() => {
        setImage(MomoImages[getRandomIntCryp(0,MomoImages.length)].value)
      }, 12000);
  
      return () => clearInterval(interval);
    }, []);  

    return(
    <div className="grid border-2 border-red-900 h-fit bg-black mr-5 sm:mr-0 max-w-[400px] 5xl:max-w-200 mb-50 group">                 
        <div className="flex border-b-2 border-red-900 p-1 text-lg 5xl:text-2xl">
            my goddess
            <div className='ml-auto justify-end'>
                <img src='images/momozi/rose.webp'
                    className='max-w-[80px] 5xl:max-w-200 absolute translate-y-[-25px] translate-x-[-50px] group-hover:rotate-20'                                       
                />
            </div>
        </div>
        <div className='5xl:text-xl'>
            <img src={image}
                className="max-w-[397px] 5xl:max-w-200 hover:cursor-[url(/images/cursor/hico.png),pointer]"
            />
        </div>
    </div> 
    )
}