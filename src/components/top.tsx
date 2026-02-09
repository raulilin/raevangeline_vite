import { VelocityScroll } from "./ui/scroll-based-velocity.tsx";
import styles from './Glitch.module.css'
// import { SongButton } from "./songbutton";
import { Link } from "@tanstack/react-router";
import { SongButton } from "./songbutton.tsx";
import { cn } from "../utils/utils.ts";

interface Props  {
    borderColor:string
};
export function Topbar(props:Props) {
    const BorderColor = [
        {"name":"pink", "class":"border-pink-900"},
        {"name":"blue", "class":"border-blue-900"},
        {"name":"warm-orange", "class":"border-warm-orange"},
        {"name":"slate", "class":"border-slate-900"},
        {"name":"green", "class":"border-green-800"},
        {"name":"red", "class":"border-red-800"},
      ]

    return (        
        <header className="p-8 pb-0">
        <div className={cn("border-2 p-4 font-extrabold ",
                            BorderColor.find(record => record.name === props.borderColor)?.class
                        )}
        >
            <div className="flex sm:flex text-2xl sm:text-5xl 5xl:text-7xl">
                <span className="">
                    <p data-text="Eva's(ra) domain">
                        <span>risoro - WIP</span>
                    </p>
                    <Link to={"/home"}>
                        <p className= {`text-sm sm:text-[23px] 5xl:text-4xl hover:underline ${styles.glitch} ${styles.layers}`} data-text="Eva's(ra) domain">
                            <span>ra's safe haven</span>
                        </p>
                    </Link>
                </span>
                <span className="flex ml-auto text-[9px] sm:text-sm 5xl:text-xl items-center gap-3">
                    random song →
                    <SongButton/>
                </span>
            </div>
        </div>

        <div className={cn("hidden md:flex border-2 border-t-0 5xl:text-xl p-1 gap-1",
                           BorderColor.find(record => record.name === props.borderColor)?.class
                        )}
        >
            <Link to={"/me"} className="flex hover:underline"> 
                <img src={'/images/navbar/tinyangel.gif'} className="w-[24px] 5xl:w-[34px]"
                        
                        height={5}
                        alt=""
                />
                me
            </Link>            
            | 
            <Link to={"/momo"} className="flex hover:underline"> 
                <img src={'/images/navbar/heart1.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                momo 
            </Link>            
            | 
            <Link to={"/thoughts"} className="flex hover:underline"> 
                <img src={'/images/navbar/mailwrite.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                thoughts 
            </Link>            
            | 
            <Link to={"/experiences"} className="flex hover:underline"> 
                <img src={'/images/navbar/moon.gif'}  className="w-[24px] 5xl:w-[34px] mr-2"
                        height={5}
                        alt=""
                />
                experiences (wip)
            </Link>                  
        </div>
        <div className={cn("flex md:hidden border-2 border-t-0 text-1xl p-1 justify-left",
                           BorderColor.find(record => record.name === props.borderColor)?.class
                        )}>
        <Link to={"/me"} className="flex"> 
                <img src={'/images/navbar/tinyangel.gif'} className="w-[24px] 5xl:w-[34px]"
                        
                        height={5}
                        alt=""
                />
                me
            </Link>            
            | 
            <Link to={"/momo"} className="flex"> 
                <img src={'/images/navbar/heart1.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                momo 
            </Link>            
            | 
            <Link to={"/thoughts"} className="flex"> 
                <img src={'/images/navbar/mailwrite.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                thoughts 
            </Link> 
        </div>

        <div className={cn("border-2 border-t-0 text-4xl font-bold p-1",
                        BorderColor.find(record => record.name === props.borderColor)?.class
                        )}
        >
            <VelocityScroll
                text="Favriel | In the Arms of Flowers | Subterranean Values | XMAS_EVET10 [120][thanaton3 mix] | What isn't remembered never happened. | Make me sad. Make me mad. Make me feel alright?  Make me feel alright? |"
                default_velocity={1}
                className="text-center md:leading-[5rem]"
            />             
        </div>      
    </header>
    )
}