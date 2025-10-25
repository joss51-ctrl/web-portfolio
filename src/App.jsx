import DataImage from './data';
import { FaLaptopCode, FaRobot, FaBrain, FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'; 
import ProjectsSort from './Components/ProjectsSort';
import "animate.css";
function App() {

  return (
    <>
    {/* Hero Section */}
     <div id="Home" className="hero grid grid-cols-2 flex items-center">

      <div className='animate__animated animate__fadeInUp animate__delay-3s'>
        <h1 id="About" className='text-3xl/tight font-bold mb-6 md:text-5xl/tight'>Hello, i am</h1>
        <h1 className='text-3xl/tight font-bold mb-6 md:text-5xl/tight'>Yechiel Josey Wijaya</h1>
        <p className='text-sm mb-6 opacity-80 md:text-base/loose '>a fifth-semester Computer Science student at Bina Nusantara University with a strong 
          interest in Web Development, Machine Learning, and Artificial Intelligence. I enjoy 
          building practical applications and exploring how AI can be integrated into real-world 
          solutions.</p>

      <div className='flex items-center gap-5 '>
                <a 
          href="/CV-Yechiel Josey.pdf" 
          download="CV-Yechiel Josey.pdf" 
          className='bg-violet-700 p-4 text-sm rounded-2xl hover:bg-violet-600 md:text-lg'
        >
          Download CV
        </a>
        <a href="#Projects" className='bg-zinc-700 p-4 text-sm rounded-2xl hover:bg-zinc-600 md:text-lg'>See Projects</a>
      </div>

      </div>
      <img
        src={DataImage.HeroImage}
        alt="Josey"
        className='w-[340px] ml-auto -translate-y-20 mr-15
                  rounded-full animate__animated animate__fadeInUp animate__delay-4s'/>     
    </div>
    
    {/* Skills Section */}
    <div className="flex flex-col items-center pt-10" data-aos="fade-up" data-aos-duration = "1000">
          <h1 className="text-3xl font-bold mb-4 itec md:text-4xl">Skills</h1>

          <div className="flex gap-12 text-center pt-5">
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-4xl mb-2 md:text-5xl " />
              <p className='skills'>Web Development</p>
            </div>

            <div className="flex flex-col items-center">
              <FaRobot className="text-4xl mb-2 md:text-5xl" />
              <p className='skills'>Machine Learning</p>
            </div>

            <div className="flex flex-col items-center">
              <FaBrain className="text-4xl mb-2 md:text-5xl" />
              <p className='skills'>Artificial Intelligence</p>
            </div>
          </div>
        </div>


    <div class="flex flex-col md:flex-row md:gap-16 mt-25" data-aos="fade-up" data-aos-duration = "1000" >

      <div class="w-full md:w-1/2 text-center">
        <h2 class=" text-lgmd:text-xl font-bold mb-3">LANGUAGE & FRAMEWORK</h2>
        <p class="text-sm/loose md:text-base/loose opacity-80">HTML | CSS | Javascript | React | TailwindCSS |</p>
        <p class="text-sm/loose  md:text-base/loose opacity-80">Python | Streamlit | </p>
        <p class="text-sm/loose  md:text-base/loose opacity-80">Express.js | REST API | SQL | MongoDB </p>
      </div>

      <div class="w-full md:w-1/2 mt-8 md:mt-0 text-center">
        <h2 class="text-lg font-bold mb-3 md:text-xl">TOOLS</h2>
        <p class="text-base/loose opacity-80">Visual Studio Code | Git | Github | Figma | Canva</p>
      </div>

    </div>
  
{/* Project Section */}
<div id="Projects" className='projects mt-24' data-aos="fade-up" data-aos-duration="1000">
  <h1 className='text-center text-3xl md:text-4xl font-bold mb-2'>Projects</h1>
  <p className='text-base/loose text-center opacity-50'>Let’s take a look at what I’ve built so far</p>
  <ProjectsSort />

  
</div>
    {/* {Contact} */}

    <div id='Contact' className='mt-22 flex flex-col text-center gap-3' data-aos="fade-up" data-aos-duration = "1000">
      <h1 className='text-3xl  md:text-4xl font-bold mb-2'>Contact</h1>
      <p className='text-sm md::text-base/loose opacity-50'>+62 813-2687-7455</p>
      <p className=' text-sm md:text-base/loose opacity-50'>yechieljo@gmail.com</p>
      </div>
      
   {/* Container Relative  */}
<div className='relative flex justify-between items-center pt-10 pb-15' data-aos="fade-up" data-aos-duration = "1000">

  {/* GRUP KIRI: Logo */}
  <div>
    <p className='font-bold text-2xl bg-white text-black p-1 md:bg-transparent md:text-white'>Portfolio</p>
  </div>
  
  {/* GRUP TENGAH: Navigasi */}
  <div className='absolute left-1/2 -translate-x-1/2  items-center gap-6 hidden sm:flex'>
    <a href="#Home" className='text-zinc-400 hover:text-white text-lg font-medium'>Home</a>
    <a href="#About" className='text-zinc-400 hover:text-white text-lg font-medium'>About</a>
    <a href="#Projects" className='text-zinc-400 hover:text-white text-lg font-medium'>Projects</a> 
  </div>
  
  {/* GRUP KANAN: Ikon Sosial Media */}
  <div className='flex items-center gap-6'>
    {/* Ikon Email */}
    <a 
      href="mailto:yechieljo@gmail.com" 
      className='text-2xl text-zinc-400 hover:text-violet-500 transition-colors duration-300'
    >
      <MdEmail />
    </a>

    {/* Ikon Instagram */} 
    <a href="https://www.instagram.com/yechieljose/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className='text-2xl text-zinc-400 hover:text-violet-500 transition-colors duration-300' > 
    <FaInstagram /> </a>

    {/* Ikon LinkedIn */} 
    <a href="https://www.linkedin.com/in/yechiel-josey-a80aa5363/" target="_blank" rel="noopener noreferrer" 
    className='text-2xl text-zinc-400 hover:text-violet-500 transition-colors duration-300' > 
    <FaLinkedin /> </a>

    {/* Ikon Github */} 
    <a 
      href="https://github.com/joss51-ctrl" 
      target="_blank" 
      rel="noopener noreferrer"
      className='text-2xl text-zinc-400 hover:text-violet-500 transition-colors duration-300'
    >
      <FaGithub />
    </a>
  </div>
</div>

    </>
  )
}

export default App
