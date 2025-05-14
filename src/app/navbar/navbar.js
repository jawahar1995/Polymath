import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <NavigationMenu className="navbar-width">
      <NavigationMenuList className="block">
        {/* User Info */}
        <div className="flex m-2 p-2">
          <Avatar className="avatar-size">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="block p-2">
            <b>Shadcn</b>
            <p>m@example.com</p>
          </div>
        </div>

        {/* Main Items */}
        {[
          { label: "Search", key: "search" },
          { label: "Ask AI", key: "ai" },
          { label: "Home", key: "home" },
        ].map(({ label, key }) => (
          <NavigationMenuItem key={key} className="gap3">
            <NavigationMenuTrigger
              className="text-1xl"
              onClick={() => toggleMenu(key)}
            >
              {label}
            </NavigationMenuTrigger>
            {openMenu === key && (
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}

        <br />
        <small className="title">Favorites</small>

        {[
          {
            label: "📊 Project Management & Task Tracking",
            key: "projects",
          },
          {
            label: "🍳 Family Recipe Collections & Meal Planning",
            key: "recipes",
          },
        ].map(({ label, key }) => (
          <NavigationMenuItem key={key} className="gap3">
            <NavigationMenuTrigger
              className="text-1xl"
              onClick={() => toggleMenu(key)}
            >
              {label}
            </NavigationMenuTrigger>
            {openMenu === key && (
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}

        <br />
        <small className="title">Collections</small>

        {[
          { label: "🏠 Personal Life Management", key: "life" },
          { label: "💼 Professional Development", key: "career" },
          { label: "🎨 Creative Project", key: "creative" },
        ].map(({ label, key }) => (
          <NavigationMenuItem key={key} className="gap3">
            <NavigationMenuTrigger
              className="text-1xl"
              onClick={() => toggleMenu(key)}
            >
              {label}
            </NavigationMenuTrigger>
            {openMenu === key && (
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}

        <br />
        <br />
        <br />
        <br />

        {/* Settings and others without submenu */}
        {["Settings", "Templates", "Help", "Toggle theme"].map((label, index) => (
          <NavigationMenuItem key={index} className="gap3">
            <NavigationMenuTrigger className="text-1xl">
              {label}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
