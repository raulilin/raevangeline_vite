import { createFileRoute, Link } from '@tanstack/react-router'
import { getRandomIntCryp, openInNewTab } from '../utils/utils';
import fadeStyle from './Fade.module.css'
import { Topbar } from '../components/top';
import { NekoButton } from '../components/nekobutton';
import { Poem } from '../components/poem';
import { RandomLainPic } from '../components/randomlain';
import Log from '../components/log';
import { preload } from 'react-dom';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
    preload('flowerwarm.webp', { as: 'image' }) // preloads this stylesheet
    let sideImg = getRandomIntCryp(0,7) + 1

    return (
    <div className={`w-full h-full flex-grow text-white font-teste bg-black ${fadeStyle.fade} 5xl:h-screen`}>     
        <Topbar/>

        <main className="grid md:flex">
        <div className='sm:flex ml-auto mr-auto'>
            <div>
                <aside className="ml-20 4xl:ml-0 mt-10 border-2 border-pink-900 h-fit hidden sm:flex bg-black">
                    <div className="flex items-center  justify-center">
                        <img src={'/side/'+sideImg+'.png'} className='max-w-[400px] 5xl:max-w-[800px]'
                            alt=""
                        />
                    </div>
                </aside>

                <div className="ml-20 mt-10 border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0 flex justify-center max-w-60">
                    <NekoButton/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col pr-0">
                    
                    <div className="border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
                            hey
                            <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                            <p> {'>'} welcome to my safe haven  </p>                            
                        </span>                
                        <div> ∟</div>                    
                    </div>

                    <div className="border-2 border-pink-900 h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
                            me
                            <p className="ml-auto">X</p>
                        </div>
                        <div className='5xl:text-xl'>
                            <Link to='/me'>
                            
                            <img className='w-[700px]'
                                src='/ra/me2.png'
                            />
                            </Link>
                        </div>
                    </div>

                    <div className="border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0 max-w-100">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            <a href="https://open.spotify.com/user/sjqqt4d7ebxsfjbs0rc827zh5?si=e79e7754e1754a83" className="underline">random playlists (click 4 spotify prof.)</a>
                            <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto items-center">
                            <a href="https://youtube.com/playlist?list=PL9_cNAAdrqE6jmOFn3FwTaeRZviSHUurW&si=pzmd2Ecu5mg_jjTD" className="underline">unorganized vgm collection</a>
                            <span className="flex gap-3">
                            <a href="https://open.spotify.com/playlist/4ajQQmnCv0ozK0KZak8Bxl?si=7f2184618fee479f" className="underline">relax</a>
                            <a href="https://open.spotify.com/playlist/0nBt2yTNtM0TjdEQKdE5k4?si=316c6b59cec64057" className="underline">gore n bass</a>
                            <a href="https://open.spotify.com/playlist/5LffZp441rSlwHC42k5p8S?si=b42f562cef4f48ec" className="underline">ethereal</a>
                            <a href="https://open.spotify.com/playlist/4BhmLN15pW2XF1c45kPkW2?si=e6bb4d015cad401a" className="underline">mixed</a>
                            </span>
                            
                        </span>                
                        <div> ∟</div>                    
                    </div>
            
                </section>    
                
                <section className="grid gap-5 w-full p-6 pt-10  h-fit max-w-200">
                    <RandomLainPic/>                    
                    <div className="border-2 border-pink-900 h-fit bg-black mr-5 sm:mr-0 5xl:max-w-170">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
                            momo
                            <p className="ml-auto">X</p>
                        </div>
                        <div className='5xl:text-xl'>
                            <Link to='/momo'>
                            
                            <img className='w-[700px]'
                                src='/momo/momoclick.png'
                            />
                            </Link>
                        </div>
                    </div>  
                </section>      
            </div>            
             
            <section className="grid gap-5 mr-20 4xl:ml-0 w-full pt-10 h-fit max-w-120 5xl:max-w-200">
                <div className="border-2 border-pink-900 items-center h-fit bg-black max-w-160 5xl:max-w-200">
                    <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
                        faulty schematics of a broken machine
                        <p className="ml-auto">X</p>
                    </div>
                    <div className="rotate-180"> ∟</div>
                    <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl ">
                        <Log/>
                    </span>                
                    <div> ∟</div>                    
                </div>
                <div className="border-2 border-pink-900 items-center h-fit bg-black w-full">
                    <Poem/>
                </div>
            </section>      
        </div>
        </main>


        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
             <a onClick={() => openInNewTab("https://github.com/raulilin/raevangeline_vite") } style={{ cursor: 'pointer' }}>ralilith 2025.</a>
        </footer>
    </div>
  );
}

