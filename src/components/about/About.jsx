import React from "react";
import simple from "../../assets/simple.jpg";
import Fact from "../fact/Fact";
import Resume from "../resume/Resume";
import Service from "../service/Service";
import Skills from "../skills/Skills";


const About = () => {
  return (
    <div className="w-full p-5 h-[calc(100vh-80px)] md:w-[calc(100%-105px)]  md:h-screen  flex justify-center	items-center md:py-16"
    >
      <div className="p-5 my-[150px] md:my-0 bg-[#212121] rounded-xl flex w-full h-full overflow-hidden overflow-y-auto md:p-2.5">
        <div className="container">
          <div className="py-4">
            <p className="text-[#888] text-center mb-2">My Intro</p>
            <h1 className="text-center font-bold text-white  mb-1 text-3xl">
              About <span className="text-[#ff651c]">Me</span>
            </h1>
            <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
              <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
              <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
            </div>
          </div>
          <div>
            <div className="columns-1 lg:columns-2 lg:flex lg:justify-center	lg:items-center">
              <div className="lg:w-2/5">
                <img
                  className="rounded-xl object-cover  "
                  src={simple}
                  alt=""
                />
              </div>
              <div className="py-2.5 lg:p-2.5 lg:w-3/5">
                <div className="mt-9">
                  <div>
                    <h5 className="text-white mb-4 text-lg">
                      Who Am <span className="text-[#ff651c]">I ?</span>
                    </h5>
                    <h3 className="text-white mb-4 text-lg">
                      I'm Alex Smith, A Visual{" "}
                      <span className="text-[#ff651c]"> UX/UI Designer </span>{" "}
                      And <span className="text-[#ff651c]">Web Developer</span>
                    </h3>
                    <p className="text-[#888] mb-4 text-sm">
                      I am a freelancer based in the United Kingdom and i have
                      been building noteworthy UX/UI designs and websites for
                      years, which comply with the latest design trends. I help
                      convert a vision and an idea into meaningful and useful
                      products. Having a sharp eye for product evolution helps
                      me prioritize tasks, iterate fast and deliver faster.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-3">
                      Personal
                      <span className="text-[#ff651c]"> Information</span>
                    </h3>
                    <div className="columns-1 lg:columns-2 lg:flex lg:justify-center	lg:items-center">
                      <div className="lg:w-1/2">
                        <ul>
                          <li className="text-[#888] mb-4">
                            First Name :{" "}
                            <span className="text-white">Alex</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Last Name :{" "}
                            <span className="text-white">Smith</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Address : <span className="text-white">Cairo</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            From : <span className="text-white">Egypt</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Age : <span className="text-white">25 Years</span>
                          </li>
                        </ul>
                      </div>
                      <div className="lg:w-1/2">
                        <ul>
                          <li className="text-[#888] mb-4">
                            E-Mail :{" "}
                            <span className="text-[#ff651c]">
                              ahmed@app.com
                            </span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Phone :{" "}
                            <span className="text-[#ff651c]">01113438665</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Skype :{" "}
                            <span className="text-white">steve.milner</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Languages :{" "}
                            <span className="text-white">Arabic,English</span>
                          </li>
                          <li className="text-[#888] mb-4">
                            Freelance :{" "}
                            <span className="text-white">Available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <a
                      href="https://github.com/devahmedkhaledsaleh"
                      className="bg-[#ff651c] p-2.5	 text-white rounded border-2 border-[#ff651c] border-solid transition ease-in-out duration-500 hover:bg-transparent"
                    >
                      Downlaod Cv
                      <i className="ml-2.5 fa fa-download"></i>
                    </a>
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
          <div>
            <div className="py-4">
              <p className="text-[#888] text-center mb-2">
                Check Out My Resume
              </p>
              <h1 className="text-center font-bold text-white  mb-2 text-3xl">
                My <span className="text-[#ff651c]">Resume</span>
              </h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
              </div>
            </div>
            <div className="columns-1 md:columns-2 md:flex md:justify-center	md:items-center">
              <div className="md:w-1/2">
                <h3 className="text-white text-center mb-4 text-lg">
                  Education
                </h3>
                <Resume
                  title="Bachelor of Science in Information Technology"
                  details="Cambridge University / 2004 - 2007"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
                <Resume
                  title="Master of Science in Information Technology"
                  details="Cambridge University / 2007 - 2009"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
                <Resume
                  title="Diploma In Web Design"
                  details="ambridge University / 2009 - 2010"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2">
                <h3 className="text-white text-center mb-4 text-lg">
                  Experience
                </h3>
                <Resume
                  title="Lead Ui/Ux Designer"
                  details="Google / 2016 - Current"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
                <Resume
                  title="Senior Ui/Ux Designer"
                  details="Adobe / 2013 - 2016"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
                <Resume
                  title="Junior Ui/Ux Designer"
                  details="Google / 2011 - 2013"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
                />
              </div>
            </div>
          </div>

          <div>
            <div className="py-4">
              <p className="text-[#888] text-center mb-2">
                My Level Of Knowledge In Some Tools
              </p>
              <h1 className="text-center font-bold text-white  mb-2 text-3xl">
                My <span className="text-[#ff651c]">Skills</span>
              </h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
              </div>
            </div>
            <div className="columns-1 lg:columns-2 lg:flex lg:justify-center	lg:items-center">
              <div className="lg:w-1/2">
                <h3 className="text-white text-center mb-4 text-lg">
                  Design <span className="text-[#ff651c]">Skills</span>
                </h3>

                <Skills type="design" />
              </div>
              <div className="py-2.5 lg:p-2.5 lg:w-1/2">
                <h3 className="text-white text-center mb-4 text-lg">
                  Coding <span className="text-[#ff651c]">Skills</span>
                </h3>

                <Skills type="coding" />
              </div>
            </div>
          </div>

          <div>
            <div className="py-4">
              <p className="text-[#888] text-center mb-2">
                Services I Offer To My Clients
              </p>
              <h1 className="text-center font-bold text-white  mb-2 text-3xl">
                My <span className="text-[#ff651c]">Services</span>
              </h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
              </div>
              <p className="text-[#888] text-center my-5">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown book.
              </p>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-4 md:flex md:justify-center md:flex-wrap	md:items-center">
              <div className="md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-laptop-code"
                  title="web design"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-palette"
                  title="Design"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-object-ungroup"
                  title="Product Design"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-object-ungroup"
                  title="UI/UX Design"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-radiation"
                  title="Animation"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-code"
                  title="Web Devolopment"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-arrows-alt"
                  title="Fully Responsive"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Service
                  icon="fa-dharmachakra"
                  title="Management"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
            </div>
          </div>

          <div>
            <div className="py-4">
              <p className="text-[#888] text-center mb-2 ">
                This Are My Strongest Sides
              </p>
              <h1 className="text-center font-bold text-white  mb-2 text-3xl">
                Fun <span className="text-[#ff651c]">Facts</span>
              </h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
              </div>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-4 md:flex-wrap md:flex md:justify-center	md:items-center">
              <div className="md:w-1/2 lg:w-1/4">
                <Fact number="10" description="Years Of Experience" />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Fact number="499" description="Happy Clients" />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Fact number="101" description="Completed Projects" />
              </div>
              <div className="py-2.5 md:p-2.5 md:w-1/2 lg:w-1/4">
                <Fact number="20" description="Awards Win" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
