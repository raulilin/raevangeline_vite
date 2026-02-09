import type { poems, songs, thoughts } from '../types/types';
import supabase from '../utils/supabase';

export async function getThoughts(): Promise<thoughts[] | null>  {
  const { data } = await supabase
    .from('v_thoughts')
    .select()
  
  return data
}

export async function getSongList(): Promise<songs[] | null>  {
  const { data } = await supabase
    .from('t_songs')
    .select()
    .overrideTypes<songs[]>()
  return data
}

export async function getPoems(): Promise<poems[] | null>  {
  const { data } = await supabase
    .from('v_poems')
    .select()
  return data
}

export async function insertThought(pHandle:string, pTitle:string, pText:string) {
  const { error } = await supabase
  .from('t_thoughts')
  .insert({ thoughts_handle:pHandle, thoughts_title:pTitle, thoughts_text:pText })
  
  console.log(error);
}


export async function getDados(): Promise<thoughts[]> {
  const res = await fetch(
      '',
      {
          method: 'GET',
          headers: {
              '': ""
          },
      }
  );
  const data = await res.json();

  return data;
}