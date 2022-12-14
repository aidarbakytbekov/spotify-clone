import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClJiRLQR_RFNITZdxzicLLD_iS9b9YXRE',
  authDomain: 'spotify-clone-8c805.firebaseapp.com',
  projectId: 'spotify-clone-8c805',
  storageBucket: 'spotify-clone-8c805.appspot.com',
  messagingSenderId: '968668276142',
  appId: '1:968668276142:web:8f5adc92ecf5ce5278143f',
  measurementId: 'G-PN699DY46S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
