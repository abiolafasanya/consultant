import React, { useState } from "react";
import { menus, titleLogNames } from "../../data/menus";
import { LuMenu } from "react-icons/lu";
import { useApp } from "../../hooks/useApp";

const styles = {
  header:
    "px-5 relative w-full flex justify-between md:items-center flex-col md:flex-row gap-5",
  menu: `flex gap-2 flex-col md:flex-row `,
  action: "hidden md:flex bg-purple-500 py-2 px-7 text-purple-100 rounded-md",
  menuIcon: "h-8 w-8",
  isOpen:
    "flex absolute bg-white p-5 w-full top-12 -right-4 transition-all ease-in-out delay-300 duration-700 shadow-sm md:shadow-none",
};

export default function Header() {
  const { toggleDonationModal } = useApp();
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((open) => !open);
  }


  return (
    <div className={styles.header}>
      <div className="flex justify-between items-center">
        <TitleLogo />
        <span className="flex sm:flex lg:hidden md:w-0 md:hidden cursor-pointer">
          <LuMenu className={styles.menuIcon} onClick={toggle} />
        </span>
      </div>
      <div className={open ? styles.isOpen: "hidden md:flex"}>
        <MenuList />
      </div>
      <button className={styles.action} onClick={toggleDonationModal}>Donate</button>
    </div>
  );
}


function TitleLogo() {
  return (
    <a href="/">
      <h2>
        {titleLogNames.map((title, index) => (
          <span key={index} className={title.style}>
            {title.name}
          </span>
        ))}
      </h2>
    </a>
  );
}

function MenuList() {
  return (
    <menu className="flex flex-col md:flex-row gap-3">
      {menus.map((menu, index) => (
        <a  key={index} href={menu.url}>
          {menu.name}
        </a>
      ))}
    </menu>
  );
}
