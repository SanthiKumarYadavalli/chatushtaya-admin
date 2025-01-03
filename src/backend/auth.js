import { app, firestore } from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Authentication Function
export async function signInWithGoogle() {
  const router = useRouter();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user exists in Firestore
    const userDocRef = doc(firestore, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      console.error("User not found in the database.");
      router.push("/login");
      throw new Error("Unauthorized user");
    }

    // Store user details in session storage
    const userData = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    sessionStorage.setItem("user", JSON.stringify(userData));

    console.log("User signed in and verified successfully:", user);
    router.push("/admin/dashboard");
    return user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    router.push("/login");
    throw error;
  }
}
