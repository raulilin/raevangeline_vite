import { createFileRoute } from '@tanstack/react-router'
import testStyle from './Test.module.css'
import { AudioPlayer, AudioPlayerRef } from 'react-audio-play'
import { useEffect, useRef, useState } from 'react'
import { getRandomIntCryp } from '../../utils/utils';

export default function PlayerMomozi() {
    const playerRef = useRef<AudioPlayerRef>(null);
    const ost = [
        {value: "/sounds/meeting_place.mp3" },
        {value: "/sounds/limerance.mp3" },
        {value: "/sounds/you_were_there.mp3" },
        {value: "/sounds/arabesque.mp3" },
    ];

    const [song, setSong] = useState<any>([ost[0].value]);

    const handleEnd = () => {
        setSong(ost[getRandomIntCryp(0,ost.length)].value)
        handlePlay()
    };

    const handlePlay = () => {
        playerRef.current?.play();
    };

    handlePlay();

return(    
    <div className="grid border-2 border-red-900 h-fit bg-black mr-5 sm:mr-0 min-w-[300px] 5xl:max-w-200  group">                        
        <div className="flex border-b-2 border-red-900 p-1 text-lg 5xl:text-2xl">
            my mixtape 4 u
            <div className='ml-auto justify-end'>
                <img src='images/momozi/rose.webp'
                    className='max-w-[80px] 5xl:max-w-200 absolute translate-y-[-25px] translate-x-[-50px] group-hover:rotate-20'                                   
                />
            </div>
            {/* <p className="ml-auto">X</p> */}
        </div>
        <div className='5xl:text-xl'>
            <AudioPlayer color="#44b304ff"
                        sliderColor="#44b304ff"
                        className={`${testStyle.customstyle} border-2 ml-auto mr-auto mt-7`} 
                        autoPlay={false}
                        src={song}
                        onEnd={handleEnd}
                        ref={playerRef}
                        volume={7}
                        volumePlacement='bottom'
                        preload='none'
            />
        </div>
        {ost.map (data => 
            <div >{data.value}</div> 

        )}
    </div>
    )
}