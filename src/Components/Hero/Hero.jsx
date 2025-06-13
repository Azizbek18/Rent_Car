import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
return (
<div className='container mx-auto flex gap-10'>
    <div className="bg-[#54A6FF] w-[50%] px-[25px] py-5  rounded-[10px]">
        <h1
            className="font-semibold text-[32px] leading-[1.5] tracking-[-0.03em] align-middle text-[white] font-['Plus_Jakarta_Sans']">
            The Best Platform <br /> for Car Rental
        </h1>
        <p className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] pt-[10px] align-middle text-white font-['Plus_Jakarta_Sans']">
            Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
        </p>
        <br />
        <Link className='bg-[#3563E9] px-[20px] py-[10px] text-[white] font-[500] font-["Plus Jakarta Sans"] rounded-[4px]'>
            Rental Car
        </Link>
        <div className="w-full h-[150px] flex justify-center overflow-hidden">
            <img className='w-[80%]' src="/Car.svg" alt="car" />
        </div>
    </div>
    <div className="bg-[#3563E9] w-[50%] px-[25px] py-5  rounded-[10px]">
        <h1
            className="font-semibold text-[32px] leading-[1.5] tracking-[-0.03em] align-middle text-[white] font-['Plus_Jakarta_Sans']">
            Easy way to rent a <br /> car at a low price
        </h1>
        <p className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em]  pt-[10px] align-middle text-white font-['Plus_Jakarta_Sans']">
            Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
        </p>
        <br />
        <Link className='bg-[#54A6FF] px-[20px] py-[10px] text-[white] font-[500] font-["Plus Jakarta Sans"] rounded-[4px]'>
            Rental Car
        </Link>
        <div className="w-full h-[150px] flex justify-center overflow-hidden">
            <img className='w-[80%]' src="/Car2.svg" alt="car" />
        </div>
    </div>
</div>
)
}

export default Hero