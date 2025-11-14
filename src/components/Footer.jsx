import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white/60 backdrop-blur-md mt-8 py-6">
      <div className="container-max text-center text-sm text-slate-600">© {new Date().getFullYear()} Rondey Swaji — Built with React + Tailwind. • <a href="https://github.com/rodneyswaji-hue" className="text-brand-500">GitHub</a></div>
    </footer>
  )
}