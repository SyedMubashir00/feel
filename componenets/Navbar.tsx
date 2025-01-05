'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const router = useRouter()

  const navLinks = {
    Home: '/',
    About: '/about',
    Services: '/services',
    Contact: '/contact',
    Login: '/login'
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-500 text-white h-[60px]">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer">
        {/* <img src="/logo.png" alt="Logo" className="h-10 w-auto" /> */}
        <Image src="/Anime-City-Night.png" alt="logo" width="50" height="30"
        onClick={() => handleNavigation("https://www.goodmind.app/")}
        />
      </div>

      <div className="hidden md:flex space-x-4">
        {Object.entries(navLinks).map(([name, path]) => (
          <button
            key={name}
            onClick={() => handleNavigation(path)}
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-gray-800 transition"
          >
            {name}
          </button>
        ))}
      </div>

      <div className="md:hidden">
        <button className="text-white">Menu</button>
      </div>
    </div>
  )
}

export default Navbar
