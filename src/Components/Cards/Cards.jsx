import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const inform = [
    {
        id: 1,
        name: "All New Rush",
        category: "SUV",
        image:'/cards1.svg',
        fuel: "70L",
        transmission: "Manual",
        people: "6 People",
        price: "$72.00",
        isLiked: false,
        onRent: "Rent Now",
        skidka:'$80.00'
    },
    {
        id: 2,
        name: "CR  - V",
        category: "Suv",
        image:'/cards2.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "6 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 3,
        name: "All New Terios",
        category: "Suv",
        image:'/cards3.svg',
        fuel: "90L",
        transmission: "Manual",
        people: "6 People",
        price: "$74.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 4,
        name: "CR  - V",
        category: "SUV",
        image:'/cards4.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "6 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 5,
        name: "MG ZX Exclusice",
        category: "Hatchback",
        image:'/cards5.svg',
        fuel: "70L",
        transmission: "Manual",
        people: "4 People",
        price: "$76.00",
        isLiked: false,
        onRent: "Rent Now",
        skidka:'$80.00'
    },
    {
        id: 6,
        name: "New MG ZS",
        category: "SUV",
        image:'/cards6.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "6 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 7,
        name: "MG ZX Excite",
        category: "Hatchback",
        image:'/cards5.svg',
        fuel: "90L",
        transmission: "Manual",
        people: "4 People",
        price: "$74.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 8,
        name: "New MG ZS",
        category: "SUV",
        image:'/cards6.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "6 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 9,
        name: "Koenigsegg",
        category: "Sport",
        image:'/cards3.svg',
        fuel: "90L",
        transmission: "Manual",
        people: "2 People",
        price: "$99.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 10,
        name: "New MG ZS",
        category: "SUV",
        image:'/cards1.svg',
        fuel: "70L",
        transmission: "Manual",
        people: "4 People",
        price: "$75.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    {
        id: 11,
        name: "Koenigsegg",
        category: "Sport",
        image:'/cards4.svg',
        fuel: "90L",
        transmission: "Manual",
        people: "2 People",
        price: "$99.00",
        isLiked: false,
        onRent: "Rent Now",
    },
    
]
function Cards() {
    const [showbutton, setShowbutton]=useState(false)
    const information = showbutton ? inform: inform.slice(0,8);
    const navigate = useNavigate()
    const handleSubmit = (id) => {
        navigate(`/cardsinfo/${id}`)
    }
  return (
    <div className='container mx-auto pt-[30px]'> 
        <div className="px-[20px] text-[16px] leading-[100%] tracking-[0%] align-middle text-[#90A3BF] font-[600]">
        Recomendation Car
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-[20px] pb-[5px]">
            {
            information.map((item,index)=>(
            <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg p-6 font-sans group relative">

                <div className="flex justify-between ">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                        <p
                            className="font-bold text-[14px] leading-[1.5] tracking-[-0.02em] align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">
                            {item.category}
                        </p>
                    </div>
                    <div className="">
                        <img src="/heart.svg" alt="Heart" />
                    </div>
                </div>
                <div onClick={()=>handleSubmit(item.id)} className="w-full  h-[170px] flex justify-center items-center py-8  relative">
                    <img className='w-full h-[auto] object-cover transition duration-200 ' src={item.image} alt="Card photo" />
                    <div class="absolute bottom-0 left-0 w-full h-30 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#ffffff_100%)] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
                </div>
                <div className="flex gap-4 mb-4 mt-6 text-sm text-gray-600 justify-between">
                    <span className="flex gap-1 items-center">
                        <img src="/gas.svg" alt="" />
                        <p
                            className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em]  text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                            {item.fuel}</p>
                    </span>
                    <span className="flex gap-1 items-center">
                        <img src="/elips.svg" alt="" />
                        <p
                            className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em] text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                            Manual</p>
                    </span>
                    <span className="flex gap-1 items-center">
                        <img src="/people.svg" alt="" />
                        <p
                            className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em] text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                            {item.people}</p>
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className='flex justify-end flex-col'>
                        <p
                            className="font-bold text-[20px] leading-[1] tracking-normal align-middle font-['Plus_Jakarta_Sans']">
                            {item.price}/ <span
                                className="font-bold text-[14px] leading-[1] tracking-normal align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">day</span>
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] font-bold py-[5px] text-[14px] leading-[1] tracking-[0] align-middle line-through text-[#90A3BF]">
                            {item.skidka}
                        </p>
                    </div>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-[4px] transition duration-200">
                        Rent Now
                    </button>
                </div>
            </div>
            ))
            }
        </div>
        <div className="text-center py-[60px]">
            <Link onClick={()=> setShowbutton(prev=>!prev)} className='px-[20px] py-[10px] bg-blue-700 hover:bg-blue-600 rounded-[4px] text-[16px] leading-[150%] tracking-[-0.02em] text-center align-middle font-[600] text-[white]'>{showbutton?" Show less":"Show more car"}</Link>
        </div>
    </div>
  )
}

export default Cards