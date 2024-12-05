import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const config = {
    apiKey: "AIzaSyDcwlkH_ki13oVD_Bir9nt7FSWb-PfWPrM",
    authDomain: "myplanner-4a8b0.firebaseapp.com",
    projectId: "myplanner-4a8b0",
    storageBucket: "myplanner-4a8b0.firebasestorage.app",
    messagingSenderId: "226636195415",
    appId: "1:226636195415:web:9f43b1f5d48d11ca0d6512"
};

const app = initializeApp(config);

//  Firebase Authentication
export const auth = getAuth(app);

// Function to log in the user
export async function loginUser(username: string, password: string) {
    try {
        const res = await signInWithEmailAndPassword(auth, username, password);
        console.log('User logged in successfully:', res);
        return true;
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
}

// Function to register a new user
export async function registerUser(email: string, password: string) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered successfully:', res);
        return true;
    } catch (error) {
        console.error('Error registering user:', error);
        return false;
    }
}

export default app;
