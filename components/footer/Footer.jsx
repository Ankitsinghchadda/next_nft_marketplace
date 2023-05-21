import React from 'react'
import {BsTwitter, BsInstagram, BsDiscord, BsYoutube, } from 'react-icons/bs'
import {FaTiktok, FaRedditAlien} from 'react-icons/fa'
import {TbMail} from 'react-icons/tb'
import Link from "next/link"


const Footer = () => {
  return (
    <div className='text-white h-auto flex justify-center relative w-full bg-[#1868b7]'>
      <div className='px-4 md:px-8 w-full'>
        <div className='pb-10 mb-5 border-b border-gray-200 flex flex-wrap'>
            <div className='flex w-full md:w-1/2 pt-5 md:pt-10 md:pr-16 items-center flex-col md:items-start md:text-left text-center'>
                <div className='text-xl font-semibold my-2'>
                    Stay in the loop
                </div>
                <div className='text-[16px] leading-6'>
                    Join our mailing list to stay in the loop with our newest feature release, NFT drops, and tips and tricks for navigating NFT_Market
                </div>
                <form action="" className='mt-4 w-full'>
                    <div className='flex w-full h-[58px]'>
                        <div className='w-full p-4 rounded-xl min-w-[50%] bg-white '>
                            <input type="text" className='w-full text-black outline-none' placeholder='Your email address'/>
                        </div>
                        <button className='bg-[#2081e2] py-[17px] px-[24px] rounded-xl w-[162px] font-semibold text-sm lg:text-lg mx-2'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex w-full md:w-1/2 md:pl-16 md:pt-10 pt-5 items-center flex-col md:items-start md:text-right text-center'>
                <div className='font-semibold text-xl my-2'>Join the community</div>
                <div className='flex flex-wrap justify-center w-auto h-auto'>
                    <a href="" className='h-[62px] w-[66px] mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2] '>
                            <BsTwitter size={20}/>
                        </button>
                    </a>
                    <a href="" className='mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <BsInstagram size={20}/>
                        </button>
                    </a>
                    <a href="" className='mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <BsDiscord size={20}/>
                        </button>
                    </a>
                    <a href="" className=' mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <BsYoutube size={20}/>
                        </button>
                    </a>
                    <a href="" className=' mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <FaRedditAlien size={20}/>
                        </button>
                    </a>
                    <a href="" className=' mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <FaTiktok size={20}/>
                        </button>
                    </a>
                    <a href="" className=' mt-2 mr-3'>
                        <button className='rounded-xl px-6 py-[17px] bg-[#2081e2]'>
                            <TbMail size={20}/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap w-full pb-10 mb-5 border-b border-gray-200'>
            <div className='pt-5 md:pt-10 w-full md:w-1/4 h-full flex items-center md:items-start text-center md:text-left flex-col'>
                <a href='' className='text-white my-2 font-semibold text-xl'>
                   NFT_MARKET
                </a>
                <div>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </div>
            </div>
            <div className='w-full md:w-[75%] md:pt-10 pt-5 md:pl-[72px] pl-0 flex flex-wrap justify-around'>
                <div className='flex flex-col items-center md:items-start pt-5 md:pt-0 w-1/2 md:w-[20%] h-1/2 md:h-full text-center md:text-left'>
                    <h3 className='text-lg font-semibold my-2'>Marketplace</h3>
                    <ul>
                        <li>All NFTs</li>
                        <li>Art</li>
                        <li>Gaming</li>
                        <li>Membership</li>
                        <li>PFPs</li>
                        <li>Photography</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center md:items-start pt-5 md:pt-0 w-1/2 md:w-[20%] h-1/2 md:h-full text-center md:text-left'>
                <h3 className='text-lg font-semibold my-2'>MyAccount</h3>
                    <ul>
                        <li>Profile</li>
                        <li>Favourite</li>
                        <li>Watchlist</li>
                        <li>My Collection</li>
                        <li>Create</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center md:items-start pt-5 md:pt-0 w-1/2 md:w-[20%] h-1/2 md:h-full text-center md:text-left'>
                <h3 className='text-lg font-semibold my-2'>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Learn</li>
                        <li>Help Center</li>
                        <li>Taxes</li>
                        <li>Patterns</li>
                        <li>Platform</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center md:items-start pt-5 md:pt-0 w-1/2 md:w-[20%] h-1/2 md:h-full text-center md:text-left'>
                <h3 className='text-lg font-semibold my-2'>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Ventures</li>
                        <li>Grants</li>
                        <li>PFPs</li>
                        <li>Photography</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
