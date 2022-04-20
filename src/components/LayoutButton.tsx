import { FC } from "react";


type Dataprops ={
    nameBtn: string,
    classname?: string
}



export const LayoutButton: FC<Dataprops> = ({nameBtn,classname}) => {
    const classBtn = `${classname} bg-[#02a95c] hover:cursor-pointer leading-[44px] hover:opacity-80 duration-300 rounded-full px-6 group`

    return <div  className={classBtn}>
        <a className="text-white text-base tracking-wide font-semibold">{nameBtn}
            <svg className="ml-2 h-6 w-5 text-white inline-block group-hover:translate-x-1 ease-in duration-200 shadow-xl"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
        </a>
        

    </div>
}