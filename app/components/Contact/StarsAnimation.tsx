'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";



const StarsAnimation = () => {

    const starsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const starsRefVariable = starsContainerRef.current
        if (!starsContainerRef.current) return;

        const starElements: HTMLElement[] = [];

        const numberOfStars = 100;

        const createStar = (i: number): HTMLElement => {
            const star = document.createElement('div');
            star.className = 'absolute rounded-full bg-white';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.opacity = '0';
            star.style.zIndex = '-1';
            star.id = `star-${i}`;
            return star;
        };
        for (let i = 0; i < numberOfStars; i++) {
            const star = createStar(i);
            starsContainerRef.current.appendChild(star);
            starElements.push(star);
        }


        starElements.forEach(star => {
            gsap.to(star, {
                opacity: 1,
                scale: Math.random() + 0.5,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 3,
                ease: 'power1.inOut',
            });
        });


        return () => {
            if (starsRefVariable) {
                starsRefVariable.innerHTML = '';
            }
        };
    }, [])

    return (
        <div
            ref={starsContainerRef}
            className='absolute inset-0  bg-gradient-to-br from-black via-[#262726] to-[#605e5e] overflow-hidden z-0'
        >

        </div>
    )
}

export default StarsAnimation