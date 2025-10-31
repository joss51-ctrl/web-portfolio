import {useState, useEffect} from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY > 10){
        setActive(true);
      }else{
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>{
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div className="navbar py-7 flex items-center justify-between">

    <div className="logo">
    <p className='font-bold text-2xl bg-white text-black p-1 md:bg-transparent md:text-white'>Portfolio</p>
    </div>

    <ul className={`navbar1 flex items-center gap-4 z-10 md:static fixed left-1/2 -translate-x-1/2
      md:-translate-x-0 md:opacity-100 bg-white/30 backdrop:blur-md p-4 rounded-br-2xl rounded-bl-2xl 
      md:bg-transparent transition-all md:transition-none
      ${active ?"top-0 opacity-100": "-top-10 opacity-0"  }`}>  
    <li><a href="#Home" className="text-white text-sm  md:text-zinc-400 md:hover:text-white md:text-xl">Home</a></li>
    <li><a href="#About" className="text-white text-sm  md:text-zinc-400 md:hover:text-white md:text-xl">About</a></li>
    <li><a href="#Projects" className="text-white text-sm  md:text-zinc-400 md:hover:text-white md:text-xl">Project</a></li>
    <li><a href="#Contact" className="text-white text-sm  md:text-zinc-400 md:hover:text-white md:text-xl">Contact</a></li>
    </ul>

    </div>

  )
}

export default Navbar