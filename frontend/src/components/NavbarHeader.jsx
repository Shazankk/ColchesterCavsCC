// src/components/NavbarHeader.jsx
import { useState } from "react";
import { Navbar } from "flowbite-react";
import { navLinks } from "../constants";

function NavbarHeader() {
  const [activeLink, setActiveLink] = useState("hero");
  return (
    <Navbar
      fluid={true}
      className="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 shadow-lg"
    >
      <Navbar.Brand href="/">
        <img
          src="https://s3-eu-west-1.amazonaws.com/p-c2gallery.ecb.co.uk/uploads/website_configuration/badge_image/1966/Cavaliers_Badge.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Colchester Cavaliers Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
          Colchester Cavaliers CC
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => (
          <Navbar.Link
            key={navLink.id}
            href={`#${navLink.id}`}
            active={activeLink === navLink.id}
            onClick={() => setActiveLink(navLink.id)}
            className={`text-gray-800 hover:text-gray-600 ${
              activeLink === navLink.id ? "font-bold" : ""
            }`}
          >
            {navLink.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHeader;
