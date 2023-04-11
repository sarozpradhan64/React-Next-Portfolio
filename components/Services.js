import Image from "next/image";
import React from "react";
import data from "../src/data";

export default function Services() {
  const services = data.services;
  return (
    <div className="container-xxl mt-5" id="services">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-3">
              <h3 className="lh-base mb-0 text-white">My Services !</h3>
            </div>
            <p className="text-justify">
              Whether you&apos;re looking to build a new website, develop a mobile
              app, improve your online visibility with digital marketing, or
              need help with any other aspect of your online presence, we have
              the skills and expertise to get the job done right. Explore my
              services to learn more about what i can do for you, and feel free
              to contact me if you have any questions or would like to discuss
              your project.
            </p>
            <div className="mt-3 row gx-md-5 gy-md-5 gy-3">
              {services.map((service, index) => (
                <div className="col-lg-6 service-card" key={index}>
                  <div className="me-3 col-5 service-img-holder">
                    <Image
                      className="object-cover"
                      src={service.thumbnail}
                      fill
                      alt={service.title}
                    />
                  </div>
                  <div className="col-7">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
