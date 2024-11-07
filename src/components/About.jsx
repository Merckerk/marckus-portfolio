/**
 * @copyright 2024 Marckus Rey C. Santiago
 * @license Apache-2.0
 */

import React from "react";

const About = () => {
  const aboutItems = [
    { label: "Relevant Experience", number: 1 },
    { label: "Projects", number: 5 },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Marckus, a fresh graduate from the Polytechnic
            University of the Philippines with hands on experience with creating
            websites using Next.js and React.js. Combining knowledge with UI/UX
            principles, I transform your vision into a a digital masterpiece
            that are accessible, usable, and excels in performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-emerald-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
