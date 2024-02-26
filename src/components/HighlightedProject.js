import React from 'react'
import RevealOnScroll from './Reveal'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr';
import useWork from './swr/useWork';

function HighlightedProject() {
    const {works, isLoading, isError} = useWork();

    const featuredWorks = works ? works.filter((item) => item.is_featured === true) : [];
    return (
        <div className="mt-16">
            <h2 className="mb-3 text-2xl font-medium text-white">Highlighted Projects</h2>
            <span class="h-[2px] bg-secondary w-20 mb-8 inline-block"></span>
            <p className="text-justify">
                Amongst many of my works and project that i put my footprint in, here are some the major listings:
            </p>


            <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4">
                {featuredWorks && featuredWorks.length >= 1 ? (
                    featuredWorks.map((work, index) => (
                        <RevealOnScroll
                            key={index}
                            className="portfolio-item"
                            revealGroupName={"work-card"}
                        >
                            <div className="portfolio-img  rounded overflow-hidden">
                                <Image
                                    className="img-fluid object-cover"
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                />
                                <div className="portfolio-btn relative">
                                    <Link href={`/works/${work.slug}`}>
                                        <h4 className="portfolio-hover-title">{work.title}</h4>
                                        <p className="text-center text-white">View Details</p>
                                    </Link>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))
                ) : (
                    <h3 className="text-white">No works yet</h3>
                )}
            </div>

        </div>
    )
}

export default HighlightedProject