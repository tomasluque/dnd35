import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

// Top navbar
export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="fixed top-0 z-50 h-16 w-full border-b border-b-zinc-400 bg-white px-[10vw] font-bold text-zinc-900">
            <ul className="m-0 flex h-full items-center justify-between p-0">
                <li className="rounded-full">
                    <Link href="/">
                        <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-neutral-900 px-4 py-2 text-center text-2xl font-bold uppercase text-white no-underline hover:brightness-75">
                            FEED
                        </button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {username && (
                    <>
                        <li className="ml-auto rounded-full">
                            <Link href="/admin">
                                <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                                    Write Posts
                                </button>
                            </Link>
                        </li>
                        <li className="rounded-full">
                            <Link href={`/${username}`}>
                                <img
                                    className="h-12 w-12 cursor-pointer rounded-full"
                                    src={user?.photoURL}
                                />
                            </Link>
                        </li>
                    </>
                )}
                {/* user is not signed OR has not created username */}
                {!username && (
                    <li className="rounded-full">
                        <Link href="/enter">
                            <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                                Log in
                            </button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
