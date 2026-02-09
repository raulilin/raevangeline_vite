import { useRef} from "react"

export function NekoButton() {

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