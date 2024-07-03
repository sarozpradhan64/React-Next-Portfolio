"use client";

import React, { useRef, useState } from "react";
import FrontendLayout from "@/components/Layouts/FrontendLayout";
import metas from "@/data/metaData";
import emailjs from "@emailjs/browser";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const formData = new FormData(form.current);
    const newErrors = {};

    if (!formData.get("first_name")) {
      newErrors["first_name"] = "First name is required.";
    }
    if (!formData.get("last_name")) {
      newErrors["last_name"] = "Last name is required.";
    }
    if (!formData.get("mobile")) {
      newErrors["mobile"] = "Mobile number is required.";
    }
    if (!formData.get("email")) {
      newErrors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors["email"] = "Email is not valid.";
    }

    if (!formData.get("message")) {
      newErrors["message"] = "Message is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    // Send email if validation passes
    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          form.current.reset();
          setSuccess(true);
          setErrors({});
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <FrontendLayout title="Contact Me">
      <div className="relative isolate">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Got a Project in Mind? Get in Touch.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form
              ref={form}
              onSubmit={sendEmail}
              method="POST"
              className="lg:flex-auto"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      id="first-name"
                      autoComplete="given-name"
                      className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>

                  {errors.first_name && (
                    <div className="mt-2 text-red-600">
                      {errors?.first_name}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="family-name"
                      className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>

                  {errors.last_name && (
                    <div className="mt-2 text-red-600">{errors?.last_name}</div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>

                  {errors.email && (
                    <div className="mt-2 text-red-600">{errors?.email}</div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="mobile"
                      name="mobile"
                      type="number"
                      className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>

                  {errors.mobile && (
                    <div className="mt-2 text-red-600">{errors?.mobile}</div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>

                  {errors.message && (
                    <div className="mt-2 text-red-600">{errors?.message}</div>
                  )}
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Let’s talk
                </button>
              </div>
              {success && (
                <div className="mt-4 text-green-600">
                  <CheckCircleIcon className="h-6 inline me-1" /> Message sent
                  successfully.
                </div>
              )}
            </form>

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
