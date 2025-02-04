"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: ''
      });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      
      
      
    
  return (
    <div className="w-[1440px] h-[2276px] bg-gray-300 p-[30px] flex  ">
      
    
    
      <div className="relative  flex  sm:block md:hidden">
      <div className="w-[400px] h-[460px] absolute top-[10px] left-[30px] rounded-[10px] bg-white sm:hidden md:block">
        <div className="w-[444px] h-[76px] relative absolute left-[24px] top-[24px]">
        <p className=' w-[200px] h-24px] font-bold  text-[20px] leading-[30px] font-PlusJakartaSans '>Rental Summary</p>
<p className=' w-[444px] h-[48px] font-normal font-PlusJakartaSans text-gray-600 '>Prices may change
 depending on the length of <p>the rental and theprice of your rental car.</p> </p>
<div className='flex  '>
<Image
  src="/images/View 1.png"
  width={120}
  height={120}
  alt="car select pic"
  className='relative absolute left-[10px] top-[30px]'/>
  <div className="w-[220px] h-[72px]   relative absolute left-[20px] top-[30px]">
  <p className="font-PlusJakartaSans font-bold text-[28px]">Nissan GT - R</p>


<div className="flex space-x-2">
    <FaStar className="text-yellow-400" />
    <FaStar className="text-yellow-400" />
    <FaStar className="text-yellow-400" />
   <FaStar className="text-yellow-400" /> {/* Example of an inactive star */}
   <svg width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="blue" strokeWidth="1" 
   xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" /></svg><p className=
    'whitespace-nowrap text-gray-400'>440+ Reviewer</p>
</div>
</div>
</div>
<div className='w-[444px] h-[20px] relative absolute  top-[70px] left-[20px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex '>Subtotal <p className='
 relative absolute text-black left-[230px]'>$80.00</p></p>
</div>
<div className='w-[444px] h-[20px] relative absolute  top-[90px] left-[20px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex '>Tax <p className=' 
relative absolute text-black left-[270px]'>$0</p></p>
</div>
<div className='w-[300px] h-[15px] relative absolute  top-[90px] left-[30px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex  bg-gray-200 w-[444px] h-[44px]
 relative absolute  top-[20px]'>Apply promo code<p className=' relative absolute text-black left-[90px]'>Apply now</p></p>
</div>

</div>
<div className='w-[300px] h-[15px] relative absolute  top-[300px] left-[30px] '>
  <h1 className='relative absolute  top-[20px]'>Total Rental Price</h1>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[14px] flex  w-[444px] h-[44px] relative absolute 
 top-[20px]'>
Overall price and includes rental discount<p className=' relative absolute text-black left-[30px] font-bold text-[24px]'>$80.00</p></p>
</div>.
</div>
</div>  
<div className='flex sm:flex-col md:flex-row xs:flex-col'>
<div className="w-[852px] h-[2176px]  ">
        <div className="w-[852px] h-[336px] sm:w-[252px] md:w-[852px] bg-white">  
            <div className="flex">
               <div className="w-[192px] h-[48px]    relative absolute top-[24px]  left-[24px]">
                <p className="w-[192px] h-[24px] font-PlusJakartaSans font-bold text-[20px] 
                leading-[30px]">Billing Info</p>
                <p className="w-[192px] h-[20px] font-PlusJakartaSans font-medium text-[14px] 
                leading-[30px] text-gray-300 ">Please enter your billing info</p>
               </div>
               <div className='w-[72px] h-[20px]   relative absolute top-[52px]  left-[576px]
                font-PlusJakartaSans font-medium text-[14px] 
               leading-[21px] text-gray-400'>Step 1 of 4</div>
            </div>
            <form className="rounded  w-[800px] space-y-6  relative absolute top-[104px] left-[24px]">
      

        {/* Row 1: Name & Phone */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans  mb-1" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-gray-100  rounded focus:outline-none focus:ring-2
               focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans " htmlFor="phone">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Row 2: Address & City */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700  mb-1 font-semibold text-[16px] font-PlusJakartaSans" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full  bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
            Town / City :
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your city"
            />
          </div>
        </div>
      </form>
        </div>
        
        <div className="w-[852px] h-[664px] bg-white mt-[10px] ">
        <div className="flex">
              <div className="w-[192px] h-[48px]    relative absolute top-[24px]  left-[24px]">
               <p className="w-[192px] h-[24px] font-PlusJakartaSans font-bold text-[20px] leading-[30px]">Rental Info</p>
               <p className="w-[192px] h-[20px] font-PlusJakartaSans font-medium text-[14px] leading-[30px] 
               text-gray-300 ">Please select your rental date</p>
              </div>
              <div className='w-[72px] h-[20px]   relative absolute top-[52px]  left-[576px] font-PlusJakartaSans
               font-medium text-[14px] leading-[21px] text-gray-400'>Step 2 of 4</div>
        </div>
        <div className='flex mt-[10px] relative absolute top-[104px]  left-[24px]'>
  <Image
    src="/images/mark.png"
    width={16}
    height={16}
    alt="logo"
   
  />
  <p className="font-bold text-[16px] ml-[10px]">Pick-Up</p>
</div>
<form className="rounded  w-[800px] space-y-6  relative absolute top-[104px] left-[24px]">
<div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700  mb-1 font-semibold text-[16px] font-PlusJakartaSans" htmlFor="address">
            Locations
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full  bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
            Date :
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your city"
            />
          </div>
        </div>
        </form>
        <form className='rounded  w-[401px] space-y-6  relative absolute top-[104px] left-[24px]'>
        <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
     Time :
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2
         focus:ring-blue-500"
        placeholder="Enter your city"
      />
  </form>
      
       
        <div className='flex mt-[10px] relative absolute top-[104px]  left-[24px] mt-[30px]'>
  <Image
    src="/images/mark.png"
    width={16}
    height={16}
    alt="logo"
   
  />
  <p className="font-bold text-[16px] ml-[10px]">Drop-Off</p>
</div>
        <form className="rounded  w-[800px] space-y-6  relative absolute top-[104px] left-[24px]">
<div className="flex gap-4 mt-[20px]">
          <div className="flex-1">
            <label className="block text-gray-700  mb-1 font-semibold text-[16px] font-PlusJakartaSans" htmlFor="address">
            Locations
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full  bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            />
    
    </div>
          <div className="flex-1 ">
            <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
            Date :
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
              placeholder="Enter your city"
            />
          </div>
        </div>
        </form>
        <form className='rounded  w-[401px] space-y-6  relative absolute top-[104px] left-[24px]'>
        <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
     Time :
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
        focus:ring-blue-500"
        placeholder="Enter your city"
      />
  </form>
  </div>






        <div className="w-[852px] h-[596px] bg-white mt-[10px] ">
        <div className="flex">
              <div className="w-[192px] h-[48px]    relative absolute top-[24px]  left-[24px]">
               <p className="w-[192px] h-[24px] font-PlusJakartaSans font-bold text-[20px] leading-[30px]">
                Rental Info</p>
               <p className="w-[192px] h-[20px] font-PlusJakartaSans font-medium text-[14px] leading-[30px] 
               text-gray-300 ">Please select your rental </p> 
              </div>
              <div className='w-[72px] h-[20px]   relative absolute top-[52px]  left-[576px] font-PlusJakartaSans 
              font-medium text-[14px] leading-[21px] text-gray-400'>Step 1 of 4</div>
        </div>
        <div className='w-[804px] h-[308px] bg-gray-200  relative absolute top-[50px]  left-[24px]'>
       
        <div className='flex  relative absolute top-[24px]  left-[24px] mt-[30px]'>
        <div className='flex'>
  <Image
    src="/images/mark.png"
    width={16}
    height={16}
    alt="logo"
   
  />
  <p className="font-bold text-[16px] ml-[10px]">Credit Card</p>
</div>
<Image
  src="/images/Visa.png"
  width={92}
  height={20}
  alt="logo"
  className='relative absolute left-[500px]'
  />
 </div>
 <form className="rounded  w-[600px] space-y-6  relative absolute top-[76px] left-[24px]">
     
     {/* Row 1: Name & Phone */}
     <div className="flex gap-4">
       <div className="flex-1">
         <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans  mb-1" htmlFor="name">
           Name:
         </label>
         <input
           type="text"
           id="name"
           name="name"
           value={formData.name}
           onChange={handleChange}
           className="w-full p-2 border border-gray-300 bg-gray-100  rounded focus:outline-none focus:ring-2 
           focus:ring-blue-500"
           placeholder="Enter your name"
         />
       </div>
       <div className="flex-1">
         <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans " htmlFor="phone">
           Phone Number:
         </label>
         <input
           type="tel"
           id="phone"
           name="phone"
           value={formData.phone}
           onChange={handleChange}
           className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 
           focus:ring-blue-500"
           placeholder="Enter your phone number"
         />
       </div>
     </div>
     {/* Row 2: Address & City */}
     <div className="flex gap-4">
       <div className="flex-1">
         <label className="block text-gray-700  mb-1 font-semibold text-[16px] font-PlusJakartaSans" htmlFor="address">
           Address:
         </label>
         <input
           type="text"
           id="address"
           name="address"
           value={formData.address}
           onChange={handleChange}
           className="w-full  bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none 
           focus:ring-2 focus:ring-blue-500"
           placeholder="Enter your address"
         />
       </div>
       <div className="flex-1">
         <label className="block text-gray-700 font-semibold text-[16px] font-PlusJakartaSans mb-1" htmlFor="city">
         Town / City :
         </label>
         <input
           type="text"
           id="city"
           name="city"
           value={formData.city}
           onChange={handleChange}
           className="w-full bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 
           focus:ring-blue-500"
           placeholder="Enter your city"
         />
       </div>
     </div>
   </form>

        </div>
        <div className='relative absolute  top-[70px] '>
        <div className='w-[804px] h-[56px]  bg-gray-300  relative absolute    left-[24px]'>
        <div className=' flex'>
        <Image 
          src="/images/ic-actions-select.png"
          width={24}
          height={24}
          alt="poll"
          className=' ml-[10px]'
          />
          <div> <p className='w-[52px] h-[24px]  font-bold   text-[16px]  leading-[24px] '>PayPal</p></div>
          <Image 
          src="/images/PayPal (1).png"
          width={100}
          height={24}
          alt="paypal"
          className='relative absolute   left-[610px]   top-[20px]'
          />
          </div>
        </div>
        <div className='w-[804px] h-[56px]  bg-gray-300  relative absolute   left-[24px]   top-[20px]
        '>
          <div className='flex'>
          <Image 
          src="/images/ic-actions-select.png"
          width={24}
          height={24}
          alt="poll"
           className=' ml-[10px]'
          />
        <div> <p className='w-[52px] h-[24px]  font-bold   text-[16px]  leading-[24px] '>PayPal</p></div>
        <Image 
  src="/images/Bitcoin (2).png"
  width={100}
  height={24}
  alt="paypal"
  className='relative absolute   left-[610px]   top-[20px]'
  />
</div>
</div>
</div>

        </div>

        <div className="w-[852px] h-[484px] bg-white mt-[10px] ">
        <div className="flex">
    <div className="w-[192px] h-[48px]    relative absolute top-[24px]  left-[24px]">
     <p className="w-[192px] h-[24px] font-PlusJakartaSans font-bold text-[20px] leading-[30px]">Confirmation</p>
     <p className="w-[192px] h-[20px] font-PlusJakartaSans font-medium text-[14px] leading-[30px] text-gray-300 
     whitespace-nowrap ">We are getting to the end. Just few clicks and your rental is ready!</p>
    </div>
    <div className='w-[72px] h-[20px]   relative absolute top-[52px]  left-[576px] font-PlusJakartaSans font-medium
     text-[14px] 
    leading-[21px] text-gray-400'>Step 4 of 4</div>
 </div>
 <div className='w-[804px] h-[56px]  bg-gray-300  relative absolute  top-[119px]   left-[24px]'>
        <div className=' flex'>
        <label className="flex items-center">
  <input type="checkbox" className="mr-2" />
  I agree to receive marketing and newsletter emails. No spam, promised!
</label>

          </div>
        </div>
        <div className='w-[804px] h-[56px]  bg-gray-300  relative absolute   left-[24px]   
        '>
          <div className='flex'>
          <label className="flex items-center">
  <input type="checkbox" className="mr-2" />
  I agree to receive marketing and newsletter emails. No spam, promised!
</label>

</div>
</div>
<div className='w-[34px] h-[44px]  flex   relative absolute   left-[24px]   top-[90px]'>
<button className='w-[156px] h-[44px] radius-[4px] px-[20px] gap-[8px] text-white bg-blue-500 
whitespace-nowrap rounded-[10px] '>
  <Link href=" /carDetail">Rent Now</Link> </button>
</div>
<Image 
src="/images/Safe Data.png"
width={548}
height={100}
alt="confirmation"
className=' relative absolute   left-[24px]   top-[100px]'
/>

        </div>







        
      </div>
      <div>
      </div>
      <div className="relative  flex">
      <div className="w-[400px] h-[460px] absolute top-[10px] left-[30px] rounded-[10px] bg-white sm:hidden md:block">
        <div className="w-[444px] h-[76px] relative absolute left-[24px] top-[24px]">
        <p className=' w-[200px] h-24px] font-bold  text-[20px] leading-[30px] font-PlusJakartaSans '>Rental Summary</p>
<p className=' w-[444px] h-[48px] font-normal font-PlusJakartaSans text-gray-600 '>Prices may change
 depending on the length of <p>the rental and theprice of your rental car.</p> </p>
<div className='flex  '>
<Image
  src="/images/View 1.png"
  width={120}
  height={120}
  alt="car select pic"
  className='relative absolute left-[10px] top-[30px]'/>
  <div className="w-[220px] h-[72px]   relative absolute left-[20px] top-[30px]">
  <p className="font-PlusJakartaSans font-bold text-[28px]">Nissan GT - R</p>


<div className="flex space-x-2">
    <FaStar className="text-yellow-400" />
    <FaStar className="text-yellow-400" />
    <FaStar className="text-yellow-400" />
   <FaStar className="text-yellow-400" /> {/* Example of an inactive star */}
   <svg width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="blue" strokeWidth="1" 
   xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" /></svg><p className=
    'whitespace-nowrap text-gray-400'>440+ Reviewer</p>
</div>
</div>
</div>
<div className='w-[444px] h-[20px] relative absolute  top-[70px] left-[20px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex '>Subtotal <p className='
 relative absolute text-black left-[230px]'>$80.00</p></p>
</div>
<div className='w-[444px] h-[20px] relative absolute  top-[90px] left-[20px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex '>Tax <p className=' 
relative absolute text-black left-[270px]'>$0</p></p>
</div>
<div className='w-[300px] h-[15px] relative absolute  top-[90px] left-[30px] flex'>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[16px] flex  bg-gray-200 w-[444px] h-[44px]
 relative absolute  top-[20px]'>Apply promo code<p className=' relative absolute text-black left-[90px]'>Apply now</p></p>
</div>

</div>
<div className='w-[300px] h-[15px] relative absolute  top-[300px] left-[30px] '>
  <h1 className='relative absolute  top-[20px]'>Total Rental Price</h1>
<p className='text-gray-400 font-PlusJakartaSans font-normal text-[14px] flex  w-[444px] h-[44px] relative absolute 
 top-[20px]'>
Overall price and includes rental discount<p className=' relative absolute text-black left-[30px] font-bold text-[24px]'>$80.00</p></p>
</div>.
</div>


</div>




</div>

    </div>
  );
};

export default Page;
