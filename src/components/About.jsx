import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-16">
      <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-3 text-slate-700">I’m a 4th year Mechanical Engineering student with a passion for frontend development. Over the last 2 years I’ve focused on React and Tailwind to create responsive, accessible and fast web apps. I love turning UI/UX designs into pixel-perfect, interactive interfaces and I enjoy iterating quickly to ship polished features.</p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <li className="bg-brand-50 p-3 rounded">React & Component Architecture</li>
          <li className="bg-brand-50 p-3 rounded">Responsive & Accessible UI</li>
          <li className="bg-brand-50 p-3 rounded">Performance & Debugging</li>
        </ul>
      </motion.div>
    </section>
  )
}