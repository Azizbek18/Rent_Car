import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

function Footer() {
return (
<div className="container mx-auto">
  <div className=' py-[40px] flex justify-between'>
    <div className="w-[50%]">
      <NavLink to="/">
        <img src="/Logo.svg" alt="Sayt Logosi" />
      </NavLink>
      <p
        className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] text-[#13131399] py-[25px] font-['Plus_Jakarta_Sans']">
        Our vision is to provide convenience <br /> and help increase your sales business.
      </p>
    </div>
    <div className="">
      <h2
        className="font-semibold text-[20px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans']">
        About
      </h2>
      <ul>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          How it works
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Featured
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Partnership
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Bussiness Relation
          </Link>
        </li>
      </ul>
    </div>
    <div className="">
      <h2
        className="font-semibold text-[20px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans']">
        Community
      </h2>
      <ul>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Events
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Blog
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Podcast
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Invite a friend
          </Link>
        </li>
      </ul>
    </div>
    <div className="px-[25px]">
      <h2
        className="font-semibold text-[20px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans']">
        Socials
      </h2>
      <ul>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Discord
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Instagram
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Twitter
          </Link>
        </li>
        <li className='py-[10px]'>
          <Link
            className="font-medium text-[16px] leading-[1.5] tracking-[-0.02em] align-middle font-['Plus_Jakarta_Sans'] text-[#13131399]">
          Facebook
          </Link>
        </li>
      </ul>
    </div>
  </div>
  <hr className='text-[#dedede] border-1' />
  <div className="flex justify-between py-[20px]">
    <p className="font-semibold text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1A202C] align-middle font-['Plus_Jakarta_Sans']">
    ©2022 MORENT. All rights reserved
    </p>
    <div className="flex justify-between items-center gap-[40px]">
      <Link className="font-semibold text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1A202C] align-middle font-['Plus_Jakarta_Sans']">
      Privacy & Policy
      </Link>
      <Link className="font-semibold text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1A202C] align-middle font-['Plus_Jakarta_Sans']">
      Terms & Condition
      </Link>
    </div>
  </div>
</div>
)
}

export default Footer