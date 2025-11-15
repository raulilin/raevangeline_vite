import { createFileRoute } from '@tanstack/react-router'
import { cn, openInNewTab } from '../../utils/utils'
import { Topbar } from '../../components/top'
import fadeStyle from '../Fade.module.css'
import { useEffect, useState } from 'react'
import Experiences from '../../components/experiences'

export const Route = createFileRoute('/experiences')({
  component: RouteComponent,
})

function RouteComponent() {


  return (
    <div className={`4xl:h-screen w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
        style={{
                backgroundImage: "url(/images/bgs/experiences.webp)",
                backgroundPosition: 'top',
                backgroundRepeat: 'space repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            }}
    >
        <Topbar borderColor='purple'/>

        <main className="flex flex-row justify-center pt-5 gap-5">
            <Experiences/>

        </main>


        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
             <a onClick={() => openInNewTab("https://github.com/raulilin/raevangeline_vite") } style={{ cursor: 'pointer' }}>ralilith 2025.</a>
        </footer>
    </div>

  )
}
