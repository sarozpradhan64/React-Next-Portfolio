import React from "react";
import SrzLayout from "../components/SrzLayout";
import data from "../src/data";
export default function contact() {
  const socials = data.socials;
  return (
    <SrzLayout isContactPage={true}>
      <div className="container-xxl" id="contact">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0 text-white">
                Let&apos;s Work Together
              </h1>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
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
                {socials.map((social,index) => (
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
              className="col-lg-7 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form
                method="post"
                name="contact-form"
                data-netlify="true"
                netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                <input name="bot-field" hidden />
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div data-netlify-recaptcha="true"></div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SrzLayout>
  );
}
