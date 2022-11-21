import {
    updateActiveProfile,
    getUserWithUsername,
} from "../../../lib/firebase";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps({ query }) {
    const { username } = query;

    const userDoc = await getUserWithUsername(username);
    let user = null;
    let uid = null;
    if (userDoc) {
        user = userDoc.data();
        uid = userDoc.id;
    }
    return {
        props: { user, uid },
    };
}

export default function ProfileList({ user, uid }) {
    const [activeProfile, setActiveProfile] = useState(user.activeProfile);

    function ProfileItem({ profile, uid }) {
        const onClick = (e) => {
            const profileName = e.target.id;
            setActiveProfile(profileName);

            updateActiveProfile(profileName, uid);
        };

        return (
            <div className="m-3 border border-black p-3">
                <div>
                    Name: <span className="font-bold">{profile}</span>
                </div>

                <button
                    id={profile}
                    onClick={onClick}
                    className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75"
                >
                    Make Active Profile
                </button>

                <Link href={`/${user.username}/profile/${profile}`}>
                    <a className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75">
                        Profile Settings
                    </a>
                </Link>
            </div>
        );
    }

    return (
        <main>
            <div className="">Active profile: {activeProfile}</div>
            {user.profileList.map((profile) => (
                <ProfileItem profile={profile} uid={uid} key={profile} />
            ))}
        </main>
    );
}
