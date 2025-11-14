import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="mt-10 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold">Let’s build something together</h2>
        <p className="mt-2 text-slate-700">I’m open to frontend roles and freelance projects. I reply quickly on GitHub and LinkedIn.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="mailto:replace@example.com"><Mail size={16}/> Email</a>
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="https://www.linkedin.com/in/rodney-swaji-9b4132234" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="https://github.com/rodneyswaji-hue" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
        </div>
      </div>
    </section>
  )
}