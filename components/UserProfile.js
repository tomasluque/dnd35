import Link from "next/link";

// UI component for user profile
export default function UserProfile({ user }) {
    return (
        <div className="box-center">
            <img
                src={user.photoURL || "/hacker.png"}
                className="card-img-center"
            />
            <p>
                <i>@{user.username}</i>
            </p>
            <h1>{user.displayName || "Anonymous User"}</h1>

            <Link
                href={{
                    pathname: `${encodeURIComponent(user.username)}/character`,
                    query: { name: user.username },
                }}
            >
                <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-900 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                    Profile
                </button>
            </Link>
        </div>
    );
}
