import { useRef} from "react"
import { getRandomIntCryp } from "../utils/utils";

export function NekoButton() {
  const clickSfx = [
    {value: "/lain/necoarc.mp3" },
    {value: "/lain/necoarc.mp3" },
    ]    
    const SFX : string = clickSfx[getRandomIntCryp(0,1)].value;

    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("/necoarc.mp3") : undefined
      );    

    const start = () => {                          
        audio.current?.play();    
    }

    return (
        <button className='' onClick={start} > 
          <img src={'/images/nekoemptyhead.gif'}
              width={200}
              height={100}
              alt=""
          />
        </button>
    )
}