'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    // Example search logic
    const pages = {
      home: '/',
      detail: '/carDetail',
      form: '/RentalInfo',
      categories: '/categories',
    };

    const page = pages[searchQuery.toLowerCase()];
    if (page) {
      router.push(page);
    } else {
      alert('Page not found');
    }
  };

  return (
    <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>

        <form onSubmit={handleSearch} className="input relative w-full md:w-auto">
          <Image src='/images/search-normal.png' alt='Search Icon' width={24} height={24} className='absolute top-1/2 left-3 transform -translate-y-1/2' />
          
          <input 
            type="text" 
            placeholder="Search headings..." 
            className='border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit">
            <Image src='/images/filter.png' alt='Filter Icon' width={24} height={24} className='absolute top-1/2 right-3 transform -translate-y-1/2' />
          </button>
        </form>
      </div>

      <div className="icons mt-4 md:mt-0">
        <Image src='/images/Profil & Notification.png' alt='Profile and Notification' width={236} height={44} />
      </div>
    </div>
  );
}
