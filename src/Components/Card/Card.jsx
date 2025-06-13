import React from 'react'

function Card() {
return (
<div className='container mx-auto py-10'>
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg p-6 font-sans">

        <div className="flex justify-between">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Koenigsegg</h2>
                <p className="font-bold text-[14px] leading-[1.5] tracking-[-0.02em] align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">
                    Sport
                </p>
            </div>
            <img src="/heart.svg" alt="Heart" />
        </div>

        <div className="flex gap-4 mb-4 text-sm text-gray-600">
            <span className="flex gap-1.5 items-center">
                <img src="/gas.svg" alt="" />
                <p
                    className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em]  text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                    90L</p>
            </span>
            <span className="flex gap-1.5 items-center">
                <img src="/elips.svg" alt="" />
                <p
                    className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em] text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                    Manual</p>
            </span>
            <span className="flex gap-1.5 items-center">
                <img src="/people.svg" alt="" />
                <p
                    className="font-medium text-[14px] leading-[1.5] tracking-[-0.02em] text-[#90A3BF] align-middle font-['Plus_Jakarta_Sans']">
                    2 People</p>
            </span>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex items-center'>
                <p
                    className="font-bold text-[20px] leading-[1] tracking-normal align-middle font-['Plus_Jakarta_Sans']">
                    $99.00/ <span
                        className="font-bold text-[14px] leading-[1] tracking-normal align-middle text-[#90A3BF] font-['Plus_Jakarta_Sans']">day</span>
                </p>
            </div>
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                Rent Now
            </button>
        </div>
    </div>
</div>
)
}

export default Card