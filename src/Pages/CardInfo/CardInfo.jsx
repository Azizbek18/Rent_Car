import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { infor } from '../../Components/Card/Card'
function CardInfo() {
const [singleCard,setSingleCard]=useState([])
const {id} = useParams()
useEffect(()=>{
const updatecard = infor.filter(item=>item.id.toString() === id)
setSingleCard(updatecard);
},[])

return (
<div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
    <aside className="bg-gray-100 p-5 border-r py-[150px] border-gray-200 h-fit md:h-full rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-6">
            <h3 className="font-semibold mb-2">Car Type</h3>
            <ul className="space-y-1">
                <li className="">Sports</li>
                <li className="">SUV</li>
                <li className="">Sedan</li>
                </ul>
            </div>
    </aside>
    <main className="flex w-full py-[200px]">
        <div className="w-[800px]">
            <div className=" w-full flex items-center ">
                {
                    singleCard.map((item,index)=>(
                        <div className=" flex w-full justify-between items-center  bg-white rounded-lg overflow-hidden shadow-lg p-6 font-sans">
                            <div className="w-[300px] h-[170px] flex justify-center items-center px-2 py-8  relative">
                                <img className='w-full h-[auto] object-cover transition duration-200 ' src={item.image}
                                alt="Card photo" />
                                <div class="absolute bottom-0 left-0 w-full h-30 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#ffffff_100%)] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
                            </div>
                            <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg p-6 font-sans group relative">
                                <div className="flex justify-between ">
                                    <div className="mb-4">
                                        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                                        <p className="font-bold text-[14px] leading-[1.5] tracking-[-0.02em] align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">{item.category}</p>
                                    </div>
                            <div className=""><img src="/heart.svg" alt="Heart" /></div>
                        </div>
                        <div className="">
                            <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
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
                        </div>
                    ))
                }
            </div>
        </div>
    </main>
</div>
)
}

export default CardInfo