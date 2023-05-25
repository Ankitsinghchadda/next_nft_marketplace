import { useEvmWalletNFTs } from "@moralisweb3/next";
import { useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import NFTCard from "../components/Card/NFTCard";
import { IoMdAdd } from 'react-icons/io'
import Modal from "../components/Modal/Modal";

const Profile = () => {
  const { fetch: getallNfts } = useEvmWalletNFTs();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(true);
  }
  const fetchNfTs = async () => {
    const chainId = chain.id;
    const response = await getallNfts({ address, chain: "0xaa36a7" });
    console.log(response);
    setNfts(response.data);
  };

  useEffect(() => {
    if (isConnected) {
      fetchNfTs();
    }
  }, [isConnected]);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className=" relative overflow-hidden w-full h-full">
          <div className="h-0 pb-[40%] md:pb-[25%] bg-gray-100 hover:bg-gray-300 max-h-[320px]"></div>
          <div className="px-4 h-[60px] md:h-[80px] lg:h-[100px] w-full lg:px-8 mb-4 md:mb-0">
            <div className="rounded-full border-4 border-white shadow-md absolute h-[100px] w-[100px] md:h-[140px] md:w-[140px] lg:w-[168px] lg:h-[168px] -mt-[36px] md:-mt-[86px]">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="px-4 lg:px-8">
            <h1 className="font-bold text-xl md:text-2xl mb-2">Your Name</h1>
            <div className="flex text-sm md:text-lg flex-col md:flex-row ">
              <span>0x00000</span>
              <span className="text-gray-500 md:ml-3">Joined May 2023</span>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 mt-10">
          <div className="flex font-semibold text-lg md:text-xl">
            <h2>Your Collections</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-auto-flow lg:grid-cols-5 gap-2 md:gap-4 flex-wrap py-4">
            {/* {nfts?.map((item) => {
              return <NFTCard img={item._data.metadata.image} />;
            })} */}
            {nfts ? (
              nfts?.map((nft) => <NFTCard img={nft._data.metadata.image} width={'w-full'} name={'list'} handleClick={handleClick}/>)
            ) : (
              <>
                <div className="">
                  <NFTCard
                    img={`https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`}
                    width={'w-full'}
                    name={'list'}
                    handleClick={handleClick}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default Profile;
