import { getProfile } from "../../../lib/firebase";

export async function getServerSideProps({ query }) {
    const { profilename } = query;

    const profileDoc = await getProfile(profilename);

    let profile = null;
    let pid = null;
    if (profileDoc) {
        profile = profileDoc.data();
        pid = profileDoc.id;
    }
    return {
        props: { profile, pid },
    };
}

export default function ProfileName({ profile, pid }) {
    console.log(profile.spells);
    return (
        <main>
            <div>Name: {pid}</div>
            <div>Class: {profile.class}</div>
            {/* {profile.spells.forEach((e) => {
                return <div>e</div>;
            })} */}
            <div>
                Sorts Connus par Jour:
                <div className="ml-5">
                    {Object.keys(profile.spells).map((key) => {
                        return (
                            <div key={key}>
                                lvl. {key}: {profile.spells[key]}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
