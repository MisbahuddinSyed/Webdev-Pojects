import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const [form, setform] = useState({ website: "", username: "", password: "" })
    const ref = useRef()
    const [passwordArray, setPasswordArray] = useState(() => {
        return JSON.parse(localStorage.getItem("passwords")) || [];
    });

    useEffect(() => {
        localStorage.setItem("passwords", JSON.stringify(passwordArray))

    }, [passwordArray])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const savePassword = (e) => {
        setPasswordArray([...JSON.parse(localStorage.getItem("passwords")), { ...form, id: uuidv4() }])
        setform({ website: "", username: "", password: "" })

    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert('"' + text + '" Copied to clipboard')
    };

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

    const deletePass = (id) => {

        let c = confirm("Do you really want to delete this record?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id != id))
        }
    }


    const editPass = (id) => {
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id != id))

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

                <input value={form.website} onChange={handleChange} placeholder='Enter Website url' className=' border border-blue-500 rounded-full p-3 my-6 w-full' type="text" name='website' />
                <div className='flex gap-2.5 w-full'>
                    <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='border border-blue-500 rounded-full w-1/2 p-2' type="text" name='username' />
                    <div ref={ref} className="relative w-1/2 ">
                        <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='border border-blue-500 rounded-full w-full p-2' type='password' name='password' />
                        <span className='absolute right-[20px] top-[8px] cursor-pointer' onClick={showPassword}>
                            <img src="/close-eye.svg" alt="" />
                        </span>
                    </div>
                </div>
                <button onClick={savePassword} className='flex justify-center items-center bg-blue-500 rounded-full h-fit w-fit p-2 px-4 m-10 hover:bg-purple-300 text-white'>
                    <img className='size-10' src="/add.svg" alt="" />
                    SAVE
                </button>

                <div className='display-pass w-full flex flex-col gap-5 '>
                    <h2 className='text-3xl'>Your Passwords</h2>
                    {passwordArray.length === 0 && <h2 className='text-3xl'>No passwords to display</h2>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto  p-2.5">
                            <thead className='bg-blue-500 text-white'>
                                <tr>
                                    <th className='p-4 border border-white'>Website</th>
                                    <th className='p-4 border border-white'>Username</th>
                                    <th className='p-4 border border-white'>Password</th>
                                    <th className='p-4 border border-white'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='p-4 border border-purple-300'>
                                            <div className="flex">
                                                {item.website}
                                                <div className="copy ml-auto cursor-pointer hover:bg-blue-500" onClick={() => { copyText(item.website) }}>
                                                    <img src="/copy.svg" alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-4 border border-purple-300'>
                                            <div className="flex">
                                                {item.username}
                                                <div className="copy ml-auto cursor-pointer hover:bg-blue-500" onClick={() => { copyText(item.username) }}>
                                                    <img src="/copy.svg" alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-4 border border-purple-300'>
                                            <div className="flex">
                                                {item.password}
                                                <div className="copy ml-auto cursor-pointer hover:bg-blue-500" onClick={() => { copyText(item.password) }}>
                                                    <img src="/copy.svg" alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-2 border border-purple-300 '>
                                            <div className='flex justify-center gap-10'>
                                                <div className="cursor-pointer" onClick={() => { editPass(item.id) }}>
                                                    <img src="/edit.svg" alt="" />
                                                </div>
                                                <div className="cursor-pointer" onClick={() => { deletePass(item.id) }}>
                                                    <img src="/delete.svg" alt="" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>}
                </div>

            </div>
        </>
    )
}

export default Manager
