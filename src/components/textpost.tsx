
import { useEffect, useState } from 'react'
import { thoughts } from '../types/types'
import { getThoughts } from '../api/api'
import supabase from '../utils/supabase'
import { cn } from '../utils/utils'

export default function ClientPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<any>([])
  const [posts2, setPosts2] = useState<thoughts[] | null>([])

  useEffect(() => {
    getThoughts().then(posts2 => setPosts2(posts2)).then(loading => setIsLoading(false))
  }, [])

  const thoughtsRealtime = supabase
  .channel('schema-db-changes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table:'t_thoughts'
    },
    (payload) =>  getThoughts().then(posts2 => setPosts2(posts2)).then(loading => setIsLoading(false))
  )
  .subscribe()
  
  function ehMomo(pNome: string){
    if (pNome = "cleo campbell") return true 
    else 
    return false
  }

  return (
    isLoading ? <p>Loading</p> : 
    <div className='text-white space-y-2'>
        {posts2?.map (data => 
          <pre key={data.id} className='border-b p-3 shadow-xl backdrop-blur-xs hover:backdrop-blur-sm '>
          {/* <div className='flex'>{'>'} {data.handle} : <b className='ml-auto'>{data.date}</b> </div> */}
          
          <div className='grid grid-cols-2 sm:flex underline decoration-1'>{'handle:'} 
            {data.handle ?  
              (<pre className={cn('underline',
                               data.ra ? 'text-purple-800': '',
                               data.momo ? 'text-pink-600': '',                               
                              )}
              > 
              {/* ehMomo(data.handle) ? 'text-pink-600': '' */}
                {data.handle}
              </pre>)
            : 
              (<> Anon</>)
            }
            <b className='ml-auto'>date: {data.date}</b> 
          </div>

            {data.title ?  
              <pre key={data.id} className='pl-1'>
                title: {data.title}
              </pre>
            : 
              ('')
            }

            <pre key={data.id} className='text-wrap break-all'>
                {data.text}
            </pre>
          </pre>
        )}
    </div>
  )
}
