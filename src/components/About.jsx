import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (

    <section id="about" className="h-screen ">
      <div className="container mx-auto flex h-full px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Olga.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Software Engineer with a background in Architecture and Building Information Modeling (BIM). Proficient in complex problem-solving, data management, and task automation. Committed to delivering efficient and scalable solutions while continuously adapting to industry best practices.
          </p>
          <div className="flex justify-center">
            <a href="Resume - O Bienias.pdf"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>

            <Link to="/contact" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Work with me</Link>


          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="olga.jpg"
          />
        </div>
      </div>
    </section>
  );
};

