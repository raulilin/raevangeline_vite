import { createFileRoute } from '@tanstack/react-router'
import { openInNewTab } from '../../utils/utils'
import { Topbar } from '../../components/top'
import fadeStyle from '../Fade.module.css'

export const Route = createFileRoute('/experiences')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={`w-full h-full flex-grow text-white font-teste bg-slate-700 ${fadeStyle.fade} 5xl:h-screen h-screen`}>     
        <Topbar borderColor='pink'/>

        <main className="flex flex-row justify-center pt-5 gap-5">
            <div className="basis-1/4 border-2 border-blue-900 items-center h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    choose wisely
                    <p className="ml-auto">X</p>
                </div>
                <div className="rotate-180"> ∟</div>
                <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                    <p className='text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black'> {'>'} 1 - Down the rabbit hole</p>
                    <p className='text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black'> {'>'} ??? </p>
                    <p className='text-xl w-fit transition duration-250 ease-in-out hover:bg-white hover:text-black'> {'>'} ??? </p>
                </span>                
                <div> ∟</div>                    
            </div>   

            <div className="basis-3/4 border-2 border-blue-900 items-center h-fit bg-black mr-5 sm:mr-0 max-w-200 5xl:max-w-200">
                <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    who am i
                    <p className="ml-auto">X</p>
                </div>
                <div className="rotate-180"> ∟</div>
                <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                    <p>   </p>                            
                </span>                
                <div> ∟</div>                    
            </div>   

        </main>


        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
             <a onClick={() => openInNewTab("https://github.com/raulilin/raevangeline_vite") } style={{ cursor: 'pointer' }}>ralilith 2025.</a>
        </footer>
    </div>

  )
}
