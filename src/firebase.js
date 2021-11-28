import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_wq_rjiBhQV3JiEOz7fDoXIhTcCRbaxw",
  authDomain: "quickstay-website.firebaseapp.com",
  projectId: "quickstay-website",
  storageBucket: "quickstay-website.appspot.com",
  messagingSenderId: "1064920558235",
  appId: "1:1064920558235:web:6d927c5e6b840b82d8f43e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const createUserDocument = async (uid, additionalData) => {
  if (!uid) return;

  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { phoneNo } = { additionalData };

    try {
      userRef.set({
        phoneNo
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
};

export default firebase;
