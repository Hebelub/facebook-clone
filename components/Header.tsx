import React from 'react'
import Image from 'next/image'
import { Chat } from 'openai/resources/index.mjs'
import Home from '@/app/page'
import {
    BellIcon,
    ChatBubbleLeftRightIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/solid';
import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import HeaderIcon from './HeaderIcon'

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shaddow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed" 
                    alt={''} 
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <MagnifyingGlassIcon className="h-6 text-gray-600" />
                    <input 
                        className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" 
                        type="text" 
                        placeholder="Search Facebook" 
                    />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}

                <p className="whitespace-nowrap font-semibold pr-3">Gabriel Løsnesløkken</p>
                <Squares2X2Icon className="icon" />
                <ChatBubbleLeftRightIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />

            </div>

        </div>
    )
}

export default Header