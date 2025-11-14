import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="fixed w-full top-4 z-50">
      <nav className="container-max bg-white/60 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">RS</div>
          <div className="font-semibold">Rondey Swaji</div>
          <div className="text-sm text-slate-600 ml-3">Creative Web Developer</div>
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:text-brand-700">About</a>
          <a href="#projects" className="hover:text-brand-700">Projects</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
          <a href="https://github.com/rodneyswaji-hue" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-brand-500 text-white">GitHub</a>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  )
}