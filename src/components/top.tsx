import { VelocityScroll } from "./ui/scroll-based-velocity.tsx";
import styles from './Glitch.module.css'
// import { SongButton } from "./songbutton";
import { Link } from "@tanstack/react-router";
import { SongButton } from "./songbutton.tsx";

export function Topbar() {

    return (
        <header className="p-8 pb-0">

        <div className="border-2 border-pink-900 p-4 font-extrabold">
            <div className="flex sm:flex text-2xl sm:text-5xl 5xl:text-7xl">
                <span className="">
                    <p data-text="Eva's(ra) domain">
                        <span>risoro - WIP</span>
                    </p>
                    <Link to={"/home"}>
                        <p className= {`text-sm sm:text-[23px] 5xl:text-4xl underline ${styles.glitch} ${styles.layers}`} data-text="Eva's(ra) domain"><span>ra's safe haven</span></p>
                    </Link>
                </span>
                <span className="flex ml-auto text-[9px] sm:text-sm 5xl:text-xl items-center gap-3">
                    random song →
                    <SongButton/>
                </span>
            </div>
        </div>

        <div className="hidden md:flex border-2 border-t-0 border-pink-900 5xl:text-xl p-1 gap-1 underline ">
            <Link to={"/me"} className="flex"> 
                <img src={'/tinyangel.gif'} className="w-[24px] 5xl:w-[34px]"
                        
                        height={5}
                        alt=""
                />
                me
            </Link>            
            | 
            <Link to={"/momo"} className="flex"> 
                <img src={'/heart1.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                momo 
            </Link>            
            | 
            <Link to={"/thoughts"} className="flex"> 
                <img src={'/mailwrite.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                thoughts 
            </Link>            
        </div>
        <div className="flex md:hidden border-2 border-t-0 border-pink-900 text-1xl p-1 justify-left">
        <Link to={"/me"} className="flex"> 
                <img src={'/tinyangel.gif'} className="w-[24px] 5xl:w-[34px]"
                        
                        height={5}
                        alt=""
                />
                me
            </Link>            
            | 
            <Link to={"/momo"} className="flex"> 
                <img src={'/heart1.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                momo 
            </Link>            
            | 
            <Link to={"/thoughts"} className="flex"> 
                <img src={'/mailwrite.gif'}  className="w-[24px] 5xl:w-[34px]"
                        height={5}
                        alt=""
                />
                thoughts 
            </Link> 
        </div>

        <div className="border-2 border-t-0 border-pink-900 text-4xl font-bold p-1">
        <VelocityScroll
            text="Favriel | In the Arms of Flowers | Subterranean Values | XMAS_EVET10 [120][thanaton3 mix] | What isn't remembered never happened. | Make me sad. Make me mad. Make me feel alright?  Make me feel alright? |"
            default_velocity={1}
            className="text-center md:leading-[5rem]"
        />             
        </div>      
    </header>
    )
}