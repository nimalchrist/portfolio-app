import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import "../styles/Home.css";
import { useState, useEffect } from "react";

export default function NavbarHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleSetIsMobile() {
      setIsMobile(window.innerWidth <= 767);
    }
    function handleSetIsTab() {
      setIsTab(window.innerWidth >= 768 && window.innerWidth <= 991);
    }
    function handleSetIsScroll() {
      setIsScrolled(window.scrollY > 0); // Check if scrolled down from the top
    }
    // Add event listener for window resize
    window.addEventListener("resize", handleSetIsMobile);
    window.addEventListener("resize", handleSetIsTab);
    window.addEventListener("scroll", handleSetIsScroll);

    // Initial check on component mount
    handleSetIsMobile();
    handleSetIsTab();
    handleSetIsScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleSetIsMobile);
      window.removeEventListener("resize", handleSetIsTab);
      window.removeEventListener("scroll", handleSetIsScroll);
    };
  }, []);
  return (
    <Navbar
      bg={isScrolled || isMobile || isTab ? "light" : "transparent"}
      variant="light"
      expand="lg"
      fixed="top"
      className={`navbar-container ${
        isScrolled || isMobile || isTab ? "scrolled" : ""
      }`}
    >
      {/* navbar branding */}
      <Navbar.Brand href="#home" className="navbar-brand">
        <img
          src={require("../assets/images/brand-logo.jpg")}
          alt="Brand Logo"
          width={145}
          height={40}
        />
      </Navbar.Brand>
      {/* navbar hamburger */}
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="hamburger-menu"
      />
      {/* navbar items */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-item-container">
          <NavItem className="navbar-item ml-5 mr-4">
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem className="navbar-item mx-4">
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem className="navbar-item mx-4">
            <NavLink href="#resume">Resume</NavLink>
          </NavItem>
          <NavItem className="navbar-item mx-4">
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem className="navbar-item mx-4">
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem className="navbar-item mx-4">
            <a
              href="https://drive.google.com/file/d/1MKfxXS-ay45cp2taLY782J8_XLsD72_Y/view?usp=sharing"
              download="Nimal resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="cv-button"
            >
              Download CV
            </a>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
