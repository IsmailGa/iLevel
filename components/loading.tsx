import React, { useEffect } from 'react'

const Loading = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])

    return (
        <div className="bg-[#070529] w-full h-full flex justify-center items-center fixed translate-x-[50%] right-[50%] top-[0%] z-[9999]">
            <div className="animate-spin rounded-full h-[150px] w-[150px] border-t-[3px] border-b-[3px] border-primary"></div>
        </div>
    )
}

export default Loading