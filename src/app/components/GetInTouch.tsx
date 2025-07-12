
"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_xfgk9dk",       // Your EmailJS Service ID
        "template_8g9jtko",      // Your EmailJS Template ID
        formRef.current!,        // Your form reference
        "tM6GGKN-VaORC3kb7"     // Your EmailJS Public Key (replace with your actual key)
      )
      .then(
        () => {
          setStatus("sent");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS send error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 bg-white p-8 rounded-xl shadow-md"
      >
        <div>
          <label htmlFor="user_name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name" // Must match EmailJS template variable
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email" // Must match EmailJS template variable
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Must match EmailJS template variable
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 font-medium pt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-medium pt-2">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
