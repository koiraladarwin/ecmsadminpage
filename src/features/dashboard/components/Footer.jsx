import React from 'react';
import { TbWorldWww } from 'react-icons/tb';

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="h-[5vh] bg-sidebar-bg py-4 text-passive-text flex flex-col md:flex-row text-center md:text-start justify-between px-6">
      <div>Copyright &copy; {currentYear} Business Solution Pvt.Ltd. All Rights reserved.</div>
      <div className='flex items-center gap-1 justify-center md:justify-start'>
        <TbWorldWww size={18} />
        <div><a href='https://www.ocsgroup.com' target='_blank'> www.ocsgroup.com
        </a></div> </div>
    </footer>
  );
}

export default Footer;
