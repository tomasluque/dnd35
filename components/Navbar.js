import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars4Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed bottom-8 right-8 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <Bars4Icon
                            className="-mx-1 h-8 w-8 text-slate-200 hover:text-slate-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 bottom-16 mt-2 w-56 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-sky-500 text-white"
                                                    : "text-slate-900"
                                            } group flex w-full items-center rounded-md px-2 py-2`}
                                        >
                                            Accueil
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/spell">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-sky-500 text-white"
                                                    : "text-slate-900"
                                            } group flex w-full items-center rounded-md px-2 py-2`}
                                        >
                                            Sorts
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/feat">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-sky-500 text-white"
                                                    : "text-slate-900"
                                            } group flex w-full items-center rounded-md px-2 py-2`}
                                        >
                                            Dons
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
