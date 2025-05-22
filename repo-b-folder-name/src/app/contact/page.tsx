import React from "react";
import { Metadata } from "next";
import metas from "@/data/metaData";
import FrontendLayout from "@/components/layouts/FrontendLayout";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: `Contact Me | ${metas.user.name}`,
  description:
    "Contact me to discuss your project ideas, collaborate, or get expert consulting to scale your business effectively.",
};

export default function Contact() {
  return (
    <FrontendLayout>
      <div className="relative isolate">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Got a Project in Mind? Get in Touch.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <ContactForm />

            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-white">
                  <p>
                    “The function of good software is to make the complex appear
                    to be simple. — Grady Booch”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <div>
                    <div className="text-base font-semibold text-white">
                      {metas.user.name}
                    </div>
                    <div className="text-sm leading-6 text-gray-400">
                      {metas.user.email}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}
