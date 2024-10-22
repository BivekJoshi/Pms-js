import React, { useRef, useState } from "react";
import './style.css'

const items = [
  {
    name: "build",
    subItems: ["description", "folder"],
  },
];

const MenuButton = ({
  name,
  icon,
  index,
  hasSubItems,
  subMenuHeight,
  onClick,
}) => {
  return (
    <button onClick={() => (onClick ? onClick(index, subMenuHeight) : null)}>
      <span>{icon || name}</span>
      {name}
      {hasSubItems && <span>chevron_right</span>}
    </button>
  );
};
const MenuItem = ({ name, index, activeSubMenu, subItems, onClick }) => {
  const subMenuRef = useRef(null);
  const isActive = activeSubMenu === index;
  return (
    <>
      <MenuButton
        onClick={subItems ? onClick : () => null}
        name={name}
        index={index}
        hasSubItems={Boolean(subItems)}
        subMenuHeight={subMenuRef.current?.clientHeight}
      />
      {subItems?.length && (
        <nav ref={subMenuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
          <MenuButton onClick={onClick} icon="arrow_back" name={name} />
          {subItems.map((subItem) => (
            <MenuButton key={subItem} name={subItem} />
          ))}
        </nav>
      )}
    </>
  );
};
export const Dropdowm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState();
  const [activeSubMenu, setActivateSubMenu] = useState();

  const handleClick = (index, subMenuHeight) => {
    if (index !== -1) setActivateSubMenu(index);
    setSubMenuHeight(subMenuHeight);
    setIsSubMenuOpen(index > -1);
  };
  return (
    <div className={`dropdowm ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>Preferences</button>
      <div style={{ height: `${subMenuHeight || 168}px` }} className="menu">
        <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
          <nav className="main-menu">
            {items.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                index={index}
                activeSubMenu={activeSubMenu ?? undefined}
                onClick={handleClick}
                subItems={item.subItems ?? []}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dropdowm;
