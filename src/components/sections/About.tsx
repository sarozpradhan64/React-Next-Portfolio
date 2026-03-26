import React from 'react'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import metas from '@/data/metaData'
import { CircleCheckBig } from 'lucide-react'
import About1 from "../../../public/img/about-1.jpg";
import About2 from "../../../public/img/about-2.jpg";

const About = () => {
  return (
    <div className="py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionTitle title={"About Me"} />

          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            {metas.user.about}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Requirement Analysis",
              "Quality Solution",
              "Ensuring Satisfaction",
              "Modern Technologies"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-dark-lighter border border-white/5 rounded-2xl transition-all duration-300 hover:border-secondary/30">
                <CircleCheckBig className="w-5 h-5 text-secondary" />
                <span className="text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="pt-12">
                <Image
                  className="rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  src={About1}
                  alt="about"
                />
              </div>
              <div>
                <Image
                  className="rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  src={About2}
                  alt="about 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About