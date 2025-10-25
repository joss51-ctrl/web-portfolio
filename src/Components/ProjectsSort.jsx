
import React, { useState } from 'react';
import ProjectCard from './ProjectsCard'; 
import { listProyek } from '../data';
export default function ProjectsSort() { 
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'WEB', 'ML/AI']; 

  const filteredProjects = activeFilter === 'ALL'
    ? listProyek 
    : listProyek.filter(project => project.category === activeFilter);

  return (
    <section>
      <div className="flex justify-center gap-4 mb-8">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`py-2 px-6 rounded-lg font-semibold transition-all duration-300
              ${activeFilter === filter 
                ? 'bg-violet-700 text-white' 
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
              }
            `}
          >
            {filter === 'ML' ? 'Machine Learning/AI' : filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.nama + index} 
            project={project}
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          />
        ))}
      </div>
    </section>
  );
}