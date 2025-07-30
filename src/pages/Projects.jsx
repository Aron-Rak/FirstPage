import Cards from "../components/cards";
import {useState, useEffect} from "react"
import rarrimg from "../assets/rarr.png"



export default function Projects() {

 const zanikanie = "transition-all  duration-500 ease-in-out translate-x-20 opacity-0 ";
 const pojawianieStart = "transition-all  duration-0 ease-in-out -translate-x-20 opacity-0 "
 const pojawianieEnd = "transition-all duration-500 -ease-in-out translate-x-0 opacity-100"

  const [offSetX, setOffSetX] = useState(window.innerWidth/2)
  const [offSetY, setOffSetY] = useState(window.innerHeight/2)
  const [counter, setCounter] = useState(0)
  const [currentClass, setCurrentClass] = useState(pojawianieEnd)

  useEffect(()=>{
    function handleResize(){
      setOffSetX(window.innerWidth/2)
      setOffSetY(window.innerHeight/2)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
  },[])

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentClass(zanikanie)
      setTimeout(() => {
        setCounter((prevCounter) => (prevCounter + 1) % projects.length);
        setCurrentClass(pojawianieStart)
        setTimeout(() => {
          setCurrentClass(pojawianieEnd)
        }, 50);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const projects = ["Kalkulator Walut",
        "Edytor Tekstowy",
        "Konwerter na pdf",
        "Ogień i Woda",
        "To-Do list",
        "Pogoda"
          ]
  return (
    <div className=" w-6/6 p-4 h-full text-center">
        <h1 className="text-5xl pt-8 font-serif"></h1>
      <div className=" flex justify-center flex-wrap overflow-hidden" >
        <button className="border-2 border-gray-800 w-[40px] h-[40px] text-center rounded-full">&larr;</button>
        <Cards className={currentClass} Name={projects[counter]}/>
        <button className={`border-2 border-gray-800 w-[40px] h-[40px] text-center rounded-full`}><img src={rarrimg}/></button>
      </div>
    </div>
  );
}