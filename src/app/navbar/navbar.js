import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <main className="flex flex-col">
            <div className="toggle-btn h-9 w-9 curson-pointer" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg>
            </div>
            
            <NavigationMenu className={`navbar-width transition-all duration-300 ease-in-out ${
            isOpen ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"
            }`}>
                <NavigationMenuList className="block">
                    <div className="flex m-2 p-2 pro-font">
                        <Avatar className="rounded-md avatar-size">
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="block p-2 pro-name">
                            <b>Shadcn</b>
                            <p>m@example.com</p>
                        </div>
                        <div className="proSupMenu">
                            {/* <Button variant="ghost" size="sm">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button> */}
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" size="sm">
                                        <ChevronsUpDown className="h-4 w-4" />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="right">
                                    <DropdownMenuLabel>
                                        <div className="flex m-2 pro-font">
                                            <Avatar className="rounded-md avatar-size">
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="block p-2 pro-name">
                                                <b>Shadcn</b>
                                                <p>m@example.com</p>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button className="flex-btn cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                                            <span className="pro-label">Upgrade to Pro</span>
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button className="flex-btn cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                            <span className="pro-label">Account</span>
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button className="flex-btn cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                                            <span className="pro-label">Billing</span>
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button className="flex-btn cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                                            <span className="pro-label">Notification</span>
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button className="flex-btn cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
                                            <span className="pro-label">Log out</span>
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <NavigationMenuItem className="gap3">
                        <NavigationMenuTrigger className="text-1xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search icons"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            Search
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="gap3">
                        <NavigationMenuTrigger className="text-1xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles icons"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                            Ask AI
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="gap3">
                        <NavigationMenuTrigger className="text-1xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house icons"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                            Home
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <br/>
                    <div className="h-[30rem] overflow-y-auto overflow-x-hidden nav-ellipsis">
                        <small className="title">Favorites</small>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="text-1xl w-50">
                                            <span className="truncate block w-full text-left">📊 Project Management & Task Tracking</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Project Management & Task Tracking</p>
                                        </TooltipContent>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Button className="hidden group-hover:block cursor-pointer" variant="ghost" size="sm">
                                                    <span className="font-semibold text-[17px]">
                                                        ...
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent side="right">
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-off text-muted-foreground"><path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"></path><path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>                                                        <span className="pro-label">Remove from Favorites</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link text-muted-foreground"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>                                                        <span className="pro-label">Copy Link</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-muted-foreground"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                                        <span className="pro-label">Open in New Tab</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 text-muted-foreground"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                                        <span className="pro-label">Delete</span>
                                                    </button>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </Tooltip>
                                </TooltipProvider>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="text-1xl w-50">
                                            <span className="truncate block w-full text-left">🍳 Family Recipe Collections & Meal Planning</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Family Recipe Collections & Meal Planning</p>
                                        </TooltipContent>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Button className="hidden group-hover:block cursor-pointer" variant="ghost" size="sm">
                                                    <span className="font-semibold text-[17px]">
                                                        ...
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent side="right">
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-off text-muted-foreground"><path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"></path><path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>                                                        <span className="pro-label">Remove from Favorites</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link text-muted-foreground"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>                                                        <span className="pro-label">Copy Link</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-muted-foreground"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                                        <span className="pro-label">Open in New Tab</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button className="flex-btn cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 text-muted-foreground"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                                        <span className="pro-label">Delete</span>
                                                    </button>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </Tooltip>
                                </TooltipProvider>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <br/>
                        <small className="title">Collections</small>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="flex text-1xl w-50">
                                            <span className="truncate block w-full text-left">🏠 Personal Life Management</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Personal Life Management</p>
                                        </TooltipContent>
                                        <button className="hidden group-hover:block cursor-pointer">
                                            <span className="text-[17px]">
                                                +
                                            </span>
                                        </button>
                                    </Tooltip>
                                </TooltipProvider>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="flex text-1xl w-50">
                                            <span className="truncate block w-full text-left">💼 Professional Development</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Professional Development</p>
                                        </TooltipContent>
                                        <button className="hidden group-hover:block cursor-pointer">
                                            <span className="text-[17px]">
                                                +
                                            </span>
                                        </button>
                                    </Tooltip>
                                </TooltipProvider>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="flex text-1xl w-50">
                                            <span className="truncate block w-full text-left">🎨 Creative Project</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Creative Project</p>
                                        </TooltipContent>
                                        <button className="hidden group-hover:block cursor-pointer">
                                            <span className="text-[17px]">
                                                +
                                            </span>
                                        </button>
                                    </Tooltip>
                                </TooltipProvider>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <br/><br/><br/><br/>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger className="text-1xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings icons"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Settings
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger className="text-1xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-blocks icons"><rect width="7" height="7" x="14" y="3" rx="1"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
                                Templates
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger className="text-1xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-question icons"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                Help
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="gap3">
                            <NavigationMenuTrigger className="text-1xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun visible icons"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                                Toggle theme
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </main>
    )
}
export default navbar;