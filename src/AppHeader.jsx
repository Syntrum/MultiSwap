import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

// import { ReactComponent as LineSvg } from 'assets/svg/Line.svg';

import Logo from './common/Logo';
import useToggle from './hooks/useToggle';

const AppHeader = ({
  ismd,
  headerLinks,
  toggleSidebar,
  isFullSidebarWidth,
  isSidebar,
}) => {
  const [isDropdown, toggleDropdown] = useToggle();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const onScroll = (event) => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 70) {
        setNavShow(false);
      } else {
        setNavShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={clsx(
        'sticky px-8 pb-2 top-0 z-10 transition-transform duration-500',
        `${navShow ? 'translate-y-0' : '-translate-y-full ease-out'}`
      )}
    >
      {ismd ? (
        <div className={clsx('flex items-center gap-4 cursor-pointer')}>
          {/* <button onClick={toggleSidebar}>
            <span>{isSidebar ? <ToggleSvg /> : <ToggleRightSvg />}</span>
          </button> */}

          <div className='flex items-center gap-4 flex-1'>{headerLinks}</div>
          <div className='flex font-display text-[14px] text-[#FFF] font-[700] items-center gap-4 justify-center pt-2'>
            <button
              //   onClick={handleSidebarToggle}
              className='flex items-center space-x-2 bg-paper py-1.5 px-3 rounded-full'
            >
              {/* <WalletSvg /> */}
              Wallet Balance
            </button>
            {/* <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} /> */}

            {/* <button className='flex items-center space-x-2 bg-paper p-2 rounded-full'>
              <Modal />
            </button>
            <button className='flex items-center space-x-2 bg-paper px-2 py-1 rounded-full'>
              <PolygonSvg />
              <ChevronSvg />
            </button> */}
          </div>
        </div>
      ) : (
        <div
          className={clsx('flex items-center justify-between relative py-2')}
        >
          {/* <HamburgerMenuSvg
            className='cursor-pointer'
            onClick={toggleSidebar}
          />
          <Logo />
          <DotSvg className='cursor-pointer' onClick={toggleDropdown} /> */}
          <div
            className={clsx(
              'absolute left-0 right-0 -top-1 bg-main font-display text-[14px] font-[700]',
              isDropdown ? 'translate-y-0' : '-translate-y-full'
            )}
          >
            <span
              className='cursor-pointer font-[900] text-[18px]'
              onClick={toggleDropdown}
            >
              X
            </span>
            <button
              //   onClick={handleSidebarToggle}
              className='flex items-center font-display text-[14px] text-[#FFF] font-[700] space-x-2 bg-paper p-2 rounded-full mt-4 w-full'
            >
              {/* <WalletSvg /> */}
              Wallet Balance
            </button>
            {/* <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} /> */}

            {/* <button className='flex items-center font-display text-[14px] text-[#FFF] font-[700] space-x-2 bg-paper p-2 rounded-full my-4 w-full'>
              <Modal />
            </button>
            <button className='flex items-center justify-between space-x-2 bg-paper p-2 rounded-full w-full mb-4'>
              <PolygonSvg />
              <ChevronSvg />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;