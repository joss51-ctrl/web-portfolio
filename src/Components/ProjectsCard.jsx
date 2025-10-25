import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa'; 
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ProjectCard({ project, ...aosProps }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNextClick = (e) => {
    e.stopPropagation(); 
    if (project.images && project.images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % project.images.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevClick = (e) => {
    e.stopPropagation(); 
    if (project.images && project.images.length > 1) {
      const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  const hasMultipleImages = project.images && project.images.length > 1;
  const slides = project.images.map(src => ({ src }));

  return (
    <>
      <div
        className='p-4 bg-zinc-800 rounded-md transition-all duration-300 ease-in-out hover:scale-105 
        hover:border-violet-500 border-2 border-transparent relative group flex flex-col'
        {...aosProps}
      >
        <div className="relative overflow-hidden rounded-md">
          <img 
            src={project.images[currentImageIndex]}
            alt={project.nama}
            className="w-full h-60 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={() => setOpen(true)} 
          />

          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       text-violet-600 text-3xl opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 
                       pointer-events-none" 
          >
            <FaSearchPlus />
          </div>

          {hasMultipleImages && (
            <>
              <div
                onClick={handlePrevClick}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-violet-600 text-3xl opacity-100 
                sm:group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300 cursor-pointer z-10"
              >
                <FaChevronLeft />
              </div>
              <div
                onClick={handleNextClick} 
                className="absolute top-1/2 right-2 -translate-y-1/2 text-violet-600 text-3xl opacity-100 
                sm:group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300 cursor-pointer z-10"
              >
                <FaChevronRight />
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col flex-1">
          
          <h1 className='text-base md:text-xl font-bold my-4'>{project.nama}</h1>
          <p className='text-sm md:text-base/loose my-4 opacity-70'>{project.desk}</p>
          <div className='flex flex-wrap gap-2'>
            {project.tools.map((tool, index) => (
              <p className='py-1 px-3 text-sm rounded-md font-semibold bg-zinc-700' key={index}>{tool}</p>
            ))}
          </div>
          <div className='mt-auto pt-8 text-center '>
            <a href={project.link} 
               target="_blank" 
               rel="noopener noreferrer"
             className='text-sm md:text-base bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 
             transition-colors'>
              See Projects
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentImageIndex} 
        on={{ view: ({ index }) => setCurrentImageIndex(index) }}
        plugins={[Zoom, Thumbnails]} 
      />
    </>
  );
}