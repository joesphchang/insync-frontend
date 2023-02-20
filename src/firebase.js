// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCoQtjpTcC0F_LQQMxl3r1IZmJ_OLhMY1A',
	authDomain: 'insync-react-application.firebaseapp.com',
	projectId: 'insync-react-application',
	storageBucket: 'insync-react-application.appspot.com',
	messagingSenderId: '30902233509',
	appId: '1:30902233509:web:54863bd722f59398d9e04c',
	measurementId: 'G-Q8DW84R395',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
