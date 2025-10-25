// src/Components/ProjectsSort.jsx

import React, { useState } from 'react';
import ProjectCard from './ProjectsCard'; // <-- 1. DIUBAH: Path impor diperbaiki
import { listProyek } from '../data';
export default function ProjectsSort() { // <-- Saya ganti nama fungsi agar sesuai nama file
  // 1. State untuk melacak filter yang aktif
  const [activeFilter, setActiveFilter] = useState('ALL');

  // 2. Daftar untuk tombol filter
  const filters = ['ALL', 'WEB', 'ML/AI']; 

  // 3. Logika untuk mem-filter proyek
  const filteredProjects = activeFilter === 'ALL'
    ? listProyek // <-- 2. DIUBAH: Menggunakan listProyek
    : listProyek.filter(project => project.category === activeFilter); // <-- 2. DIUBAH

  return (
    <section>
      {/* 4. Render Tombol Filter */}
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

      {/* 5. Render Proyek yang Sudah Difilter */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.nama + index} // Beri key yang unik
            project={project}
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          />
        ))}
      </div>
    </section>
  );
}