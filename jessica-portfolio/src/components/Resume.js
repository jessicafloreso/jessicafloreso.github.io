import {ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Resume() {
  return (
    <section id="resume">
  <div className="container px-4 py-10 mx-auto">
    <div className="text-center mb-20">
      <ChipIcon className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
        My Resume
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Link to my current resume 
        <a href="https://docs.google.com/document/d/e/2PACX-1vSKB44tTJb2doWVoyjusUVdfye28qIM8bCL5-mURXvxT-UU8lndJmr6iqMG1yYCgqm2USAjqOl4YK-M/pub?embedded=true"
          target="_blank"
          rel="noopener noreferrer"> here</a>.
      </p>
      <div className="flex justify-center items-center">
        
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSKB44tTJb2doWVoyjusUVdfye28qIM8bCL5-mURXvxT-UU8lndJmr6iqMG1yYCgqm2USAjqOl4YK-M/pub?embedded=true"
          title="jessica-resume"
          className="w-full max-w-3xl h-96"  
        ></iframe>
        
        
      </div>
    </div>
  </div>
</section>

  );
}