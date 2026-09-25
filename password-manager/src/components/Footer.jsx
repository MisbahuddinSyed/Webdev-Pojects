import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 bg-purple-300 w-full flex flex-col gap-2'>
            <div className="logo font-bold text-xl">
                <span className="text-blue-500">&lt;</span>
                Pass<span className='text-blue-500'>OP</span><span className='text-blue-500'>/&gt;</span>
            </div>
            <div className="flex justify-center">
                Made with <img src="/heart.svg" alt="" /> by Misbahuddin
            </div>
        </div>
    )
}

export default Footer
