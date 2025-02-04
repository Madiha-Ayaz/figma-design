import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCar, faChartSimple } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full h-[900px] bg-gray-300'>
      <div className='w-[286px] h-full bg-white'>
        <div className='w-[220px] h-full absolute relative left-[36px] top-[32px]'>
          <div className='w-[132px] h-[644px] gap-[42px]'>
            <ul>
              <p className='font-PlusJakartaSans font-bold text-[12px] leading-[15.12px]'>M A I N  M E N U</p>
              
              <button className='flex gap-[12px] py-2 px-4 hover:bg-[#3563e9] hover:text-white hover:font-bold hover:py-2 px-4 hover:rounded-[5px]'>
                <FontAwesomeIcon icon={faHouse} className='w-[24px] h-[24px]' />
                <p className='font-PlusJakartaSans font-normal text-[16px] leading-[24px]'>Dashboard</p>
              </button>

              <button className='flex gap-[12px] py-2 px-4 hover:bg-[#3563e9] hover:text-white hover:font-bold hover:py-2 px-4 hover:rounded-[5px]'>
                <FontAwesomeIcon icon={faCar} className='w-[24px] h-[24px]' />
                <p className='font-PlusJakartaSans font-normal text-[16px] leading-[24px]'>Car Rent</p>
              </button>

              <button className='flex gap-[12px] py-2 px-4 hover:bg-[#3563e9] hover:text-white hover:font-bold hover:py-2 px-4 hover:rounded-[5px]'>
                <FontAwesomeIcon icon={faChartSimple} className='w-[24px] h-[24px]' />
                <p className='font-PlusJakartaSans font-normal text-[16px] leading-[24px]'>Reports</p>
              </button>

              <button className='flex gap-[12px] py-2 px-4 hover:bg-[#3563e9] hover:text-white hover:font-bold hover:py-2 px-4 hover:rounded-[5px]'>
                <Image src="/images/empty-wallet-change.png" width={24} height={24} alt="folder" />
                <p className='font-PlusJakartaSans font-normal text-[16px] leading-[24px]'>Transactions</p>
              </button>

              <button className='flex gap-[12px] py-2 px-4 hover:bg-[#3563e9] hover:text-white hover:font-bold hover:py-2 px-4 hover:rounded-[5px]'>
                <FontAwesomeIcon icon={faHouse} className='w-[24px] h-[24px]' />
                <p className='font-PlusJakartaSans font-normal text-[16px] leading-[24px]'>Settings</p>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
