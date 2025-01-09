import React from "react";

const Home = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font w-full">
      {/* Main container */}
      <div className="container mx-auto px-4 py-6 flex flex-col gap-0">
        {/* Title */}
        <div className="bg-blue-900 rounded-t-xl shadow-inner-lg shadow-blue-950">
          <p className="text-cyan-200 font-mono text-3xl my-4 text-center">
            React Sorting Algorithm Visualizer
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gray-800  shadow-lg shadow-black p-6">
          <p className="text-gray-300 font-mono text-3xl mb-5 text-center">
            Overview
          </p>
          <p className="text-gray-200 font-mono text-sm mb-4 text-wrap mx-4">
            The Sorting Algorithm Visualizer is a web application built with
            React and Tailwind CSS to help users understand and visualize
            various sorting algorithms.
          </p>

          <p className="text-gray-300 font-mono text-3xl mb-4">Features</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200 font-mono mx-8">
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Heap Sort</li>
            <li>Bubble Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
          </ul>
        </div>

        {/* Project Members Title */}
        <div className="bg-blue-900  shadow-inner-lg shadow-blue-950">
          <p className="text-cyan-200 font-mono text-3xl my-4 text-center">
            Project Members
          </p>
        </div>

        {/* Project Members */}
        <div className="bg-gray-800 rounded-b-xl shadow-lg shadow-black p-6">
          {/* Flex container for members */}
          <div className="flex flex-col md:flex-row md:justify-center gap-10">
            {/* 1) Yoonho */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="lg:w-4/12 md:w-3/5 w-4/6 mb-6 object-cover object-center rounded-full"
                alt="Yoonho"
                src="yoonho.png"
              />
              <div className="text-center w-full">
                <h1 className="title-font font-mono text-2xl mb-2 font-medium text-white">
                  Yoonho Kim
                </h1>
                <p className="leading-relaxed mb-1 text-sm font-mono px-2">
                  EngSci Robo @ UofT | Insert your info here
                </p>
                <p className="leading-relaxed mb-3 text-sm font-mono px-2">
                  yoonhoemail@gmail.com
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    className="w-12 h-12 flex items-center relative overflow-hidden justify-center rounded-full bg-blue-800 shadow-md shadow-blue-950 group transition-all duration-300"
                    href="https://www.linkedin.com/in/yoonho-kim-b6042a229/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:fill-blue-400"
                      alt="linkedin"
                      src="linkedin-logo.png"
                    />
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                  <a
                    className="w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-full bg-orange-800 shadow-md shadow-orange-950 group transition-all duration-300"
                    href="https://github.com/yamhokim"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:fill-orange-400"
                      alt="github"
                      src="github-logo.png"
                    />
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-orange-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* 2) Sahel */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="lg:w-4/12 md:w-3/5 w-4/6 mb-6 rounded-full"
                alt="Sahel"
                src="sahel.png"
              />
              <div className="text-center w-full">
                <h1 className="title-font font-mono text-2xl mb-2 font-medium text-white">
                  Sheikh Sahel
                </h1>
                <p className="leading-relaxed mb-1 text-sm font-mono px-2">
                  Information Technology @ York University | Insert your info
                  here
                </p>
                <p className="leading-relaxed mb-3 text-sm font-mono px-2">
                  jpsahelsk@gmail.com
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    className="w-12 h-12 flex items-center relative overflow-hidden justify-center rounded-full bg-blue-800 shadow-md shadow-blue-950 group transition-all duration-300"
                    href="https://www.linkedin.com/in/sahel-sheikh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:fill-blue-400"
                      alt="linkedin"
                      src="linkedin-logo.png"
                    />
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                  <a
                    className="w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-full bg-orange-800 shadow-md shadow-orange-950 group transition-all duration-300"
                    href="https://github.com/JPSahel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:fill-orange-400"
                      alt="github"
                      src="github-logo.png"
                    />
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-orange-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                </div>
              </div>
            </div>
            {/* Add more members here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
