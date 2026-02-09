import { useEffect, useState } from "react"
import { getSongList } from "../api/api"
import { getRandomIntCryp, openInNewTab } from "../utils/utils"
import type { songs } from "../types/types"

export function SongButton() {
    const [songlist, setSonglist] = useState<songs[] | null>([])
  
    useEffect(() => {
        getSongList().then(data => setSonglist(data))
    }, [])

    function randomSong() : string {
        const id = getRandomIntCryp(0,16)
        return songlist?.at(id)?.songs_href + ""
    }

    return (
        <button onClick={() => openInNewTab(randomSong()) } style={{ cursor: 'pointer' }}>
            <img src={'/images/navbar/eye.gif'}
                    width={75}
                    height={0}
                    alt=""
            />
        </button>
    )
}