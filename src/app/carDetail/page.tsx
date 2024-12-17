'use client';
import VolumeControl from '@/components/VolumeControl'; 
import { useState, ChangeEvent  } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';



const Page = () => {
  const [checkedItems, setCheckedItems] = useState({
    sport: false,
    suv: false,
    mpv: true,
    sedan: true,
    coupe: true,
    hatchback: true,
  });

  // Correctly typed event
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };
  const [selectedImage, setSelectedImage] = useState<string>('/images/Ads 2.png');

const handleClick = (image: string) => {
  setSelectedImage(image);
};

const [expanded, setExpanded] = useState(false);


  return (
    <div className="flex">
      {/* Left Side */}
      <div className="w-[360px] h-[2016px] bg-white">
        <div className="flex flex-col w-[360px] h-[1600px] bg-white font-PlusJakartaSans space-y-4 p-6">
        <p className=" font-PlusJakartaSans font-semibold  text-[12px] text-gray-400 leading-[15.12px]">TYPE</p>
          <label>
            <input
              type="checkbox"
              name="sport"
              checked={checkedItems.sport}
              onChange={handleCheckboxChange}
            />
            Sport (10)
          </label>

          <label>
            <input
              type="checkbox"
              name="suv"
              checked={checkedItems.suv}
              onChange={handleCheckboxChange}
            />
            SUV (12)
          </label>

          <label>
            <input
              type="checkbox"
              name="mpv"
              checked={checkedItems.mpv}
              onChange={handleCheckboxChange}
            />
            MPV (16)
          </label>

          <label>
            <input
              type="checkbox"
              name="sedan"
              checked={checkedItems.sedan}
              onChange={handleCheckboxChange}
            />
            Sedan (20)
          </label>

          <label>
            <input
              type="checkbox"
              name="coupe"
              checked={checkedItems.coupe}
              onChange={handleCheckboxChange}
            />
            Coupe (14)
          </label>

          <label>
            <input
              type="checkbox"
              name="hatchback"
              checked={checkedItems.hatchback}
              onChange={handleCheckboxChange}
            />
            Hatchback (14)
          </label>
          <div className='w-[176px] h-[240px] space-y-4 flex flex-col font-PlusJakartaSans  p-6'>
        <p className=" font-PlusJakartaSans font-semibold  text-[12px] text-gray-400 leading-[15.12px]">C A P A C I T Y</p>
        <label>
   <input
     type="checkbox"
     name="person 30"
     checked={checkedItems.sport}
     onChange={handleCheckboxChange}
   />
 2 Person  (10)
 </label>
       
 <label>
  <input
    type="checkbox"
    name="person14"
    checked={checkedItems.suv}
    onChange={handleCheckboxChange}
  />
  4 Person  (14)
</label>
      
<label>
  <input
    type="checkbox"
    name="person 12"
    checked={checkedItems.mpv}
    onChange={handleCheckboxChange}
  />
 6 Person  (12)
</label>
      
<label>
  <input
    type="checkbox"
    name="on more 16"
    checked={checkedItems.sedan}
    onChange={handleCheckboxChange}
  />
8 or More  (16)
</label>
<VolumeControl/>
        </div>
        </div>
      
      </div>

      {/* Right Side */}


{/* Right Side */}
<div className="w-[1080px] h-[2016px]   bg-gray-200 ">
  <div className='mt-[20px] ml-[20px] '>
  <div className='flex'>
  <div>
  <Image 
    src={selectedImage}
    width={490}
    height={360}
    alt="car image"
  
  />
  <div className="flex space-x-8 mt-[20px]">
    <Image
      src="/images/View 1.png"
      width={140}
      height={124}
      alt="car select pic"
      className="cursor-pointer"
      onClick={() => handleClick('/images/View 1.png')}
    />
    <Image
      src="/images/View 2 (1).png"
      width={140}
      height={124}
      alt="car select pic"
      className="cursor-pointer"
      onClick={() => handleClick('/images/View 2 (1).png')}
    />
    <Image
      src="/images/View 3.png"
      width={148}
      height={124}
      alt="car select pic"
      className="cursor-pointer"
      onClick={() => handleClick('/images/View 3.png')}
    />
  </div>
  </div>
  <div className="bg-white w-[444px] h-[420px]  space-y-2 ml-5 p-4">
  <div className="w-[220px] h-[72px] flex items-center justify-between">
    <p className="font-PlusJakartaSans font-bold text-[32px] whitespace-nowrap">Nissan GT - R</p>
    
    <Image
      src="/images/heart.png"
      width={24}
      height={24}
      alt="Favorite icon"
      className=" ml-[100px]"
    />
  </div>
  <div className="flex space-x-2">
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
     <FaStar className="text-yellow-400" /> {/* Example of an inactive star */}
     <svg width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="blue" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" />
    </svg>
    <p className="font-PlusJakartaSans font-medium text-[14px]">440+ Reviewer</p>

    </div>
    <div className="w-[444px] h-[120px] ">
  <p className="font-normal leading-[40px] font-PlusJakartaSans text-[20px] w-[432px] h-[1280px]">
    NISMO has become the embodiment of Nissans
     outstanding performance, inspired by the most 
     unforgiving proving ground, the race track.
  </p>
</div>

<div className='flex '>
<div className='w-[200px] h-[72px]   '>
  <div className='w-[200px] h-[28px] gap-[16px] flex '><p className='font-normal text-gray-400 font-PlusJakartaSans  text-[20px] leading-[30px]'>Type Car</p> <p className='font-semibold font-PlusJakartaSans  text-[20px] leading-[30px]'>Sport</p></div>
  <div className='w-[200px] h-[28px] gap-[16px] flex '><p className='font-normal text-gray-400 font-PlusJakartaSans  text-[20px] leading-[30px]'>Steering </p> <p className='font-semibold font-PlusJakartaSans  text-[20px] leading-[30px]'>Manual</p></div>
</div>
<div className='w-[200px] h-[72px]'>
<div className='w-[200px] h-[28px] gap-[16px] flex '><p className='font-normal text-gray-400 font-PlusJakartaSans  text-[20px] leading-[30px]'>Capacity</p> <p className='font-semibold font-PlusJakartaSans  text-[20px] leading-[30px]'>2 Person</p></div>
<div className='w-[200px] h-[28px] gap-[16px] flex '><p className='font-normal text-gray-400 font-PlusJakartaSans  text-[20px] leading-[30px]'>Gasoline  </p> <p className='font-semibold font-PlusJakartaSans  text-[20px] leading-[30px]'>70L</p></div>
</div>
</div>
<div className='flex gap-[190px] '>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col'>$76.00/ 
  <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$80.00</p></div>
  <div className="flex-end justify-end">
 <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px] '>
  Rent Now
 </button>
 </div>
 </div>
  </div>
</div>

<div className=' w-[950px] h-[452px]  rounded-[10px]  bg-white  mt-[20px]  '>
  <div className='  ml-[10px] mt-[20px]'>
  <Image
  src="/images/Total Review.png"
  width={136}
  height={28}
  alt=" review  "
  className='mt-[30px]'
  />
  <div className=' flex mt-[30px] gap-[15px]'>
    
  <Image
src="/images/Profill.png"
width={56}
height={56}
alt="  profile image 1 "
className=''
/>
<div className='w-[128px] h-[56px]  gap-[8px]'>
<div className='w-[128px] h-[28px] font-PlusJakartaSans  font-bold  text-[20px]  leading-[30px] '>Alex Stanton</div>
<div className='w-[128px] h-[28px] text-gray-400 font-PlusJakartaSans  font-medium   text-[14px]  leading-[21px] '>CEO at Bukalapak</div>
<p className='w-[860px] h-[56px] text-[14px]leading-[28px] font-PlusJakartaSans font-normal'>We are very happy with the 
  service from the MORENT App. Morent has a low price and also a large variety of cars with good and
   comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
</div>
<div className='w-[128px] h-[56px]  ml-auto  '>
  <div className='w-[128px] h-[28px]  text-gray-400 font-PlusJakartaSans  font-medium   text-[14px]  leading-[21px] '>21 July 2022</div>
  <div className='w-[128px] h-[28px] flex'>  
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
     <FaStar className="text-yellow-400" /> {/* Example of an inactive star */}
     <svg width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="blue" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" />
    </svg>
    </div>
    
</div>
</div>

  </div>
  <div className=' ml-[20px]'>
  <div className='  flex mt-[90px] gap-[15px]'>
  
  <Image
src="/images/Profill (2).png"
width={56}
height={56}
alt="  profile image 1 "

/>
<div className='w-[128px] h-[56px]  gap-[8px]'>
<div className='w-[128px] h-[28px] font-PlusJakartaSans  font-bold  text-[20px]  leading-[30px] '>Alex Stanton</div>
<div className='w-[128px] h-[28px] text-gray-400 font-PlusJakartaSans  font-medium   text-[14px]  leading-[21px] '>CEO at Bukalapak</div>
<p className='w-[860px] h-[56px] text-[14px]leading-[28px] font-PlusJakartaSans font-normal'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
<div >
                 {/* "Show More"/"Show Less" Button */}
                 <div className='mt-[0px] '>
          <button
            onClick={() => setExpanded(!expanded)}
            className='items-center gap-2 font-PlusJakartaSans text-blue-500  flex  justify-center items-center text-center  h-[20px] w-[700px]  '
          >
            {expanded ? (
              <>
                <FaChevronUp /> Show Less
              </>
            ) : (
              <>
                <FaChevronDown /> Show More
              </>
            )}
          </button>
        </div>
 {/* Extra Content (Only shown when expanded is true) */}
 {expanded && (
          <div className='  bg-white w-[850px] h-[52px] '>
<div className='flex'>
<Image
src="/images/Profill.png"
width={56}
height={56}
alt="  profile image 1 "
className=' '
/>

<div>
<div className='w-[128px] h-[28px] font-PlusJakartaSans  font-bold  text-[20px]  leading-[30px] '>Alex Stanton</div>
<div className='w-[128px] h-[28px] text-gray-400 font-PlusJakartaSans  font-medium   text-[14px]  leading-[21px] '>CEO at Bukalapak</div>
</div>
<p className='w-[860px] h-[56px] text-[14px]leading-[28px] font-PlusJakartaSans font-normal'>We are very happy with the 
  service from the MORENT App.
   comfortable facilities. </p>
</div>
</div>


        )}
        </div>

</div><div className=' ml-auto'>
 <div className='w-[128px] h-[28px]  text-gray-400 font-PlusJakartaSans  font-medium   text-[14px]  leading-[21px] '>20 July 2022</div>
 <div className='w-[128px] h-[28px] flex'>  
     <FaStar className="text-yellow-400" />
     <FaStar className="text-yellow-400" />
     <FaStar className="text-yellow-400" />
    <FaStar className="text-yellow-400" /> {/* Example of an inactive star */}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="blue" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
     <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" />
   </svg>
   </div>
   </div>
</div>

        </div>
    
        </div>















</div>

<div className='w-[1312px]  h-[44px]  gap-[720px] flex mt-[10px]'>
<div className='w-[132px] h-[44px]  rounded-[4px] px-[20px]  gap-[8px] '>
    <p className='w-[92px] h-[24px] text-center'>Recent Car</p>
</div>
<div className='w-[104px] h-[44px] px-[20px] text-blue-400'>View All</div>
</div>
<div className=' ml-[10px] w-[1312px] h-[452px] gap-[32px] items center  flex mt-[20px]'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Koenigsegg</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[50px]">
        <Image
    src="/images/car.png"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$99.00/ 
    <p className='text-gray-300 text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
 


<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Nissan GT - R</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
        <Image
    src="/images/car (1).png"
    width={232}
    height={72}
    alt='car pic'
    
    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
  <div className='flex'>$80.00/<p className='text-gray-300  text-[15px]'>day</p></div> 
  <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$100.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now</button>
    </div>
</div>





<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Rolls - Royce</h1>
        <p className='text-gray-300 '>Sedan</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
    <Image
        src="/images/Car (2).png"
        width={232}
        height={72}
        alt="car pic"
    />
</div>







    <Image
  src="/images/Spesification (2).png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$96.00/ 
    <p className='text-gray-300  text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now</button>
    </div>
</div>





<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Nissan GT - R</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div>
        <div className="flex justify-center items-center mt-[66px]"> 
        <Image
    src="/images/car (1).png"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
    <div className='flex'>$80.00/
    <p className='text-gray-300  text-[15px]'>day</p></div> 
    <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$100.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now</button>
    </div>
</div>
</div>

{/*2nd */}



<div className='w-[1312px]  h-[44px]  gap-[720px] flex mt-[10px]'>
<div className='w-[132px] h-[44px]  rounded-[4px] px-[20px]  gap-[8px] '>
    <p className='w-[92px] h-[24px] text-center whitespace-nowrap'>Recomendation Car</p>
</div>
<div className='w-[104px] h-[44px] px-[20px] text-blue-400'>View All</div>
</div>
{/*main row1cards*/}

<div className='w-[1312px] h-[388px] gap-[32px] items center  ml-[10px] flex'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>All New Rush</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart (1).png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[50px]">
        <Image
    src="/images/Car (3).png"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$72.00/ 
    <p className='text-gray-300 text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
 


<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>CR  - V</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
        <Image
    src="/images/Car (4).png"
    width={232}
    height={72}
    alt='car pic'
    
    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
  <div className='flex'>$80.00/<p className='text-gray-300  text-[15px]'>day</p></div> 
 </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now</button>
    </div>
</div>





<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px] whitespace-nowrap'>All New Terios</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart (1).png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
    <Image
        src="/images/Car (5).png"
        width={232}
        height={72}
        alt="car pic"
    />
</div>







    <Image
  src="/images/Spesification (2).png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$74.00/ 
    <p className='text-gray-300  text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now</button>
    </div>
</div>





<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>CR  - V</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>
        <Image
        src="/images/heart.png"
width={24}
height={24}
alt="heart"
/>
</div>
        </div>
        <div className="flex justify-center items-center mt-[66px]"> 
        <Image
    src="/images/Car (6).png"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/Spesification.png"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
    <div className='flex'>$80.00/
    <p className='text-gray-300  text-[15px]'>day</p></div> </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
   <Link href="/categories">Rent Now</Link></button>
    </div>
</div>

    </div>



































































































































































</div>














  </div>
  




    
  );
};

export default Page;
