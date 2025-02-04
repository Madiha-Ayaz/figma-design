'use client';
import VolumeControl from '@/components/VolumeControl'; 
import { useState, ChangeEvent } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Page = () => {
  const [checkedItems, setCheckedItems] = useState({
    sport: false,
    suv: false,
    mpv: true,
    sedan: true,
    coupe: true,
    hatchback: true,
    person2: false,
    person4: false,
    person6: false,
    person8: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <div className="flex">
        {/* Left Side */}
        <div className="w-[360px] h-[2016px] bg-white">
          <div className="flex flex-col w-[360px] h-[1600px] bg-white font-PlusJakartaSans space-y-4 p-6">
            <p className="font-PlusJakartaSans font-semibold text-[12px] text-gray-400 leading-[15.12px]">TYPE</p>
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

            <div className='w-[176px] h-[240px] space-y-4 flex flex-col font-PlusJakartaSans p-6'>
              <p className="font-PlusJakartaSans font-semibold text-[12px] text-gray-400 leading-[15.12px]">C A P A C I T Y</p>

              <label>
                <input
                  type="checkbox"
                  name="person2"
                  checked={checkedItems.person2}
                  onChange={handleCheckboxChange}
                />
                2 Person (10)
              </label>

              <label>
                <input
                  type="checkbox"
                  name="person4"
                  checked={checkedItems.person4}
                  onChange={handleCheckboxChange}
                />
                4 Person (14)
              </label>

              <label>
                <input
                  type="checkbox"
                  name="person6"
                  checked={checkedItems.person6}
                  onChange={handleCheckboxChange}
                />
                6 Person (12)
              </label>

              <label>
                <input
                  type="checkbox"
                  name="person8"
                  checked={checkedItems.person8}
                  onChange={handleCheckboxChange}
                />
                8 or More (16)
              </label>

              <VolumeControl />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[1080px] h-[2016px] bg-gray-200">
          <div className='flex gap-[10px]'>
            {/* Pick-Up Section */}
            <div className="w-[450px] h-[132px] mt-[30px] rounded-[10px] bg-white ml-[10px] flex flex-col">
              {/* Icon and Label */}
              <div className='flex mt-[10px]'>
                <Image
                  src="/images/mark.png"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <p className="font-bold text-[16px] ml-[10px]">Pick-Up</p>
              </div>

              {/* Input Container */}
              <div className='flex flex-grow gap-[24px] ml-[10px]'>
                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Locations</h1>
                  <select name="city" id="city" className='w-[76px] h-[20px]'>
                    <option value="" disabled selected>Select your city</option>
                    <option value="karachi">karachi</option>
                    <option value="lahore">lahore</option>
                    <option value="islamabad">islamabad</option>
                  </select>
                </div>
                <p className='border-r-[1px] border-gray-200'></p>

                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Date</h1>
                  <select name="Select your Date" id="Date" className='w-[76px] h-[20px]'>
                    <option value="" disabled selected>Select your Date</option>
                    <option value="karachi">1</option>
                    <option value="lahore">2</option>
                    <option value="islamabad">3</option>
                  </select>
                </div>
                <p className='border-r-[1px] border-gray-200'></p>

                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Time</h1>
                  <select name="Select your Date" id="Date" className='w-[108px] h-[20px]'>
                    <option value="" disabled selected>Select your Time</option>
                    <option value="karachi">4 to 5</option>
                    <option value="lahore">7 to 8</option>
                    <option value="islamabad">12 to 1</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='w-[50px] h-[60px] bg-blue-700 mt-[50px] items-center justify-center'>
              <Image
                src="/images/Swap.png"
                width={18.08}
                height={16.33}
                alt="arrow"
                className='justify-center items-center text-center mt-[20px] ml-[20px]'
              />
            </div>

            {/* Drop-Off Section */}
            <div className="w-[450px] h-[132px] mt-[30px] rounded-[10px] bg-white ml-[6px] flex flex-col">
              {/* Icon and Label */}
              <div className='flex mt-[10px]'>
                <Image
                  src="/images/mark.png"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <p className="font-bold text-[16px] ml-[10px]">Drop - Off</p>
              </div>

              {/* Input Container */}
              <div className='flex flex-grow gap-[24px] ml-[10px]'>
                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Locations</h1>
                  <select name="city" id="city" className='w-[76px] h-[20px]'>
                    <option value="" disabled selected>Select your city</option>
                    <option value="karachi">karachi</option>
                    <option value="lahore">lahore</option>
                    <option value="islamabad">islamabad</option>
                  </select>
                </div>
                <p className='border-r-[1px] border-gray-200'></p>

                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Date</h1>
                  <select name="Select your Date" id="Date" className='w-[76px] h-[20px]'>
                    <option value="" disabled selected>Select your Date</option>
                    <option value="karachi">1</option>
                    <option value="lahore">2</option>
                    <option value="islamabad">3</option>
                  </select>
                </div>
                <p className='border-r-[1px] border-gray-200'></p>

                <div className='w-[126px] h-[48px]'>
                  <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Time</h1>
                  <select name="Select your Date" id="Date" className='w-[76px] h-[20px]'>
                    <option value="" disabled selected>Select your Time</option>
                    <option value="karachi">4 to 5</option>
                    <option value="lahore">7 to 8</option>
                    <option value="islamabad">12 to 1</option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          <div className='w-[1312px]  h-[44px]  gap-[1076px] flex mt-[10px]'>
</div>
{/*  main row1cards*/}

<div className='w-[1312px] h-[452px] gap-[32px] items center ml-[30px] flex'>
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


{/*main row1cards*/}

<div className='w-[1312px] h-[388px] gap-[32px] items center ml-[30px] flex'>
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
    Rent Now</button>
    </div>
</div>

    </div>
    {/*3rd*/}
{/*main row1cards*/}

<div className='w-[1312px] h-[388px] gap-[32px] items center ml-[30px] flex mt-[20px]'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px]  bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px] whitespace-nowrap'>MG ZX Exclusice</h1>
        <p className='text-gray-300 '>Hatchback</p>
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
    src="/images/Car (7).png"
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
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col'>$76.00/ 
    <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$80.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
 


<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>New MG ZS</h1>
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
    src="/images/Car (8).png"
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
        <h1 className='font-bold text-[20px] leading-[30px]'>MG ZX Excite</h1>
        <p className='text-gray-300 '>Hatchback</p>
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
        src="/images/Car (7).png"
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


</div>
<div className="w-full h-[44px] flex justify-center items-center mt-[20px]">
  <button className="w-[156px] h-[44px] rounded-[4px] px-[20px] gap-[8px] text-white bg-blue-500 whitespace-nowrap">
    <Link href="/Rent">Show more car</Link>
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Page;
