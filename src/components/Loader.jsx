import React from 'react'

const Loader = () => {
    return (
        <div className=' h-screen flex items-center justify-center relative'>
            <div className='w-[450px] h-[450px] relative '>
                <div className="w-20 h-16 absolute top-[180px] left-[70px] z-50 animate-cloud">
                    <span className="bg-blue-400 w-14 h-14 rounded-full  absolute bottom-0 "></span>
                    <span className="bg-blue-400 w-16 h-10 rounded-full  bottom-0 right-0 absolute  "></span>
                </div>
                <span className="w-[120px] h-[120px] bg-yellow-400"></span>
                <span className="bg-gradient-to-br from-yellow-500 to-yellow-300 w-[120px] h-[120px] inline absolute right-[195px] bottom-[195px] rounded-full"></span>
                <span className="bg-gradient-to-br from-yellow-500 to-yellow-400  w-[120px] h-[120px] inline absolute right-[195px] bottom-[195px] rounded-full animate-ping-slow"></span>
                <div className="w-20 h-16 absolute top-[120px] right-[130px] z-50 animate-cloud">
                    <span className="bg-blue-400 w-12 h-12 rounded-full  absolute bottom-0 right-3 "></span>
                    <span className="bg-blue-400 w-14 h-8 rounded-full  bottom-0 absolute left-0  "></span>
                </div>
            </div>
        </div>
    )
}

export default Loader