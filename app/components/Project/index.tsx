'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useProjects } from '@/app/context/ProjectContext'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { projects, loading } = useProjects()
  console.log("first", projects)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )


      gsap.fromTo('.section-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [projects])



  return (
    <section id="work" ref={sectionRef} className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-white rounded-lg mr-4 flex items-center justify-center">
              <span className="text-dark font-bold text-xl">TS</span>
            </div>
            <div>
              <h2 className="section-title text-sm uppercase tracking-wider text-gray-400 mb-2">
                THE SIMPLE
              </h2>
              <h3 className="section-title text-xl font-semibold">Easy Work</h3>
            </div>
          </div>

          <a
            href="#contact"
            className="section-title text-white hover:text-gray-300 transition-colors flex items-center group"
          >
            See the Portfolio
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} />
            ))}


            <div className="project-card bg-dark-secondary rounded-lg p-8 flex flex-col justify-center items-center text-center min-h-[400px]">
              <h3 className="text-xl font-semibold mb-4">Couldn&apos;t find what you need?</h3>

              <button className="bg-gradient-to-br from-[#222222] via-[#DFA7A5] to-[#AD7C6F] text-white px-6 py-3 rounded transition-colors">
                Request Now →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects