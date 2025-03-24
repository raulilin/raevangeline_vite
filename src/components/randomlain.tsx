import { getRandomIntCryp } from "../utils/utils"

export function RandomLainPic() {
    const idTest = getRandomIntCryp(0,22) + 1

    function randomLain() : string {       
        const lainpic = "/catpics/"+idTest+".png"
        return lainpic
    }

    return (
        <div className="border-2 border-pink-900 ">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                random lain(my cat) pic no#{idTest + 1}
                <p className="ml-auto">X</p>
            </div>
            <div className="flex items-center p-6 justify-center">

                <img src={randomLain()}
                    width={450}
                    height={450}
                    alt=""
                />
            </div>            
        </div> 
    )
}