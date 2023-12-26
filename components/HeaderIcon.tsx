import React, { ReactElement, ElementType } from 'react';

interface HeaderIconProps {
    Icon: ElementType;
    active?: boolean;
}

function HeaderIcon({ Icon, active }: HeaderIconProps): ReactElement {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-blue-500 group">
        <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && 'text-blue-500 group'}`} />
    </div>
  );
}

export default HeaderIcon;
