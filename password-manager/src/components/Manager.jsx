import { useRef, useState, useEffect } from 'react'
import addimg from '../assets/add.gif'


const Manager = () => {
    const [form, setform] = useState({ website: "", username: "", password: "" })
    const ref = useRef()
    const inputref = useRef()
    const [passwordArray, setPasswordArray] = useState([])

    let passwords;
    useEffect(() => {
        passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))


        }
    }, [])

    const savePassword = (e) => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        setform({...form, website: "", username: "",password: ""})

        console.log(passwordArray)


    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const showPassword = () => {
        if (ref.current.querySelector("input").type == "password") {
            ref.current.querySelector("input").type = "text"
        }
        else {
            ref.current.querySelector("input").type = "password"
        }
        if (ref.current.querySelector("span").querySelector("img").src.includes("open-eye.svg")) {
            ref.current.querySelector("span").querySelector("img").src = "/close-eye.svg"
        }
        else {
            ref.current.querySelector("span").querySelector("img").src = "/open-eye.svg"
        }
    }

    return (
        <>
            <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:16px_16px]'>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto p-10 py-12 w-2/3 text-black">

                <div className="logo font-bold text-5xl">
                    <span className="text-blue-500">&lt;</span>
                    Pass<span className='text-blue-500'>OP</span><span className='text-blue-500'>/&gt;</span></div>

                <div>Your Own Password Manager</div>

                <input  value={form.website} onChange={handleChange} placeholder='Enter Website url' className=' border border-blue-500 rounded-full p-3 my-6 w-full' type="text" name='website' />
                <div className='flex gap-2.5 w-full'>
                    <input  value={form.username} onChange={handleChange} placeholder='Enter Username' className='border border-blue-500 rounded-full w-1/2 p-2' type="text" name='username' />
                    <div ref={ref} className="relative w-1/2 ">
                        <input  value={form.password} onChange={handleChange} placeholder='Enter Password' className='border border-blue-500 rounded-full w-full p-2' type='password' name='password' />
                        <span className='absolute right-[20px] top-[8px] cursor-pointer' onClick={showPassword}>
                            <img src="/close-eye.svg" alt="" />
                        </span>
                    </div>
                </div>
                <button onClick={savePassword} className='flex justify-center items-center bg-blue-300 rounded-full h-fit w-fit p-2 px-4 m-10 hover:bg-blue-500'>
                    <img className='size-10' src={addimg} alt="" />
                    ADD PASSWORD
                </button>

            </div>
        </>
    )
}

export default Manager
