import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'House-Hunt',
    desc: 'Real estate web app with interactive map, property listings, and responsive UI.',
    tech: ['React', 'Tailwind', 'Leaflet'],
    link: 'https://github.com/rodneyswaji-hue/house-hunting-website',
    website: 'https://house-hunting-website.vercel.app/'
  },
  {
    title: 'SANLUIS AUTOSHOP',
    desc: 'Car dealership website with inventory management, search, and user reviews.',
    tech: ['React', 'Tailwind', 'Firebase'],
    link: 'https://github.com/rodneyswaji-hue/Sanluis-Car-Shop',
    website: 'https://sanluis-car-shop.vercel.app/'
  },
 
  {
    title: 'Coming Soon',
    desc: 'Placeholder for future work — animations, accessibility case studies, and more.',
    tech: ['React'],
    link: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Selected projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a key={i}  href={p.link} target="_blank" rel="noreferrer" whileHover={{y:-6}} className="block bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
            <div className="text-sm text-slate-500">Project</div>
            <h3 className="font-semibold text-lg mt-2">{p.title}</h3>
            <p className="text-sm mt-2 text-slate-700">{p.desc}</p>
            <div className="mt-4 text-xs text-slate-600">{p.tech.join(' • ')}</div>
            <a href={p.website} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline mt-2 block">View Project</a>
          </motion.a>
        ))}
      </div>
    </section>
  )
}