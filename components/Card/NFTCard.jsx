import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import image1 from '../../images/image1.jpeg'

const NFTCard = ({ img, width, name }) => {
  // const router = useRouter();
  // const [showButton, setButton] = useState(false);

  // useEffect(() => {
  //   if(router.asPath === '/Profile' || router.asPath === '/Explore'){
  //     setButton(true)
  //   }else{
  //     setButton(false)
  //   }
  // }, [router])
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div
      className={`shadow hover:shadow-md shrink-0 bg-white rounded-[1rem] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all ${width}`}
    >
      <img
        className="object-cover w-full h-48"
        src={img}
        alt="Flower and sky"
      />

      <div className="relative p-4">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 pb-4 text-ellipsis">
          This is card title
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-gray-500 text-sm">
              Floor
            </span>
            <span className="font-semibold ">0.05 ETH</span>
          </div>
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-gray-500 text-sm">
              Total Volume
            </span>
            <span className="font-semibold">41 ETH</span>
          </div>
        </div>
        <Button name={name} handleClick={handleClick} />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NFTCard;
