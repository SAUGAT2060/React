import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold">📚 BookFinder</h3>
          <p className="text-sm text-gray-400">Built with ❤️ using React & Tailwind</p>
        </div>

        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="https://github.com/SAUGAT2060"
              className="hover:text-orange-500 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          
        </ul>
      </div>

      <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Saugat Rana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
