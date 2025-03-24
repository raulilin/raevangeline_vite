
import { useEffect, useState } from 'react'
import { thoughts } from '../types/types'
import { getThoughts } from '../api/api'
import supabase from '../utils/supabase'

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
  
  return (
    isLoading ? <p>Loading</p> : 
    <div className='text-white'>
        {posts2?.map (data => 
          <pre key={data.id} className='border-b'>
          --{data.date}
          <pre key={data.id} className=''>
              {data.text}
          </pre>
      </pre>
        )}
    </div>
  )
}
