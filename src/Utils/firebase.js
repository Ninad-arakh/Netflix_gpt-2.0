// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3b6tmFtlDJzibZgo08U2ZpkX2yeR0o_0",
  authDomain: "netflix-gpt-a7c89.firebaseapp.com",
  projectId: "netflix-gpt-a7c89",
  storageBucket: "netflix-gpt-a7c89.appspot.com",
  messagingSenderId: "855298390531",
  appId: "1:855298390531:web:2d90d952bb518610fdec36",
  measurementId: "G-1K9JMLLWN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCSSeXtc-di-jL_YZ6KUqYNzNfwVJ3uqmk",
//   authDomain: "netflix-gpt-ca00b.firebaseapp.com",
//   projectId: "netflix-gpt-ca00b",
//   storageBucket: "netflix-gpt-ca00b.appspot.com",
//   messagingSenderId: "611612165841",
//   appId: "1:611612165841:web:1341542472316bbab167f0",
//   measurementId: "G-GF0H8WMQJ2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





// old project config
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAAs2fbMayKzqaY6N7cP60EqQ9tbS5US-Q",
//   authDomain: "netflix-gpt-177.firebaseapp.com",
//   projectId: "netflix-gpt-177",
//   storageBucket: "netflix-gpt-177.appspot.com",
//   messagingSenderId: "282695395801",
//   appId: "1:282695395801:web:cfad769c760bfeef0e11c8",
//   measurementId: "G-3QYSC2WRE2"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

export const auth = getAuth();
