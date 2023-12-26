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

function Header() {
    return (
        <div>
            <h1>Header</h1>

            {/* Left */}
            <div>
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed" 
                    alt={''} 
                />
                <div>
                    <MagnifyingGlassIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/* Center */}

            {/* Right */}

        </div>
    )
}

export default Header