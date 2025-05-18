import { createFileRoute } from '@tanstack/react-router'
import { Topbar } from '../components/top';
import fadeStyle from './Fade.module.css'
import { useRef } from 'react';
import { preload } from 'react-dom';

export const Route = createFileRoute('/me')({
  component: RouteComponent,
})

function RouteComponent() {
  const audio = useRef<HTMLAudioElement | undefined>(
      typeof Audio !== "undefined" ? new Audio("/necoarc.mp3") : undefined
    );    

  const start = () => {
      audio.current?.play(); 
  }
        
  return (
    <div className={`h-full w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
        style={{
                backgroundImage: "url(/sky5.webp)",
                backgroundPosition: 'top',
                backgroundRepeat: 'space repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            }}             
    >        
        <Topbar borderColor='blue'/>
        <div className= {`w-full text-center font-semibold p-8 pb-5`}>
            
            <div className='flex w-full'>

            </div>
        </div>
        <main className="grid md:flex">
        <div className='sm:flex ml-auto mr-auto gap-x-10'>
        {/* <div className='grid grid-cols-4 ml-20 4xl:ml-0'> */}
            
            <div className="grid border-2 border-blue-900 h-fit bg-black mr-5 sm:mr-0 max-w-[400px] 5xl:max-w-200 mb-50">
                <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    omg that's me!!
                    <p className="ml-auto">X</p>
                </div>
                <div className='5xl:text-xl'>
                    <img src='ra/me3.png'
                         className='max-w-[397px] 5xl:max-w-200'
                    />
                </div>

                <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    interests
                </div>
                <div className='5xl:text-xl'>
                    <div className="flex items-center p-6 gap-8">
                        <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Games </a>
                        <p className="w-full text-center">MMOs, JRPGs, rhythm games, souls-likes, metroidvanias, VNs, Fighting games</p>
                    </div>
                    <div className="flex items-center p-6 gap-8 border-t">                            
                        <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer" className="underline"> Music </a>
                        <p className="w-full text-center">Grimes, Katie Jane Garside, Machinel Girl, Crystal Castles, Loathe, My Bloody Valentine, Femtanyl, Black Dresses, BMTH, Sewerslvt, Goreshit, Have a Nice Life, Ichiko Aoba, Blank Banshee, YABUJIN, Ecco2k...</p>
                    </div>
                    <div className="flex items-center p-6 gap-8 border-t">
                        <a href="https://letterboxd.com/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Movies </a>
                        <p className="w-full text-center">all about lily chou chou, oldboy, requiem for a dream, angel's egg, hereditary, midsommar, mulholland drive, rosemary's baby, taxi driver...</p>
                    </div>
                    <div className="flex items-center p-6 gap-8 border-t">
                    <a href="https://myanimelist.net/profile/ralilith" target="_blank" rel="noopener noreferrer" className="underline"> Anime </a>
                        <p className="w-full text-center">serial experiments lain</p>
                    </div>
                </div>                
            </div>        

            <div className='space-y-5'>
                <div className="border-2 border-blue-900 items-center h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                    <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    who am i
                        <p className="ml-auto">X</p>
                    </div>
                    <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                            <p className='max-w-[500px]'> {'>'} my name is ra (ralilith, evangeline in some places or games), and i'm a 23 y/o frontend developer from Brazil!!</p>
                            <p className='max-w-[500px]'> {'>'} i looove web 1.0 aesthetics and this website pays homage to that era</p>
                            <img className='max-w-[100px] pb-4 ml-auto mr-auto'
                                src = "moon2.gif"
                            />
                            <p className='max-w-[500px]'> {'>'} i love jrpgs, yume nikki, rhythm games, souls-likes</p>
                            <p className='max-w-[500px]'> {'>'} currently learning gamedev with godot</p>
                            <p className='max-w-[500px]'> {'>'} feel free to reach me in any of my socials (─‿‿─)</p>
                            <img className='max-w-[100px]  ml-auto mr-auto'
                                src = "btana_moon.gif"
                            />                        
                        </span>                
                    <div> ∟</div>                                    
                </div>

                <div className="border-2 border-blue-900 items-center h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
                    <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    link me!
                        <p className="ml-auto">X</p>
                    </div>
                    <div className="rotate-180"> ∟</div>
                        <span className="flex p-5 gap-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl">
                            <img className='max-w-[100px] pb-4'
                                src = "lainnav.gif"
                            />
                            <textarea
                                className="border-2 w-full text-[11px]"
                                value={'<a href="https://raevangeline.art/" target="_blank"><img src="https://raevangeline.art/lainnav.gif" alt="raevangeline"/></a>'}
                                 style={{ resize: 'none' }}
                                />                                    
                        </span>                
                    <div> ∟</div>                                    
                </div>                
            </div>

            <div className="border-2 border-blue-900 items-center h-fit bg-black mr-5 sm:mr-0 max-w-100 5xl:max-w-200 align-end">
                <div className="flex border-b-2 border-blue-900 p-1 text-lg 5xl:text-2xl">
                    links
                    <p className="ml-auto">X</p>
                </div>
                <div className="rotate-180"> ∟</div>
                    <span className="flex flex-col p-3 pt-auto text-sm xl:text-[15px] 5xl:text-xl text-left">
                        <img className='max-w-[100px] pb-4'
                            src = "lainnav.gif"
                        />
                        <a href="https://steamcommunity.com/id/ralilith/" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿ steam </p></a>
                        <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿  lastfm </p></a>
                        <a href="https://ko-fi.com/ralilith" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿  kofi </p></a>
                        <a href="https://x.com/ra_catsz" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿  twitter </p></a>                        
                        <a href="https://myanimelist.net/profile/ralilith" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿  mal </p></a>
                        <a href="https://www.backloggd.com/u/ralilith" target="_blank" rel="noopener noreferrer" className="hover:underline"> <p > ✿  backloggd </p></a>
                    </span>                
                <div> ∟</div>                                    
            </div>

        
        </div>
        
        </main>
    </div>


    //   <div className={`w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
    //   >
    //       <Topbar/>

    //       <main className="grid md:flex">                    
    //           <section className="flex gap-5 w-full p-20 pt-10 flex-col">
    //               <div className="border-2 border-pink-900 items-center h-fit">
    //                   <div className="flex border-b-2 border-pink-900 p-1 text-lg">
    //                       me - WORK IN PROGRESS
    //                        <p className="ml-auto">X</p>
    //                   </div>
    //                   <div className="rotate-180"> ∟</div>
    //                   <span className="grid p-5 gap-3 text-sm xl:text-[15px] pt-auto justify-center text-center ">
    //                   <div className="border-2 border-pink-900 h-fit bg-black mr-5 sm:mr-0 5xl:max-w-200">
    //                     <div className="flex border-b-2 border-pink-900 p-1 text-lg 5xl:text-2xl">
    //                         interests
    //                         <p className="ml-auto">X</p>
    //                     </div>
    //                     <div className='5xl:text-xl'>
    //                         <div className="flex items-center p-6 gap-8">
    //                             <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Games </a>
    //                             <p className="w-full text-center">MMOs, JRPGs, rhythm games, souls-likes, metroidvanias, VNs, Fighting games</p>
    //                         </div>
    //                         <div className="flex items-center p-6 gap-8 border-t">                            
    //                             <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer" className="underline"> Music </a>
    //                             <p className="w-full text-center">Grimes, Katie Jane Garside, Machinel Girl, Crystal Castles, Loathe, My Bloody Valentine, Femtanyl, Black Dresses, BMTH, Sewerslvt, Goreshit, Have a Nice Life, Ichiko Aoba, Blank Banshee, YABUJIN, Ecco2k...</p>
    //                         </div>
    //                         <div className="flex items-center p-6 gap-8 border-t">
    //                             <a href="https://letterboxd.com/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Movies </a>
    //                             <p className="w-full text-center">all about lily chou chou, oldboy, requiem for a dream, angel's egg, hereditary, midsommar, mulholland drive, rosemary's baby, taxi driver...</p>
    //                         </div>
    //                         <div className="flex items-center p-6 gap-8 border-t">
    //                             <p>Anime</p> 
    //                             <p className="w-full text-center">serial experiments lain</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                       <button onClick={start} className="underline">                            
    //                           WIP                            
    //                           <img src={'/nekowip.gif'}
    //                               width={400}
    //                               height={400}
    //                               alt=""
    //                           />
    //                       </button>                            
    //                   </span>                
    //                   <div> ∟</div>                    
    //               </div>
    //           </section>     
    //       </main>


    //       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //           one day you'll sit in the sun and things won't feel so bad.
    //       </footer>
    //   </div>
  );
}
