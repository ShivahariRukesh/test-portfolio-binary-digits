'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useProjects } from '@/app/context/ProjectContext'
import ScrollableSection from './ScrollableSection'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { projects, loading } = useProjects()

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
  }, [projects,])

  useEffect(() => {
    gsap.to('.arrow-about',
      {
        x: 50,
        duration: 1,
        repeat: -1,
        yoyo: true
      })

    gsap.to('.arrow-text', {
      scale: 1.25,
      duration: 1.25,
      repeat: -1,
      ease: "back.out",
      yoyo: true
    })

  }, [])


  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-dark font-quicksand">
      <div className=" px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between items-start md:items-center mb-16">

          <div className='relative'>
            <div className="relative z-10 text-lg font-bold text-white mix-blend-difference">
              <p className='relative top-2'>
                THE SIMPLE
              </p>
              <p className='relative left-13 top-2'>
                EASY WORK
              </p>
            </div>
            <div className=" absolute top-0 left-12 w-[130px] h-[50px] bg-white  rounded-tr-full"></div>
          </div>

          <div
            className="section-title arrow-text text-white hover:text-gray-300 transition-colors text-3xl flex items-center group"

          >
            See the Portfolio
            <div className="arrow-about ml-1 transform group-hover:translate-x-1 transition-transform">→</div>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <ScrollableSection projects={projects} />
        )}
      </div>
    </section>
  )
}

export default Projects