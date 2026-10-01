import React from 'react';

const bannerImg = '/assets/banner-stack.png';

const Mainbar = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="Banner Stack"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <button className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-md shadow-pink-500/20 hover:opacity-95 active:scale-95 transition-all duration-200">
          Explore Technologies
        </button>

        <button className="px-6 py-3 rounded-xl font-medium text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all duration-200">
          Learn More
        </button>
      </div>
      <div className="mt-15">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="text-[#e83e8c]">Technologies</span>
        </h2>

        <p className="mt-2 text-sm md:text-base text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </div>
  );
};

export default Mainbar;
