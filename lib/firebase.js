import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAH9g95ymfmewNoBmRfD6Y2nui_y9rb9nc",
    authDomain: "tlg-spells.firebaseapp.com",
    projectId: "tlg-spells",
    storageBucket: "tlg-spells.appspot.com",
    messagingSenderId: "922809301773",
    appId: "1:922809301773:web:c0ec50f0ae831f2c89ce44",
    measurementId: "G-XSFXWGPVB4",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export async function getAll() {
    const collection = firestore.collection("spells");
    const snapshot = await collection.get();

    const data = snapshot.docs.map((doc) => {
        let docs = doc.data();
        return { ...docs };
    });

    return data;
}

export async function getSpell(name) {
    const spell = firestore.collection("spells").doc(name);
    const doc = await spell.get();

    return doc.data();
}

export async function getUserWithUsername(username) {
    const usersRef = firestore.collection("users");
    const query = usersRef.where("username", "==", username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export async function updateActiveProfile(profile, uid) {
    console.dir({
        profile: profile,
        uid: uid,
    });

    const userDoc = firestore.doc(`users/${uid}`);
    const batch = firestore.batch();
    batch.update(userDoc, { activeProfile: profile });
    await batch.commit();
    console.log("Writing OK!");
}

export async function getProfile(profilename) {
    const profileRef = firestore.collection("profiles").doc(profilename);
    const profileDoc = await profileRef.get();
    return profileDoc;
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
