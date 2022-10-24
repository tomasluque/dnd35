import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmixEL6NK56rdrbdRzdqzrctQNDqwvjec",
    authDomain: "donjons-dragons.firebaseapp.com",
    projectId: "donjons-dragons",
    storageBucket: "donjons-dragons.appspot.com",
    messagingSenderId: "1048270154279",
    appId: "1:1048270154279:web:b826a2699bab353c723c02",
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
