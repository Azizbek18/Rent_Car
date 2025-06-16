import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
return (
<header className="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div className='container mx-auto px-0 py-6 flex justify-between items-center'>
        <div className="flex items-center gap-[80px]">
            <NavLink to="/">
                <img src="/Logo.svg" alt="Sayt Logosi" />
            </NavLink>

            <form className="flex items-center border-2 border-gray-300 rounded-[20px] px-[20px] gap-1 overflow-hidden">
                <button>
                    <img src="/search.svg" alt="Qidiruv Logosi" />
                </button>
                <input type="text" placeholder="Search something here" className="px-4 py-2 w-85 focus:outline-none font-['Plus Jakarta Sans'] font-[500]" />
                <button type="submit">
                    <img src="/filter.svg" alt="Filter" />
                </button>
            </form>
        </div>
        <div className="flex justify-between items-center gap-[20px]">
            <div className="border-2 rounded-[20px] border-[#dadada] p-1.5 cursor-pointer" >
                <img src="/heart.svg" alt="Heart" />
            </div>
            <div className="border-2 rounded-[20px] border-[#dadada] p-1.5 cursor-pointer">
                <img src="/notification.svg" alt="Heart" />
            </div>
            <div className="border-2 rounded-[20px] border-[#dadada] p-1.5 cursor-pointer">
                <img src="/setting.svg" alt="Heart" />
            </div>
            <div className="w-[45px] h-[45px] overflow-hidden rounded-[50%] cursor-pointer">
                <img className='w-[100%] h-[100%] object-cover' src="/Avatar.png" alt="Avatar" />
            </div>
        </div>
    </div>
</header>
)
}

export default Header