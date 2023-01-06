
import React from 'react';
import render from 'react-dom';

const Footer = () => {
<footer className="bg-white shadow-md">
  <div className="container mx-auto px-6 py-8 flex flex-wrap items-center">
    <div className="w-full md:w-1/4 text-center md:text-left">
      <p className="text-gray-600 text-base font-medium">
        &copy; 2021 MyMediaList
      </p>
    </div>
    <div className="w-full md:w-1/4 text-center md:text-left">
      <h3 className="text-gray-600 text-xl font-bold">Features</h3>
      <ul className="mt-4 text-gray-600 text-sm font-medium">
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Create Your Media List
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Compare Your Media List
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Discover New Media
          </a>
        </li>
      </ul>
    </div>
    <div className="w-full md:w-1/4 text-center md:text-left">
      <h3 className="text-gray-600 text-xl font-bold">About</h3>
      <ul className="mt-4 text-gray-600 text-sm font-medium">
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Team
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Locations
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div className="w-full md:w-1/4 text-center md:text-left">
      <h3 className="text-gray-600 text-xl font-bold">Legal</h3>
      <ul className="mt-4 text-gray-600 text-sm font-medium">
        <li className="mb-2">
          <a href="#" className="hover:text-purple-600">
            Terms of Service
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
}

render(<Footer />, document.getElementById('footer'));

export default Footer;