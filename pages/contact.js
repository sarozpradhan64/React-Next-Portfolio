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
      <div className="row g-5">
        <div className="col-lg-6 col-md-6">
          <p className="mb-2">Address:</p>
          <h3 className="fw-bold text-white">Lalitpur, Nepal</h3>
          <hr className="w-100" />
          <p className="mb-2">Send me your mail:</p>
          <h3 className="fw-bold text-white">
            <a href="mailto:sarozpradhan64@gmail.com">
              sarozpradhan64@gmail.com
            </a>
          </h3>
          <hr className="w-100" />
          <p className="mb-2">Follow me:</p>
          {/* social medias */}
          <div className="d-flex pt-2">
            {socials.map((social, index) => (
              <a
                key={index}
                rel="noreferrer"
                className="btn btn-square btn-primary me-2 fs-5"
                href={social.href}
                target={"_blank"}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="col-lg-6 col-md-6 d-md-block d-none position-relative"
              style={{'minHeight': '500px','marginTop':'-20px'}}
        >
          <Image src={profile} fill alt={`${metas.user.name} profile picture`}  className="m-md-3"  />{" "}
        </div>
      </div>
    </SrzLayout>
  );
}
