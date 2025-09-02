import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectInterface } from '@/app/types/project';
import Link from 'next/link';

interface ScrollableSectionProps {
    projects: ProjectInterface[]
}

const ScrollableSection = ({ projects }: ScrollableSectionProps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: string) => {
        const container = scrollRef.current;
        const scrollAmount = 320;

        if (direction === 'left') {
            container?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="p-8">

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-black w-10 h-10 rounded-full"
                >
                    ←
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-black w-10 h-10 rounded-full"
                >
                    →
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {projects.map((project) => (
                        <div key={project.id} className="flex-shrink-0">
                            <ProjectCard project={project} />
                        </div>
                    ))}

                    <div className="bg-[#282727] rounded-lg p-8 flex flex-col gap-y-7 justify-center items-center text-center min-w-[300px] h-[400px] border-1 border-[#494949]  flex-shrink-0">
                        <h3 className="text-xl font-semibold text-white">Couldn&apos;t find what you need?

                        </h3>
                        <p>Suggest a tutorial, course or video. I read seek  feedback/suggestion!</p>
                        <Link href='/admin'>
                            <button className="rounded-full bg-gradient-to-r from-[#222222] via-[#7e6e6d] to-[#956b60]  text-white px-6 py-3  transition-all hover:scale-105">
                                Request Now →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default ScrollableSection;