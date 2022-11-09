import Link from "next/link";

export default function Character() {
    return (
        <main>
            <div>user</div>
            <div>Active Profile</div>
            <div>Change Profile / List of Profiles</div>
            <div>New Profile</div>
            <button className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-white px-8 py-4 text-center font-bold text-neutral-800 no-underline hover:brightness-75">
                <Link href="">Yes</Link>
            </button>
        </main>
    );
}
