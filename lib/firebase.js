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

export async function getAllSpells() {
    const collection = firestore.collection("spells");
    const snapshot = await collection.orderBy("name").get();

    const data = snapshot.docs.map((doc) => {
        let docs = doc.data();
        return { id: doc.id, ...docs };
    });

    return data;
}

export async function getSpell(id) {
    const spell = firestore.collection("spells").doc(id);
    const doc = await spell.get();

    return doc.data();
}

export async function getAllFeats() {
    const collection = firestore.collection("feats");
    const snapshot = await collection.orderBy("name").get();

    const data = snapshot.docs.map((doc) => {
        let docs = doc.data();
        return { id: doc.id, ...docs };
    });

    return data;
}

export async function getFeat(id) {
    const spell = firestore.collection("feats").doc(id);
    const doc = await spell.get();

    return doc.data();
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
