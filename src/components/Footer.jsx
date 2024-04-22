import React from "react";

const Footer = () => {
  return (
    <footer
      className={`sm:px-12 min-[700px]:px-24 px-6 w-full flex items-center py-7 bottom-0 z-20 bg-primary`}
    >
      <div className="w-full flex max-[910px]:flex-col max-[910px]:gap-3 justify-between items-center max-w-7xl mx-auto">
        <p className="text-white text-[16px] max-[500px]:text-[15px] max-[450px]:flex max-[450px]:flex-col">
          Copyright &#169; 2024 Kunal Verma{" "}
          <span className="min-[451px]:inline-block hidden">|</span>{" "}
          <span className="max-[450px]:block text-center">
            All rights reserved
          </span>
        </p>
        <ul className="list-none flex flex-row lg:gap-10 gap-4 min-[700px]:gap-5 md:gap-7">
          <li
            className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1igogjqb_EkIirOHqfwFiJYCb4JoKZ4GA/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Resume
          </li>
          <li
            className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kunalverma9/", "_blank")
            }
          >
            LinkedIn
          </li>
          <li
            className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
            onClick={() =>
              window.open("https://github.com/kunal9oct", "_blank")
            }
          >
            GitHub
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
