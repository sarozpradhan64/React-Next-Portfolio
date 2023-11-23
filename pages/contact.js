import Image from "next/image";
import React from "react";
import SrzLayout from "../components/SrzLayout";
import data from "../src/data";
import metas from "../src/metaData";
import profile from "../public/img/profile.svg";

export default function contact() {
  const socials = data.socials;
  return (
    <SrzLayout isContactPage={true} title="Lets work together">
      <div className="grid md:grid-cols-2 gap-5">
        <div>

          <div>
            <p className="mb-2">Address:</p>
            <h3 className="font-bold md:text-3xl text-xl text-white border-0">Lalitpur, Nepal</h3>
          </div>

          <div className="mt-8">
            <p className="mb-2">Send me your mail:</p>
            <h3 className="font-bold md:text-3xl text-xl text-white border-0">
              <a href="mailto:sarozpradhan64@gmail.com" className="text-primary border-0">
                sarozpradhan64@gmail.com
              </a>
            </h3>
          </div>


          <div className="mt-8">
            <p className="mb-2">Get in touch:</p>
            {/* social medias */}
            <div className="flex pt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  rel="noreferrer"
                  className="btn btn-square btn-primary me-2 rounded"
                  href={social.href}
                  target={"_blank"}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="md:block hidden relative"
          style={{ 'minHeight': '500px', 'marginTop': '-20px' }}
        >
          <Image src={profile} fill alt={`${metas.user.name} profile picture`} className="md:m-3" />{" "}
        </div>
      </div>
    </SrzLayout>
  );
}
