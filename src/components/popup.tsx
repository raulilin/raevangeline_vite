
import { useEffect, useState } from 'react'
import Style from './popup.module.css'
import { getRandomIntCryp } from '../utils/utils';

export default function PopUp() {

    const bobQuotes = [
      {value: "one day you'll sit in the sun and things won't feel so bad." },
      {value: "i'm here, so i'll be with you forever." },
      {value: "there are cracks in everything, that's how the light gets through." },
      {value: "every choice, every mistake, every moment has brought me to you." },
      {value: "i'll keep on living no matter what, so that I can protect you." },
      {value: "it'll be okay. i'm right by your side... here to protect you forevermore." },
      ]   

    const [showPopUp, setShowPopUp] = useState(false);
    const showPopupHandler = () => setShowPopUp(true);  useEffect(() => {
        const timer = setTimeout(() => {
        setShowPopUp(false);
    }, 20000);  return () => clearTimeout(timer);  }, [showPopUp]);  let popup = null;
    if(showPopUp) {
        popup = <SpongePopUp />;
    }

    useEffect(() => {
      const interval = setInterval(() => {
        showPopupHandler();
      }, 120000);
  
      return () => clearInterval(interval);
    }, []);    

    function SpongePopUp() {

        return (
            <div className={`${Style.div} flex justify-end z-10 animate-fade-in
                             ${showPopUp ? 'animate-fade-in' : 'animate-fadein'}
                           `} 
                 onClick={() => setShowPopUp(false)}>
                
                <div className={`${Style.balloonbox} 
                                -translate-x-[60%] -translate-y-[170%] sm:-translate-x-[38%] sm:-translate-y-[240%] 5xl:-translate-x-[68%] 5xl:-translate-y-[240%]
                                p-6 
                                max-w-[200px] sm:max-w-[400px] 
                                text-[10px] sm:text-base 5xl:text-2xl`}
                > 
                    {bobQuotes[getRandomIntCryp(0,5)].value}
                </div>
                <img src="bob.png" 
                     className={`${Style.img} 
                                -translate-x-[0%] -translate-y-[50%] sm:-translate-x-[0%] sm:-translate-y-[60%] 5xl:-translate-x-[10%] 5xl:-translate-y-[60%]
                                 max-w-[150px] 5xl:max-w-[350px]`}
                />
            </div>
            
        )
    }

  return (
            <>
                {popup} 
                <button onClick={showPopupHandler}>Show Pop-up</button>
            </>
  );
}
