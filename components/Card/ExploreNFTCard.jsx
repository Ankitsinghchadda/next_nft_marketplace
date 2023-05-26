import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Address from "../../constants/networkMapping/Addresses.json";
import { useEvmRunContractFunction } from "@moralisweb3/next";
import NFTABI from "../../constants/networkMapping/NFT.json";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

const ExploreNFTCard = ({ nftAddress, tokenId, price }) => {
  const [nftData, setNFTData] = useState({
    image: null,
    name: "Random",
    description: "description",
  });

  const { data, isFetching } = useEvmRunContractFunction({
    chain: "0xaa36a7",
    abi: NFTABI,
    address: nftAddress,
    functionName: "tokenURI",
    params: { tokenId: tokenId },
  });

  //   const {
  //     config,
  //     error: prepareError,
  //     isError: isPrepareError,
  //   } = usePrepareContractWrite({
  //     abi: NFTABI,
  //     address: nftAddress,
  //     functionName: "tokenURI",
  //     args: [tokenId],
  //   });

  //   const { data, error, isError, writeAsync } = useContractWrite(config);

  //   const { isLoading, isSuccess } = useWaitForTransaction({
  //     hash: data?.hash,
  //   });

  //   //   write();
  const updateUi = async () => {
    if (data) {
      const newData = data.replace("ipfs://", "https://ipfs.io/ipfs/");
      const nftData = await (await fetch(newData)).json();
      setNFTData(nftData);
    }
  };

  useEffect(() => {
    updateUi();
  }, [isFetching]);

  return (
    <div
      className={`shadow hover:shadow-md shrink-0 bg-white rounded-[1rem] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all w-full`}
    >
      <img
        className="object-cover w-full h-48"
        src={nftData?.image}
        alt="Flower and sky"
      />

      <div className="relative p-4">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 pb-4 text-ellipsis">
          {nftData.name}
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
            <span className="font-semibold">{price / 10 ** 18}ETH</span>
          </div>
        </div>
        <p>{nftData.description}</p>

        <Button
          name={"Buy"}
          handleClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </div>
  );
};

export default ExploreNFTCard;
