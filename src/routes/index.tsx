import { createFileRoute } from '@tanstack/react-router'
import { getRandomIntCryp } from '../utils/utils';
import { SFXButton } from '../components/sfxbutton';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const bgGif = [
      {value: "url(/images/intro/1.gif)" },
      {value: "url(/images/intro/2.gif)" },
      {value: "url(/images/intro/3.gif)" },
      {value: "url(/images/intro/4.gif)" },
      {value: "url(/images/intro/5.gif)" },        
]       
  const bg : string = bgGif[getRandomIntCryp(0,4)].value;

  return (
  <div className='bg-black w-screen h-screen '>        
      <div className={`h-screen w-screen text-justify`}
          style={{
              backgroundImage: bg,
              height: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '70%',
          }}        
      >          
           <SFXButton/>
      </div>
  </div>
  )
}