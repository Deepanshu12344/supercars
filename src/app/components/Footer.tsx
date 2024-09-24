import React from 'react';
import { footerLink } from '../constants/footerLinks';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-slate-700 bg-gray-900 text-gray-400 py-12'>
      <div className='container mx-auto px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          <div>
          <p>&copy; {new Date().getFullYear()} Your Company.<br></br> All rights reserved.</p>
          </div>
          {footerLink.map((item, index) => (
            <div key={index}>
              <h2 className='text-lg font-semibold text-white mb-4'>{item.title}</h2>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='mb-2'>
                    <Link href={link.url}>
                      <Link href="/" className='hover:text-white transition-colors duration-300'>
                        {link.title}
                      </Link>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 border-t border-slate-700 pt-6 text-center'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
