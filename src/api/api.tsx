import { poems, songs, thoughts } from '../types/types';
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