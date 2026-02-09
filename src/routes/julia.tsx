import { createFileRoute } from '@tanstack/react-router'
import { Topbar } from '../components/top'
import testStyle from './Test.module.css'
import { AudioPlayer, AudioPlayerRef } from 'react-audio-play'
import { useEffect, useRef, useState } from 'react'
import { getRandomIntCryp } from '../utils/utils'
import PlayerMomozi from '../components/momozi/player'
import MyGoddess from '../components/momozi/mygoddess'

export const Route = createFileRoute('/julia')({
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

    const [song, setSong] = useState<any>([ost[0].value]);

    const handleEnd = () => {
        setSong(ost[getRandomIntCryp(0,ost.length)].value)
        handlePlay()
    };

    const handlePlay = () => {
        playerRef.current?.play();
    };

    handlePlay();


    return (
        <div className='h-full w-full flex-grow text-white font-teste bg-black'
            style={{
                    backgroundImage: "url(/images/julia/test.png)",
                    backgroundPosition: 'top',
                    backgroundRepeat: 'space repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'scroll'
                }}    
        >      
            <Topbar borderColor='red'/>

            <main className="grid md:flex ">

                <div className='sm:flex ml-auto mr-auto gap-x-10 pt-10'>
                    <MyGoddess/> 

                    <PlayerMomozi/>

                </div>
            </main>
        </div>
    )
}
