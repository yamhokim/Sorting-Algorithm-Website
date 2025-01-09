import React from "react";
const Home = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font w-full">
        {/*Description */}
        <div className="container mx-auto flex px-1 py-4 justify-center flex-col w-full mb-4">
          <div className="bg-blue-900 rounded-t-xl mx-20 shadow-inner-lg shadow-blue-950">
            <p className="text-cyan-200 font-mono text-3xl  my-3">
              React Sorting Algorithm Visualizer
            </p>
          </div>
          <div className="bg-grey-800 rounded-t-xl mx-20 shadow-lg shadow-black">
            <p className="text-grey-300 font-mono text-3xl  my-5">Overview</p>
            <p className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              The Sorting Algorithm Visualizer is a web application built with
              React and Tailwind CSS to help users understand and visualize
              various sorting algorithms
            </p>
            <p className="text-grey-300 font-mono text-3xl  mb-4">Features</p>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Selection Sort
            </li>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Insertion Sort
            </li>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Heap Sort
            </li>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Bubble Sort
            </li>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Merge Sort
            </li>
            <li className="text-grey-200 font-mono text-s mb-4 text-wrap mx-24">
              Quick Sort
            </li>
          </div>
          <div className="bg-blue-900 rounded-t-xl mx-20 shadow-inner-lg shadow-blue-950 mt-10">
            <p className="text-cyan-200 font-mono text-3xl  my-3">
              Project Members
            </p>
          </div>
        </div>
        {/*Project members */}
        <div className="bg-grey-800 rounded-t-xl mx-20 shadow-lg shadow-black mb-4">
          <div className="container mx-auto flex px-1 py-4 items-start justify-center flex-col md:flex-row md:items-center gap-10">
            {/*Yoonho */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="lg:w-4/12 md:w-3/5 w-5/7 mb-10 object-cover object-center rounded-full"
                alt="hero"
                src="yoonho.png"
              ></img>
              <div className="text-center lg:w-2/8 w-full">
                <h1 className="title-font font-mono sm:text-2xl text-2xl mb-4 font-medium text-white">
                  Yoonho Kim
                </h1>
                <p className="leading-relaxed mb-1 text-sm font-mono text-wrap px-2">
                  EngSci Robotics & AI @ UofT | Insert ur info here
                </p>
                <p className="leading-relaxed mb-3 text-sm font-mono text-wrap px-2">
                  yoonho.luke.kim@gmail.com
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    className="w-12 h-12 flex items-center relative overflow-hidden justify-center rounded-full bg-blue-800 shadow-md shadow-blue-950 group transition-all duration-300"
                    href="https://www.linkedin.com/in/yoonho-kim-b6042a229/"
                    target="_blank"
                  >
                    <img
                      className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-blue-400 w-8 h-8"
                      alt="linkedin"
                      src="linkedin-logo.png"
                    ></img>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                  <a
                    className="w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-full bg-orange-800 shadow-md shadow-orange-950 group transition-all duration-300"
                    href="https://github.com/yamhokim"
                    target="_blank"
                  >
                    <img
                      className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-orange-400 w-8 h-8"
                      alt="github"
                      src="github-logo.png"
                    ></img>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-orange-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                </div>
              </div>
            </div>
            {/*Sahel */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="lg:w-4/12 md:w-3/5 w-5/7 mb-10 rounded-full"
                alt="sahel"
                src="sahel.png"
              ></img>
              <div className="text-center lg:w-2/8 w-full">
                <h1 className="title-font font-mono sm:text-2xl text-2xl mb-4 font-medium text-white">
                  Sheikh Sahel
                </h1>
                <p className="leading-relaxed mb-1 text-sm font-mono text-wrap px-2">
                  Information Technology @ York University | Insert ur info here
                </p>
                <p className="leading-relaxed mb-3 text-sm font-mono text-wrap px-2">
                  jpsahelsk@gmail.com
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    className="w-12 h-12 flex items-center relative overflow-hidden justify-center rounded-full bg-blue-800 shadow-md shadow-blue-950 group transition-all duration-300"
                    href="https://www.linkedin.com/in/sahel-sheikh/"
                    target="_blank"
                  >
                    <img
                      className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-blue-400 w-8 h-8"
                      alt="linkedin"
                      src="linkedin-logo.png"
                    ></img>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                  <a
                    className="w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-full bg-orange-800 shadow-md shadow-orange-950 group transition-all duration-300"
                    href="https://github.com/JPSahel"
                    target="_blank"
                  >
                    <img
                      className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-orange-400 w-8 h-8"
                      alt="github"
                      src="github-logo.png"
                    ></img>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-orange-400 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
