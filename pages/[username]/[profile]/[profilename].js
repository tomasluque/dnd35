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
            {/* <div>Name: {pid}</div>
            <div>Class: {profile.class}</div>
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
            </div> */}
            <form>
                name:
                <input
                    name="name"
                    value={pid}
                    className="m-3 inline-block w-full py-1.5 px-3 text-2xl outline-0"
                />
                class:
                <input
                    name="class"
                    value={profile.class}
                    className="m-3 inline-block w-full py-1.5 px-3 text-2xl outline-0"
                />
                Sorts Connus par Jour:
                <div className="ml-5">
                    {Object.keys(profile.spells).map((key) => {
                        return (
                            <div key={key}>
                                lvl. {key}:
                                <input
                                    name={`lvl-${key}`}
                                    value={profile.spells[key]}
                                    className="m-3 inline-block w-full py-1.5 px-3 text-2xl outline-0"
                                />
                            </div>
                        );
                    })}
                </div>
            </form>
        </main>
    );
}
