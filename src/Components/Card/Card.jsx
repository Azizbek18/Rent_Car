import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const infor = [
    {
        id: 1,
        name: "Koenigsegg",
        category: "Sport",
        image:'/card1.svg',
        images: "/cardinfo1.png",
        Images:"/cardinfo2.png",
        pic:"/cardinfo3.png",
        fuel: "90L",
        transmission: "Manual",
        people: "2 People",
        price: "$99.00",
        isLiked: false,
        onRent: "Rent Now",
        },
        {
        id: 2,
        name: "Nissan GT - R",
        category: "Sport",
        image:'/card2.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "2 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
        },
        {
        id: 3,
        name: "Rolls - Royce",
        category: "Sedan",
        image:'/card3.svg',
        fuel: "70L",
        transmission: "Manual",
        people: "4 People",
        price: "$96.00",
        isLiked: false,
        onRent: "Rent Now",
        },
        {
        id: 4,
        name: "Nissan GT - R",
        category: "Sport",
        image:'/card4.svg',
        fuel: "80L",
        transmission: "Manual",
        people: "2 People",
        price: "$80.00",
        isLiked: false,
        onRent: "Rent Now",
        },
        {
            id: 5,
            name: "Nissan GT - R",
            category: "Sport",
            image:'/card4.svg',
            fuel: "80L",
            transmission: "Manual",
            people: "2 People",
            price: "$80.00",
            isLiked: false,
            onRent: "Rent Now",
        },
        {
            id: 6,
            name: "Nissan GT - R",
            category: "Sport",
            image:'/card4.svg',
            fuel: "80L",
            transmission: "Manual",
            people: "2 People",
            price: "$80.00",
            isLiked: false,
            onRent: "Rent Now",
    }
]

function Card() {
    const [viewAll,setViewall]=useState(false);
    const visibleCard = viewAll?infor:infor.slice(0,4);
    const navigate = useNavigate()
    const handleSubmit = (id) => {
        navigate(`/cardinfo/${id}`)
    }
    return (
<div className='container mx-auto py-[10px] pb-[20px]'>
    <div className="flex justify-between items-center px-[20px] py-10 pb-[30px]">
        <p className='font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#90A3BF] align-middle'>Popular Car
        </p>
        <Link 
            onClick={()=>setViewall(prev => !prev)}
            className='font-[Plus_Jakarta_Sans] font-semibold text-[16px] leading-[100%]  tracking-[0%] text-center align-middle text-[#3563E9]'>
        {viewAll ? "Hide" : "View All"}
        </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
        visibleCard.map((item,index)=>(
        <div  key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg p-6 font-sans group relative">

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
                <div class="absolute bottom-0 left-0 w-full h-30 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#ffffff_100%)] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                </div>
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
                <div className='flex items-center'>
                    <p
                        className="font-bold text-[20px] leading-[1] tracking-normal align-middle font-['Plus_Jakarta_Sans']">
                        {item.price}/ <span
                            className="font-bold text-[14px] leading-[1] tracking-normal align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">day</span>
                    </p>
                </div>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-5 rounded-[4px] transition duration-200">
                    Rent Now
                </button>
            </div>
        </div>
        ))
        }
    </div>
</div>
)
}

export default Card