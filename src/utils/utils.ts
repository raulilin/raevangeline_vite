import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomInt(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;        
}

export function getRandomIntCryp(a : number, b : number) {
  return a + (b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
}

export function openInNewTab(url: string) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}    

export function addZero( i : number) {
  if (i < 10) 
    {return "0" + i} 
  else 
    {return i}
}