import React from 'react'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import metas from '@/data/metaData'
import { CircleCheckBig } from 'lucide-react'
import About1 from "../../../public/img/about-1.jpg";
import About2 from "../../../public/img/about-2.jpg";

const About = () => {
  return (
    <div className="mt-32 grid md:grid-cols-2 gap-5">
        <div>
          <SectionTitle title={"About Me"} />

          <p className="mb-4 tracking-wide leading-relaxed">
            {metas.user.about}
          </p>
          <p className="mb-3">
            <CircleCheckBig className="w-4 inline me-2 text-secondary" />
            Requirement Analysis
          </p>
          <p className="mb-3">
            <CircleCheckBig className="w-4 inline me-2 text-secondary" />A
            Quality Solution
          </p>
          <p className="mb-3">
            <CircleCheckBig className="w-4 inline me-2 text-secondary" />
            Ensuring Satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div>
            <Image
              className="md:rounded-lg rounded-sm"
              src={About1}
              alt="about"
            />
          </div>
          <div className="md:block hidden">
            <Image
              className="md:rounded-lg rounded-sm"
              src={About2}
              alt="about 2"
            />
          </div>
        </div>
      </div>
  )
}

export default About