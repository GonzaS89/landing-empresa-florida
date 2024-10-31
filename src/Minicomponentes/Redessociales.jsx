import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Redessociales = () => {

    const returnRedSocial = val => {
        return val === 'face' ? 
        <FaFacebook /> : <AiFillInstagram />
    }

  return (
   <>{returnRedSocial(props.refe)}</>
  )
}
