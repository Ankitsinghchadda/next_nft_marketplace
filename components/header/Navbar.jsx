import React, { useEffect, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdWallet, MdClose } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import MobileMenu from './MobileMenu'
import Link from "next/link"
import { useRouter } from 'next/router';
import { Web3Button } from '@web3modal/react'


const Navbar = () => {
    const [openMenu, setMenu] = useState(false)
    const [color, setColor] = useState(false);
    const [page, setPage] = useState(false);
    const router = useRouter();
   

    const changeColor = () => {
      if(window.scrollY >= 70){
        setColor(true);
      }else {
        setColor(false);
      }
    }

    useEffect(() => {
      if(router.asPath === '/Profile' || router.asPath === '/CreateNFT' || router.asPath === '/Explore'){
        setPage(true)
      }else{
        setPage(false)
      }
    }, [router])
    
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
      return () => {
        window.removeEventListener('scroll', changeColor);
      }
    },[])
    //window.addEventListener('scroll', changeColor);

    const toggleMenu = () => {
      setMenu(prev => !prev)
    }

    const closeMenu = () => {
      setMenu(false);
    }
    
  return (
    <header className={`h-[72px] fixed w-full z-[79] text-lg font-semibold translate-y-0 ${openMenu || color || page ? 'bg-white text-black shadow-md': 'text-white'}`}>
      <nav className='flex justify-between px-4 md:px-8 items-center h-full'>
        <div className='flex items-center'>
          <button className='flex lg:hidden mr-2 cursor-pointer transition-all ease-in-out' onClick={toggleMenu}>
            {openMenu ? <MdClose size={28}/> : <CgMenuLeft size={28}/>}
          </button>
          <div className="cursor-pointer">
          <Link href="/">NFT_MARKET</Link>
          </div>
          
        </div>

        <ul className='hidden lg:flex cursor-pointer'>
          <li className='mr-5' ><Link href="/">Home </Link></li>
          <li className='mr-5'><Link href="/Explore">Explore </Link></li>
          <li className='mr-5' ><Link href="/CreateNFT">Create NFT </Link></li>
          <li className=''>Docs</li>
        </ul>

        <div className='flex'>
          
          <span className={`hidden md:flex items-center mr-3 cursor-pointer ${color || page ? 'text-black' : 'text-white'}`}>
            <Web3Button />
          </span>
          <button className={`rounded-xl md:rounded-lg bg-white/[0.12] backdrop-blur-[10px] inline-flex items-center p-3 cursor-pointer ${color || page ? 'border' : ''}`}>
            <Link href="/Profile">
            <span className=''>
              <IoPersonCircleOutline size={28}/>
            </span>
            </Link>
          </button>
        </div>
      </nav>
      {openMenu && <MobileMenu closeMenu={closeMenu}/>}
    </header>
  )
}

export default Navbar
