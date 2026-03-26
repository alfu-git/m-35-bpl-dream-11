import React from "react";
import FooterLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="pb-18">
      <div className="mb-15 flex justify-center">
        <img src={FooterLogo} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 text-base-100">
        <div>
          <h6 className="mb-4 text-lg font-semibold">About Us</h6>
          <p className="font-extralight">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-center">
          <h6 className="mb-4 text-lg font-semibold">Quick Links</h6>
          <ul className="list-disc ml-4 sm:ml-0">
            <li>
              <a href="/" className="font-extralight">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="font-extralight">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="font-extralight">
                About
              </a>
            </li>
            <li>
              <a href="/" className="font-extralight">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-lg font-semibold">Subscribe</h6>
          <p className="mb-5 font-extralight">
            Subscribe to our newsletter for the latest updates.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 pl-5 text-[#131313] bg-base-100 border border-[#131313]/15 rounded-l-md placeholder:text-[#888888]"
            />
            <button
              type="submit"
              className="inline-block py-2 px-3 text-[#131313] bg-linear-to-r from-[#F6C750] to-[#DF82AE] rounded-l-none rounded-r-md font-bold cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
