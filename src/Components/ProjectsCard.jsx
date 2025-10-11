// src/components/ProjectCard.jsx

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProjectCard({ project, ...aosProps }) {
  // MENGGUNAKAN useState(0) UNTUK INDEX, BUKAN true/false
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // LOGIKA BARU UNTUK MAJU
  const handleNextClick = () => {
    if (project.images && project.images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % project.images.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  // LOGIKA BARU UNTUK MUNDUR
  const handlePrevClick = () => {
    if (project.images && project.images.length > 1) {
      const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div
      className='p-4 bg-zinc-800 rounded-md transition-all duration-300 ease-in-out hover:scale-105 
      hover:border-violet-500 border-2 border-transparent relative group'
      {...aosProps}
    >
      <div className="relative overflow-hidden rounded-md">
        <img
          // MENGGUNAKAN project.images DENGAN INDEX
          src={project.images[currentImageIndex]}
          alt={project.nama}
          className="w-full h-38  object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={handleNextClick}
        />

        {hasMultipleImages && (
          <>
            <div
              onClick={handlePrevClick} // Panggil fungsi mundur
              className="absolute top-1/2 left-2 -translate-y-1/2 text-violet-600 text-3xl opacity-100 
              sm:group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300 cursor-pointer"
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={handleNextClick} // Panggil fungsi maju
              className="absolute top-1/2 right-2 -translate-y-1/2 text-violet-600 text-3xl opacity-100 
              sm:group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300 cursor-pointer"
            >
              <FaChevronRight />
            </div>
          </>
        )}
      </div>

      <div>
        <h1 className='text-base md:text-xl font-bold my-4'>{project.nama}</h1>
        <p className='text-sm md:text-base/loose my-4 opacity-70'>{project.desk}</p>
        <div className='flex flex-wrap gap-2'>
          {project.tools.map((tool, index) => (
            <p className='py-1 px-3 text-sm rounded-md font-semibold bg-zinc-700' key={index}>{tool}</p>
          ))}
        </div>
        <div className='mt-8 text-center'>
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
  );
}