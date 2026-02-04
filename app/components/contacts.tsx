import React from "react";
import Image from "next/image";

const Contacts = () => {
  const contactLinks = [
    {
      name: "Email",
      image: "/23.png",
      href: "mailto:me@faizeenhoque.xyz",
    },
    {
      name: "GitHub",
      image: "/22.png",
      href: "https://github.com/FaizeenHoque",
    },
    {
      name: "YouTube",
      image: "/24.png",
      href: "https://youtube.com/@faizeenmakes",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[var(--lightmode-secondary)] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Image */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-[280px] h-[80px] sm:w-[400px] sm:h-[100px] md:w-[500px] md:h-[120px] lg:w-[600px] lg:h-[140px]">
            <Image
              src="/21.png"
              alt="Get in Touch - Interested in working together or just want to say hi? Drop me a message!"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[160px] md:h-[140px] hover:scale-105 active:scale-95 transition-transform duration-150"
            >
              <Image
                src={contact.image}
                alt={contact.name}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>

        {/* Bottom Leaf Design */}
        <div className="flex justify-center">
          <div className="relative w-[200px] h-[40px] sm:w-[280px] sm:h-[50px] md:w-[350px] md:h-[60px]">
            <Image
              src="/25.png"
              alt="Decorative leaf border"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
