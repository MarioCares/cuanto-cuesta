import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export const getProducts = async (userId) => {
  const colRef = collection(db, "products");
  const result = await getDocs(query(colRef, where("userId", "==", userId)));
  return getArrayFromCollection(result);
};

export const createProduct = async (product) => {
  const colRef = collection(db, "products");
  const data = await addDoc(colRef, product);
  return data.id;
};

export const updateProduct = async (id, product) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, product);
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
