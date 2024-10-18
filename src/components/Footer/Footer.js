import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="container p-4">
        <section className="mb-4">
          <a href="#" className="mr-3">
            <FaTwitter />
          </a>
          <a href="#" className="mr-3">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </section>
        <div className="text-center p-3">
          © 2024 CookDuo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
