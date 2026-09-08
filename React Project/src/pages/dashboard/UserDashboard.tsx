// import { useState } from "react";

import { NavLink, Outlet } from "react-router";
import { Icon } from "@iconify/react";


export default function UserDashboard() {

    return (
        <>
        <section>
            <div className="min-h-screen bg-gray-50">

                {/* *****************  SIDEBAR ***************** */}

                <div className="fixed top-0 left-0 z-0 h-screen w-64 bg-teal-950 text-white transition-transform duration-300 lg:translate-x-0">

                    {/* LOGO */}
                    <div className="h-20 flex items-center px-6 border-b border-white/10">
                        <div className="w-10 h-10 bg-white text-teal-950 rounded-4xl flex items-center justify-center font-bold text-xl">
                            R
                        </div>

                        <div className="ml-3">
                            <h1 className="font-bold text-lg">
                                Rakesh Admin
                            </h1>

                            <p className="text-ms text-white/50">
                                DashBoard
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-2">

                        <p className="px-3 pt-2 pb-2 text-xs uppercase tracking-wider text-white/40">
                            Main Menu
                        </p>

                        <NavLink
                            to ="/dashboardHome"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-teal-950 font-semibold"
                        >
                            <Icon icon={"akar-icons:dashboard"} width={18}/>
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/user-dashboard/usersPage"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                            <Icon icon={"flowbite:users-solid"} width={18}/>
                            Users
                        </NavLink>

                        <NavLink
                            to="/user-dashboard/products"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                            <Icon icon={"eos-icons:products"} width={18}/>
                            Products
                        </NavLink>

                        <NavLink
                            to="/user-dashboard/order"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                           <Icon icon={"fluent-mdl2:reservation-orders"} width={18}/>
                            Orders

                        </NavLink>

                        <NavLink
                            to="/user-dashboard/categories"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                           <Icon icon={"carbon:product-categories"} width={18}/>
                            Categories

                        </NavLink>

                        <NavLink
                            to="/user-dashboard/analytics"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                           <Icon icon={"fluent:data-trending-16-filled"} width={18}/>
                            Analytics
                        </NavLink>

                        <p className="px-3 pt-4 pb-2 text-xs uppercase tracking-wider text-white/40">
                            Management
                        </p>

                        <NavLink
                            to="#"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                            <Icon icon={"material-symbols:payments-outline-sharp"} width={18}/>
                            Payments
                        </NavLink>

                        <NavLink
                            to="#"
                            className="flex items-center gap-3 px-4 py-3  rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                            <Icon icon={"fontisto:player-settings"} width={18}/>
                            Settings
                        </NavLink>

                    </nav>

                    {/* Sidebar User */}

                    <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10">

                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-white text-teal-950 flex items-center justify-center font-bold">
                                RR
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-semibold">
                                    Rakesh Rawal
                                </p>

                                <p className="text-xs text-white/50">
                                    Administrator
                                </p>
                            </div>

                            <button className="text-white/50 hover:text-white">
                                ⋮
                            </button>

                        </div>

                    </div>

                </div>

                <section>

                    {/* HEADER */}
                    <header className="h-20 bg-zinc-500 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">

                        {/* Left side */}
                        <div className="flex items-center gap-4">

                        </div>

                        {/* Right side */}
                        <div className="flex items-center gap-3 justify-end">

                            {/* Search */}
                            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5">
                                <span className="text-gray-400">🔍</span>

                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent outline-none text-sm w-32"
                                />
                            </div>

                            {/* Notification */}
                            <button
                                type="button"
                                className="relative w-10 h-10 rounded-xl hover:bg-gray-100 transition"
                            >
                                🔔

                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                            </button>

                            {/* Profile */}
                            <div className="w-10 h-10 rounded-full bg-teal-950 text-white flex items-center justify-center font-semibold">
                                RR
                            </div>

                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="lg:ml-64">

                        {/* DASHBOARD BODY */}
                        <div className="p-2 sm:p-1 lg:p-4">

                            <div className="mb-4">

                                <Outlet />

                            </div>

                        </div>

                    </main>

                </section>

            </div>

        </section>

        </>
    );
};

