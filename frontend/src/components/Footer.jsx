import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">JobPortal</h2>
          <p className="text-sm">© 2024 JobPortal. All rights reserved.</p>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42c-.87.39-1.81.65-2.8.77 1.01-.61 1.79-1.58 2.16-2.73-.95.57-2 .98-3.13 1.2A5.34 5.34 0 0016.57 5c-2.97 0-5.38 2.42-5.38 5.4 0 .42.04.84.13 1.24-4.47-.22-8.43-2.37-11.08-5.62-.46.8-.72 1.73-.72 2.72 0 1.88.96 3.54 2.42 4.51-.89-.03-1.73-.27-2.46-.68v.07c0 2.62 1.86 4.81 4.33 5.31-.45.12-.92.19-1.41.19-.34 0-.68-.03-1-.1.68 2.13 2.66 3.69 5 3.73A10.74 10.74 0 010 19.28a15.2 15.2 0 008.27 2.43c9.93 0 15.37-8.23 15.37-15.37 0-.23 0-.45-.02-.67a10.93 10.93 0 002.68-2.78z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zM9.68 7.2H8.15a.5.5 0 00-.5.5v8.6c0 .27.22.5.5.5h1.53a.5.5 0 00.5-.5V7.7a.5.5 0 00-.5-.5zm3.76 0h-1.53a.5.5 0 00-.5.5v8.6c0 .27.22.5.5.5h1.53a.5.5 0 00.5-.5V7.7a.5.5 0 00-.5-.5zm3.76 0h-1.53a.5.5 0 00-.5.5v8.6c0 .27.22.5.5.5h1.53a.5.5 0 00.5-.5V7.7a.5.5 0 00-.5-.5z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.947 8.305h-1.745v-.45c0-.716.287-1.073 1.004-1.073h.713v-1.287h-1.103c-1.665 0-2.61.957-2.61 2.717v.518H16.73V9.6h.475v7.095h2.193V9.6h1.513l.036-1.295z" />
              <circle cx="18" cy="16.05" r="2.35" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
