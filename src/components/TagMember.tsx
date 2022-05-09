import React, { FC } from "react";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

type Dataprops ={
    membername: string,
    src: string
}

const TagMember:FC<Dataprops> = ({membername, src}) =>{

    return <div className="h-[400px] w-[270px] bg-inherit justify-center relative flex items-stretch group shadow-xl mt-5 mr-8 z-[1]">
        <img className="w-full h-[347px] group-hover:opacity-80 group-hover:cursor-pointer" src={src} />
        <div className="w-10/12 bg-white h-[107px] absolute self-end justify-center items-center flex-col flex shadow-2xl">
            <a href="#" className="text-xl font-bold hover:text-[#02a95c]">{membername}</a>
            <div className="text-sm font-semibold text-[#02a95c]">CONSULTANT</div>
            <div className="h-10 w-full  justify-center items-center flex space-x-3">
                <FaFacebookF className="h-8 bg-slate-300 w-8 rounded-full p-1 hover:bg-[#02a95c] hover:text-white hover:cursor-pointer "/>
                <FaInstagram className="h-8 bg-slate-300 w-8 rounded-full p-1 hover:bg-[#02a95c] hover:text-white hover:cursor-pointer "/>
                <FaTwitter className="h-8 bg-slate-300 w-8 rounded-full p-1 hover:bg-[#02a95c] hover:text-white hover:cursor-pointer "/>
            </div>
        </div>
    </div>
}

export default TagMember;