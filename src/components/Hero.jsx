import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="pt-32 pb-10">
      <div className="container-max flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span className="text-brand-500">Rondey Swaji</span> 👋</h1>
          <p className="mt-4 text-lg text-slate-700">I craft beautiful, high-performance web interfaces that turn ideas into delightful user experiences. I build with React, Tailwind, and an obsession for polish.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-brand-500 text-white font-medium shadow">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-200 text-slate-700">Get in touch</a>
          </div>
          <div className="mt-6 text-sm text-slate-600">2 years experience • React • Tailwind • UI & UX</div>
        </motion.div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-sm text-slate-500">Snapshot</div>
          <h3 className="font-semibold text-lg mt-2">Frontend Developer</h3>
          <p className="text-sm mt-3">I build responsive web apps using modern tools, focusing on performance and delightful UI.</p>
          <div className="mt-4 text-xs text-slate-600">📍 Nairobi • 📧 (use LinkedIn or GitHub)</div>
        </motion.div
      </div>
    </section>
  )
}