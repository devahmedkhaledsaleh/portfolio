import React from "react";

const Contact = () => {
  return (
    <div className="w-full p-5 h-[calc(100vh-80px)] md:w-[calc(100%-105px)]  md:h-screen  flex justify-center	items-center md:py-16">
      <div className="p-5 my-[150px] md:my-0 bg-[#212121] rounded-xl flex w-full h-full overflow-hidden overflow-y-auto md:p-2.5">
        <div className="container">
          <div className="py-4">
            <p className="text-[#888] text-center mb-2">
              Feel Free To Contact Me Anytimes
            </p>
            <h1 className="text-center font-bold text-white  mb-2 text-3xl">
              My <span className="text-[#ff651c]">Contact</span>
            </h1>
            <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
              <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
              <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
            </div>
          </div>

          <div className="columns-1 lg:columns-2 lg:flex lg:justify-center lg:flex-wrap	">
            <div className="lg:w-1/2">
              <h4 className="text-lg	text-white mb-6 ">Contact Me</h4>
              <form>
                <div className="columns-1 md:columns-2 md:flex md:justify-center md:flex-wrap	md:items-center">
                  <div className="mb-6 md:w-1/2">
                    <input
                      type="text"
                      placeholder="Name"
                      name=""
                      id=""
                      className="w-full md:w-11/12 rounded p-2.5 bg-[#212121] text-[#777] shadow-[0_0_10px_rgba(0,0,0,0.85)] border-0"
                    />
                  </div>
                  <div className="mb-6 md:w-1/2 md:text-left">
                    <input
                      type="text"
                      placeholder="Email"
                      name=""
                      id=""
                      className="w-full md:w-11/12 	 rounded p-2.5 bg-[#212121] text-[#777] shadow-[0_0_10px_rgba(0,0,0,0.85)] border-0"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    name=""
                    id=""
                    className="w-full rounded p-2.5 bg-[#212121] text-[#777] shadow-[0_0_10px_rgba(0,0,0,0.85)] border-0"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="w-full h-32 rounded p-2.5 bg-[#212121] text-[#777] shadow-[0_0_10px_rgba(0,0,0,0.85)] border-0"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#ff651c] p-2.5	 text-white rounded border-2 border-[#ff651c] border-solid transition ease-in-out duration-500 hover:bg-transparent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="py-2.5 md:py-0 md:pl-16 lg:w-1/2">
              <div className="mb-3">
                <h4 className="text-lg	text-white mt-6 md:mt-0">Contact Info</h4>
                <p className="text-[#888]  mb-2">
                  Always available for freelance work if the right project comes
                  along, Feel free to contact me!
                </p>
              </div>
              <ul>
                <li className="flex items-center mb-4 ">
                  <span>
                    <i className="fas fa-user-alt text-2xl text-[#ff651c]"></i>
                  </span>
                  <div className="ml-12	">
                    <h6 className="text-white">Name</h6>
                    <p className="text-[#ff651c]">Alex Smith</p>
                  </div>
                </li>

                <li className="flex items-center  mb-4">
                  <span>
                    <i className="fas fa-map-pin text-2xl text-[#ff651c]"></i>
                  </span>
                  <div className="ml-12	">
                    <h6 className="text-white">Location</h6>
                    <p className="text-[#ff651c]">
                      4155 Mann Island, Liverpool, United Kingdom.
                    </p>
                  </div>
                </li>

                <li className="flex items-center mb-4 ">
                  <span>
                    <i className="fas fa-phone-alt text-2xl text-[#ff651c]"></i>
                  </span>
                  <div className="ml-12	">
                    <h6 className="text-white">Call Me</h6>
                    <p className="text-[#ff651c]">+44 1632 967704</p>
                  </div>
                </li>

                <li className="flex items-center ">
                  <span>
                    <i className="fas fa-envelope text-2xl text-[#ff651c]"></i>
                  </span>
                  <div className="ml-12	">
                    <h6 className="text-white">Email Me</h6>
                    <p className="text-[#ff651c]">Alex@example.com</p>
                  </div>
                </li>
              </ul>
              <ul className="flex justify-start	items-center mt-5	">
                <li className="group">
                  <a href="https://www.linkedin.com/in/ahmedsaleh96/">
                    <span className="text-[#888] mx-2.5 text-3xl transition ease-in-out duration-500 group-hover:text-[#ff651c]">
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li className="group">
                  <a href="https://github.com/devahmedkhaledsaleh">
                    <span className="text-[#888] mx-2.5 text-3xl transition ease-in-out duration-500 group-hover:text-[#ff651c]">
                      <i className="fab fa-github-square"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
