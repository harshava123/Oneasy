import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDashboardLine, RiRobot2Line, RiFileEditLine } from 'react-icons/ri';
import { MdOutlineSubscriptions, MdOutlineArticle } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsBuilding } from 'react-icons/bs';
import { TbCopy } from 'react-icons/tb';
import { IoLogOutOutline } from 'react-icons/io5';
import { useLogoutModal } from '../common/LogoutModalContext';
import logo from '../../assets/logo.png';

function Sidebar() {
  const location = useLocation();
  const isRegistrationsActive = location.pathname === '/registrations' || 
    location.pathname === '/company-categories' || 
    location.pathname.startsWith('/company/');
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { setShowLogoutModal } = useLogoutModal();
  const menuItems = [
     { icon: <RiDashboardLine />, text: 'Dashboard', path: '/client' },
     { icon: <HiOutlineClipboardList />, text: 'Registrations', path: '/registrations' },
     { icon: <MdOutlineArticle />, text: 'Compliance', path: '/compliance' },
    { icon: <RiRobot2Line />, text: 'AI Agent', path: '/ai-agent' },
    { icon: <TbCopy />, text: 'Resources', path: '/resources' },
    { icon: <RiFileEditLine />, text: 'My Documents', path: '/documents' },
    { icon: <MdOutlineSubscriptions />, text: 'Subscriptions', path: '/subscriptions' },
    { icon: <BsBuilding />, text: 'Organization', path: '/organization' },
  ];

  return (
    <div className="w-[240px] h-screen bg-white fixed left-0 top-0 flex flex-col">
      <div className="px-6 pt-4 pb-4 flex justify-center items-center">
        <img src={logo} alt="OnEasy Logo" className="h-10 w-auto" />
      </div>
      
      <nav className="flex-1 px-4 pt-3 space-y-2.5">
        {menuItems.map((item, index) => (
          <Link 
            to={item.path} 
            key={index} 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                   (item.path === '/registrations' ? isRegistrationsActive : location.pathname === item.path)
                ? 'bg-[#01334C] text-white' 
                 : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="w-5 flex justify-center">{React.cloneElement(item.icon, {
              className: `text-base ${location.pathname === item.path ? 'text-white' : 'text-gray-400'}`
            })}</span>
            <span className="text-[13px]">{item.text}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-100">
        <div className="p-4">
          <div 
            className="relative group"
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <div className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-[#01334C] rounded-full flex items-center justify-center text-white text-xs">
                A
              </div>
              <div>
                <div className="text-[11px] text-gray-500">Welcome 👋</div>
                <div className="text-[13px] text-gray-700">Aleena</div>
              </div>
              <span className="text-base text-gray-400 ml-auto transform transition-transform duration-200 group-hover:rotate-90">›</span>
            </div>
            
            {isProfileOpen && (
              <div className="absolute bottom-full left-0 mb-1 w-full bg-white rounded-lg shadow-lg py-2">
                <button 
                  onClick={() => {
                    setIsProfileOpen(false);
                    setShowLogoutModal(true);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
                >
                  <IoLogOutOutline className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
