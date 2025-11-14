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
    title: 'Phone Store',
    desc: 'A modern, responsive landing page template with smooth animations and a clean design.',
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
          <motion.div 
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition"
          >
            <div className="text-sm text-slate-500">Project</div>

            <h3 className="font-semibold text-lg mt-2">{p.title}</h3>

            <p className="text-sm mt-2 text-slate-700">{p.desc}</p>

            <div className="mt-4 text-xs text-slate-600">{p.tech.join(' • ')}</div>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>

              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
                
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
