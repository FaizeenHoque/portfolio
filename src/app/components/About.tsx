"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-4xl mx-auto px-6 py-16 text-center md:text-left"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I'm <strong>Faizeen Hoque</strong>, a 15-year-old developer from Bangladesh currently studying at Daffodil International School. 
        Despite my young age, I've developed a deep passion for technology, programming, and artificial intelligence that drives me to constantly learn and innovate.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        My journey spans from traditional programming to cutting-edge AI technologies. 
        I've worked extensively with <em>Ollama</em> for local AI model deployment and have hands-on experience with machine learning frameworks and neural networks.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Skills & Technologies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>JavaScript, TypeScript, and Python programming</li>
          <li>React, Next.js, and Tailwind CSS for web development</li>
          <li>Machine Learning & AI model training & deployment</li>
          <li>Local AI deployment using Ollama</li>
          <li>Problem-solving and algorithmic thinking</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To leverage technology and AI to build innovative solutions that can empower people and improve everyday lives. 
          I’m committed to continuous learning, growth, and sharing my knowledge with the community.
        </p>
      </div>
    </section>
  );
}
