import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import "./MainScreen.css";

function MainScreen() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const logout = () => {
    navigate("/Login");
  };
  const Todaylogout = () => {
    navigate("/signup");
  };

  return (
    <>
      .
      <nav className="container-fluid">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  /* Open menu icon SVG */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-20 sm:h-16 sm:w-16"
                  src="https://www.freeiconspng.com/thumbs/gaming-logo/gamer-logo-png-gaming-video-man-character-2.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block pt-3">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#about-section"
                    className="text-white hover:bg-gray-700 hover:text-violet rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-violet rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#contactus"
                    className="text-white hover:bg-gray-700 hover:text-violet rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {/* Your notifications icon SVG */}
              </button>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                    onClick={toggleUserMenu}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscUnq9iNwOXbKecBlbVmOM7pbyrxhj0isQA&usqp=CAU"
                      alt=""
                    />
                  </button>
                </div>
                {isUserMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a
                      href="#"
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#about-section"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#contactus"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5 my-5">
            <h1 className="font-mono font-weight-bold text-white ">
              <b className="entrance-animation">
                Better solutions for your games
              </b>
            </h1>
            <p className="font-bold fs-3 text-light-50 entrance-animation ">
              We are a team of talented developer designers making websites
              using frameworks and librearires
            </p>
            <Button
              className="m-1 entrance-animation"
              onClick={Todaylogout}
              variant="contained"
            >
              Join Us Today <ArrowForwardIcon className="m-1" />{" "}
            </Button>
            <Button
              className="m-1 entrance-animation"
              onClick={logout}
              variant="contained"
            >
              Login <ArrowForwardIcon className="m-1" />{" "}
            </Button>
          </div>
          <div className="col-md-6 image-container">
            <img
              width={500}
              src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5746.jpg"
              className="rounded float-right m-2 animated-image"
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* ABout  */}
      <div className="container entrance-animation" id="about-section">
        <div className="row">
          <div className="col-md-6 card-animation">
            <h1 className="py-5">
              <b className="text-white">About us</b>
            </h1>
            <div className="entrance-animation border border-danger rounded shadow p-3 m-2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="h-20  sm:h-16 sm:w-16"
                  src="https://www.freeiconspng.com/thumbs/gaming-logo/gamer-logo-png-gaming-video-man-character-2.png"
                  alt="Your Company"
                />
              </div>

              <p className="fs-3 font-weight-bold p-2">
                Learn more about our gaming website.{" "}
              
              </p>
              <p className="fs-3 font-weight-bold">
                Our team of dedicated gamers and developers are passionate about
                creating the best gaming experiences for our users.
              </p>
            </div>
          </div>

          <div className="col-md-6 py-5">
            <div className="container py-5 my-5">
              <img
                src="https://img.nerdburglars.net/wp-content/uploads/2023/06/nerdburglars_a_team_of_gamers_playing_in_an_esports_competition_22121067-e75b-4cc7-945d-3577979510f2.jpg"
                className="rounded float-right image-hover-animation"
                alt="..."
              />
            </div>
          </div>
        </div>

        {/* contact us */}

        <div id="contactus" className="container py-5 my-5 text-center ">
          <div className=" border-danger rounded shadow p-2">
            <h1 className="text-center">
              <b>Contact</b> <span className="text-secondary">Us</span>
            </h1>
            <TextField
              className="w-75 m-3"
              id="standard-basic"
              label="Mail"
              variant="standard"
            />
            <br />
            <TextField
              className="w-75 m-3"
              id="standard-basic"
              label="Name"
              variant="standard"
            />{" "}
            <br />
            <TextField
              className="w-75 m-3"
              id="standard-basic"
              label="Message"
              variant="standard"
            />{" "}
            <br />
            <button
              type="submit"
              className="btn text-dark fs-4 p-2 m-1 border border-danger rounded m-2 shadow"
            >
              <b>Submit</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
