import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getProducts = async () => {
  const colRef = collection(db, "products");
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};
export const createProduct = async (product) => {
  const colRef = collection(db, "products");
  const data = await addDoc(colRef, product);
  return data.id;
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
