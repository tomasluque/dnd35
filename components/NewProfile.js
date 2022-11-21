import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { useEffect, useState, useCallback, useContext } from "react";
import { UserContext } from "../lib/context";
import debounce from "lodash.debounce";

export default function NewProfile() {
    // Username form

    return (
        <div className="flex flex-col content-center text-center">
            {/* Active profile: {user.activeprofile} */}
            <NewProfileForm />
        </div>
    );
}

function NewProfileForm() {
    const { user, username } = useContext(UserContext);
    const [profileName, setProfileName] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // Data from form
        setProfileName(e.target.profileName.value);

        // Create refs for both documents
        const userDoc = firestore.doc(`users/${user.uid}`);
        const profileDoc = firestore.doc(`profiles/${profileName}`);

        // Read actual array + push new data
        const doc = await userDoc.get();
        let data = doc.data().profileList;
        data.push(profileName);

        // Batch update
        const batch = firestore.batch();
        batch.update(userDoc, { profileList: data });
        batch.set(profileDoc, { uid: user.uid });
        await batch.commit();
    };

    useEffect(() => {
        checkProfileName(profileName);
    }, [profileName]);

    const checkProfileName = useCallback(
        debounce(async (profileName) => {
            if (profileName.length >= 3) {
                const ref = firestore.doc(`profiles/${profileName}`);
                const { exists } = await ref.get();
                console.log("Firestore read executed!");
                setIsValid(!exists);
                setLoading(false);
            }
        }, 500),
        []
    );

    const onChange = (e) => {
        // Force form value typed in form to match correct format
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        // Only set form value if length is < 3 OR it passes regex
        if (val.length < 3) {
            setProfileName(val);
            setLoading(false);
            setIsValid(false);
        }

        if (re.test(val)) {
            setProfileName(val);
            setLoading(true);
            setIsValid(false);
        }
    };

    return (
        <section>
            <h3 className="text-xl">Choose Profile Name</h3>
            <form onSubmit={onSubmit}>
                <input
                    name="profileName"
                    placeholder="profile name"
                    className="inline-block w-full py-1.5 px-3 text-2xl outline-0"
                    value={profileName}
                    onChange={onChange}
                />
                <ProfileNameMessage
                    profileName={profileName}
                    isValid={isValid}
                    loading={loading}
                />
                <button
                    type="submit"
                    className="mt-2 mr-4 mb-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-4 py-2 text-center font-bold text-white no-underline hover:brightness-75"
                >
                    Choose
                </button>
            </form>
        </section>
    );
}

function ProfileNameMessage({ profileName, isValid, loading }) {
    if (loading) {
        return <p>Checking...</p>;
    } else if (isValid) {
        return (
            <p className="text-left font-bold text-green-600">
                {profileName} is available!
            </p>
        );
    } else if (profileName && !isValid) {
        return (
            <p className="text-left font-bold text-red-600">
                That profile name is taken!
            </p>
        );
    } else {
        return <p></p>;
    }
}
