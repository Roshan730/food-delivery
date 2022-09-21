import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBI5o1AYWJ3gh3OeNxm-bKh0OtZtU7tAQg",
  authDomain: "food-delivery-app-a8e41.firebaseapp.com",
  databaseURL: "https://food-delivery-app-a8e41-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-a8e41",
  storageBucket: "food-delivery-app-a8e41.appspot.com",
  messagingSenderId: "562108387140",
  appId: "1:562108387140:web:92fcaa28370ce75e181111",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
