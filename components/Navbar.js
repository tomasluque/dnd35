import Link from "next/link";

// Top navbar
export default function Navbar() {
    return (
        <nav className="navbar fixed top-0 z-50 h-16 w-full border-b border-b-zinc-400 bg-white py-[10vw] font-bold text-zinc-900">
            <ul className="m-0 flex h-full items-center justify-between p-0">
                <li className="rounded-full">
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {/* {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">
                                    Write Posts
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )} */}

                {/* user is not signed OR has not created username */}
                {/* {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )} */}
            </ul>
        </nav>
    );
}
