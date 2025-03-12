import React, { useEffect } from "react";
import { RiCloseFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { useMainContext } from "../contexts/MainProvider";
import { Menu } from "antd";
import { MenuList } from "../constans";
import { useLocation } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Sheet() {
  const { isSheet, setIsSheet , windowSize} = useMainContext();
  const location = useLocation();
  useEffect(()=>{
    if(windowSize?.width >1024){
        setIsSheet(false)
    }
  },[windowSize])
  return (
    <section
      className={`z-10 fixed top-0 left-0 w-full h-screen bg-[var(--color-black-1)] overflow-hidden ${
        !isSheet && "hidden"
      }`}
    >
      <div className="relative max-w-[260px] h-full bg-gray-50 p-12 px-5">
        <button 
            className="absolute top-[5px] right-[5px] cursor-pointer"
            onClick={()=>setIsSheet(false)}
            >
          <RiCloseFill className="size-10 text-[var(--color-black-1)]" />
        </button>
        <Menu
          mode="inline"
          className="w-full h-[90%] !bg-transparent items-center !border-none justify-end"
          items={MenuList?.map((item) => ({
            ...item,
            label: item?.label(`${location?.pathname === item.key ? "!text-[var(--color-black-1)]" : "!text-[var(--color-black-3)]"} !text-sm !uppercase`),
            className: `!leading-[70px] !text-gray-500 hover:after:!border-b-[0.3px] hover:after:!border-[var(--color-black)]`,
          }))}
        />
        <div className=" h-[10%] flex flex-col items-center gap-5">
          <div className=" flex justify-center gap-2">
                    <div className=" bg-[var(--color-red)] size-8 p-[0.5rem] rounded-4xl cursor-pointer hover:text-gray-400">
                        <FaPhoneVolume className=" size-full text-[var(--color-white)]" />
                    </div>
                    <div className=" bg-[var(--color-red)] size-8 p-[0.4rem] rounded-4xl cursor-pointer hover:text-gray-400">
                        <RiWhatsappFill className=" size-full text-[var(--color-white)]" />
                    </div>
                    <div className=" bg-[var(--color-red)] size-8 p-[0.4rem] rounded-4xl cursor-pointer hover:text-gray-400">
                        <FaTelegramPlane className=" size-full text-[var(--color-white)]" />
                    </div>
                    <div className=" bg-[var(--color-red)] size-8 p-[0.4rem] rounded-4xl cursor-pointer hover:text-gray-400">
                        <RiInstagramFill className=" size-full text-[var(--color-white)]" />
                    </div>
          </div>
            <p className="text-xs opacity-70 text-[var(--color-black-3)] text-center">
            * Instagram — организация, запрещённая на территории РФ
            </p>
        </div>
      </div>
    </section>
  );
}
