// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts("/__/firebase/7.15.0/firebase-app.js");
importScripts("/__/firebase/7.15.0/firebase-messaging.js");
importScripts("/__/firebase/init.js");



// var firebaseConfig = {
//   apiKey: "AIzaSyBhaLuojSQ2xynUtW5V_bi1wXAcQc7lb5E",
//   authDomain: "fir-message-app-c212f.firebaseapp.com",
//   databaseURL: "https://fir-message-app-c212f.firebaseio.com",
//   projectId: "fir-message-app-c212f",
//   storageBucket: "fir-message-app-c212f.appspot.com",
//   messagingSenderId: "935591005061",
//   appId: "1:935591005061:web:8aad9a618b3378321392ec",
//   measurementId: "G-P0F9RD8S9P",
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messaging = firebase.messaging();
// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
// [END background_handler]
