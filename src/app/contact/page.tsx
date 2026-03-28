import React from "react";
import { Metadata } from "next";
import metas from "@/data/metaData";
import FrontendLayout from "@/components/layouts/FrontendLayout";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: `Contact Me | ${metas.user.name}`,
  description:
    "Contact me to discuss your project ideas, collaborate, or get expert consulting to scale your business effectively.",
};

export default function Contact() {
  return (
    <FrontendLayout>
      <div className="relative isolate py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                Let&apos;s talk about <br/>
                <span className="text-secondary">your project</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 font-medium">
                Got a Project in Mind? Get in Touch.
              </p>
              
              <ContactForm />
            </div>

            <div className="lg:w-80 space-y-8">
              <div className="p-8 bg-dark-lighter border border-white/5 rounded-3xl shadow-premium">
                <blockquote className="text-lg font-semibold leading-relaxed text-slate-200 italic mb-8">
                  &ldquo;The function of good software is to make the complex appear
                  to be simple.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">
                      Grady Booch
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-premium-gradient rounded-3xl shadow-premium text-white">
                <h4 className="text-xl font-bold mb-4">Direct Contact</h4>
                <p className="text-white/80 mb-2">Email me at:</p>
                <Link href={`mailto:${metas.user.email}`} className="text-lg font-bold hover:underline">
                  {metas.user.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}
