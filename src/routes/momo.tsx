import { createFileRoute } from '@tanstack/react-router'
import fadeStyle from './Fade.module.css'
import momoStyle from './momo.module.css'
import { Topbar } from '../components/top'
 import { AudioPlayer, AudioPlayerRef } from 'react-audio-play'
import { useRef, useState } from 'react'
import { getRandomInt } from '../utils/utils'

export const Route = createFileRoute('/momo')({
  component: RouteComponent,
})

function RouteComponent() {
    const playerRef = useRef<AudioPlayerRef>(null);
    const ost = [
        {value: "/sounds/meeting_place.mp3" },
        {value: "/sounds/limerance.mp3" },
        {value: "/sounds/you_were_there.mp3" },
        {value: "/sounds/arabesque.mp3" },
    ];

    const [song, setSong] = useState<any>(["/sounds/meeting_place.mp3"]);

    const handleEnd = () => {
        setSong(ost[getRandomInt(0,ost.length)].value)
        handlePlay()
    };

    const handlePlay = () => {
        playerRef.current?.play();
    };

    handlePlay();
  return (
    <div className={`h-full w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
        style={{
                backgroundImage: "url(/images/bgs/flowerwarm.webp)",
                backgroundPosition: 'top',
                backgroundRepeat: 'space repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            }}
    >
        <Topbar borderColor='warm-orange'/>

        <div className= {`w-full text-center font-semibold ${momoStyle.shadow} p-8 pb-15 `}>
            I dedicate this page to my beloved doll, <em className='font-bold 5xl:text-5xl'>Julia </em>
            <div className='flex w-full'>
                <img className='ml-20 mr-auto w-[20px] 5xl:w-[40px]'
                    src = "/images/momo/heart.gif"
                />
                <img className='mr-20 ml-auto w-[20px] 5xl:w-[40px]'
                    src = "/images/momo/heart.gif"
                />
            </div>
            <AudioPlayer color="#e7b05d"
                         sliderColor="#e7b05d"
                         className={`${momoStyle.customstyle} border-2 ml-auto mr-auto mt-7`} 
                         autoPlay={true}
                         src={song}
                         onEnd={handleEnd}
                         ref={playerRef}
                         volume={7}
                         volumePlacement='bottom'
                         preload='none'
            />
            <p className='text-sm 5xl:text-lg'>Playing: {song}</p>
        </div>
        <img className='ml-auto mr-auto'
            src = "/images/momo/heartbar3.gif"

            width={900}
        />
        <div className='flex w-screen'>
            <img className='ml-20 mr-auto'
                src = "/images/momo/dejiko.gif"
                width={70}
            />
            <img className='mr-20 ml-auto'
                src = "/images/momo/dejiko.gif"
                width={70}
            />
        </div>
        <div className=' grid  ml-15 sm:ml-30 mr-15 sm:mr-30 grid-cols-1 sm:grid-cols-3 gap-20 pb-60 pt-30'>
            <img className='border-3 rotate-6 '
                src="/images/momo/piccrew1.png"
                width={750}
                height={750}
            />
            <img className='border-3 rotate-2'
                src="/images/momo/momo8.png"
                width={950}
                height={950}                
            />                 
            <img className='border-3 -rotate-10'
                src="/images/momo/momo9.png"
                width={750}
                height={750}                
            />

            <img className='border-3 -rotate-3'
                src="/images/momo/momo2.jpg"
            />  
            <img className='border-3 rotate-3'
                src="/images/momo/momo5.png"
            />            
            <img className='border-3 -rotate-5'
                src="/images/momo/momo3.jpg"
            />

            <img className='border-3 rotate-4'
                src="/images/momo/momo1.jpg"
            />
            <img className='border-3 -rotate-6'
                src="/images/momo/momo6.jpg"
            />     
            <img className='border-3 -rotate-16'
                src="/images/momo/momo7.png"
            />

            <img className='border-3 -rotate-6'
                src="/images/momo/momo11.png"
            />   
            <img className='border-3 rotate-2'
                src="/images/momo/momo10.jpg"
            />              
            <img className='border-3 rotate-9'
                src="/images/momo/momo12.jpg"
            />    
                    
        </div>
        <div className='flex w-screen'>
            <img className='ml-20 mr-auto'
                src = "/images/momo/yotsuba.gif"
                width={70}
            />
            <img className='mr-20 ml-auto'
                src = "/images/momo/yotsuba.gif"
                width={70}
            />
        </div>
        <img className='ml-auto mr-auto'
            src = "/images/momo/heartbar3.gif"

            width={900}
        />

        <div className= {`w-full text-center font-semibold ${momoStyle.shadow} p-8 pb-15`}>
            Thank you for existing, <em className='font-bold'>I love you</em>                                    
        </div>
        {/* <div className= {`w-full text-center font-semibold ${momoStyle.shadow_sub} p-8 pb-15`}>
        I appreciate you for exactly who you are
        </div>         */}
        <div className= {`w-full text-center font-semibold ${momoStyle.shadow} text-end pr-10 pb-10 5xl:pr-350`}>
            <em className='font-bold'>-seu momo</em>            
        </div>                             

    </div>
  )
}
