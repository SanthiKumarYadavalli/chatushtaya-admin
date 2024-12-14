import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, doc, deleteDoc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore, storage } from "./firebase";

const auth = getAuth();

export const userReportCounts = async (id) => {
  const reports = await fetchReportsByUserId(id);
  const reportedIncidents = reports.length;
  const anonymousReports = reports.filter((report) => report.anonymous).length;
  return { reportedIncidents, anonymousReports };
};

export const loginUser = async (data) => {
  const { email, password } = data;
  try {
    const userCollection = collection(firestore, "admin-data");
    const q = query(userCollection, where("email", "==", email, "password", "==", password));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("Not logged.");
    }
    // Store user data locally
    localStorage.setItem("user", JSON.stringify({email, isSuper: querySnapshot.docs[0].issuper}));
    // Return stored user
    return true;
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error;
  }
};

// export const registerUser = async (data) => {
//   const { email, password } = data;
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getStoredUser = async () => {
//   try {
//     const user = await AsyncStorage.getItem("user");
//     // console.log("getstore", user);
//     return user ? JSON.parse(user) : null;
//   } catch (error) {
//     throw error;
//   }
// };

// export const logoutUser = async () => {
//   try {
//     await AsyncStorage.removeItem("user"); // Remove user from local storage
//   } catch (error) {
//     throw error;
//   }
// };

const fetchReportsByUserId = async (userId) => {
  try {
    const reportsRef = collection(firestore, "reports");
    const q = query(reportsRef, where("userId", "==", id));
    const querySnapshot = await getDocs(q);

    const reports = [];
    querySnapshot.forEach((doc) => {
      reports.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched Reports:", reports);
    return reports;
  } catch (error) {
    console.error("Error fetching reports by userId:", error);
    throw error;
  }
};

export const fetchReportsByQuery = async (filters) => {
  try {
    const reportsRef = collection(firestore, "reports");

    // Create query dynamically based on filters
    let q = reportsRef;

    if (filters.location) {
      q = query(q, where("location", "==", filters.location));
    }
    if (filters.status) {
      q = query(q, where("status", "==", filters.status));
    }
    if (filters.type) {
      q = query(q, where("type", "==", filters.type));
    }
    if (filters.description) {
      q = query(q, where("description", "==", filters.description));
    }
    if (filters.place) {
      q = query(q, where("place", "==", filters.place));
    }
    if (filters.additionalInformation) {
      q = query(
        q,
        where("additionalInformation", "==", filters.additionalInformation)
      );
    }

    const querySnapshot = await getDocs(q);

    const reports = [];
    querySnapshot.forEach((doc) => {
      reports.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched Reports:", reports);
    return reports;
  } catch (error) {
    console.error("Error fetching reports by query:", error);
    throw error;
  }
};

export const fetchAllReports = async () => {
  try {
    const reportsCollection = collection(firestore, "reports");
    const reportSnapshot = await getDocs(reportsCollection);
    const reportsList = reportSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return reportsList;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};

export const updateReport = async (reportId, updatedData) => {
  try {
    const reportRef = doc(firestore, "reports", reportId);
    await updateDoc(reportRef, updatedData);
    console.log("Report updated successfully!");
  } catch (error) {
    console.error("Error updating report:", error);
    throw error;
  }
};

export const deleteReport = async (reportId) => {
  try {
    const reportRef = doc(firestore, "reports", reportId);
    await deleteDoc(reportRef);
    console.log("Report deleted successfully!");
  } catch (error) {
    console.error("Error deleting report:", error);
    throw error;
  }
};

export const addContact = async (contact) => {
  try {
    const contactsCollection = collection(firestore, "contacts");
    await addDoc(contactsCollection, contact);
    console.log("Contact added successfully!");
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

export const updateContact = async (contactId, updatedData) => {
  try {
    const contactRef = doc(firestore, "contacts", contactId);
    await updateDoc(contactRef, updatedData);
    console.log("Contact updated successfully!");
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const contactRef = doc(firestore, "contacts", contactId);
    await deleteDoc(contactRef);
    console.log("Contact deleted successfully!");
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};

export const fetchContacts = async () => {
  try {
    const contactsCollection = collection(firestore, "contacts");
    const contactSnapshot = await getDocs(contactsCollection);
    const contactsList = contactSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return contactsList;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};
