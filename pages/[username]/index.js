import { getUserWithUsername } from "../../lib/firebase";
import Link from "next/link";

export async function getServerSideProps({ query }) {
    const { username } = query;

    const userDoc = await getUserWithUsername(username);
    let user = null;
    if (userDoc) {
        user = userDoc.data();
    }
    return {
        props: { user },
    };
}

export default function UserProfilePage({ user }) {
    return (
        <main>
            {/* User Profile */}
            <div className="flex flex-col content-center text-center">
                <img
                    src={user.photoURL || "/hacker.png"}
                    className="m-auto block w-1/5 max-w-[150px] rounded-full"
                />
                <p>
                    <i>@{user.username}</i>
                </p>
                <h1>{user.displayName || "Anonymous User"}</h1>
            </div>

            {user.activeProfile && (
                <>
                    <div className="">Active profile: {user.activeProfile}</div>
                </>
            )}
            {!user.activeProfile && (
                <>
                    <div className="">No Active Profile</div>
                </>
            )}

            <Link href={`/${user.username}/profile`}>
                <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                    Manage Profiles
                </button>
            </Link>

            {/* Create Profile Button */}
            <Link href={`/${user.username}/new`}>
                <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                    Create New
                </button>
            </Link>
        </main>
    );
}
