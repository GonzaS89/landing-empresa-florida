import React, {useEffect, useState} from 'react';
import { FaWindowClose } from "react-icons/fa";

export const Modalfoto = ({img , click}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        img !== null ? setIsVisible(true) : setIsVisible(false);
    },[img])


  return (
    <div className={`bg-foto ${isVisible ? 'fixed flex' : 'hidden'} h-full w-screen top-0 z-50 flex-col items-center justify-center gap-8 px-12`}>
        <FaWindowClose className='text-white text-5xl' onClick={()=> setIsVisible(false)}/>
        <img src={img} alt="" className='lg:h-5/6'/>
    </div>
  )
}
