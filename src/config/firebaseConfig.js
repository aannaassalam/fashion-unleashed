import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyCRdSeP3vV4AOb2yUVCe0G8KtC6TVpCxSw",
	authDomain: "fashion-unleased.firebaseapp.com",
	projectId: "fashion-unleased",
	storageBucket: "fashion-unleased.appspot.com",
	messagingSenderId: "557839037535",
	appId: "1:557839037535:web:5e2499ea79982f16fad7ea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
