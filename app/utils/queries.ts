import { addDoc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './firebase';


interface Product {
  name: string;
  category: string;
  subcategory: string;
  description: string;
  isImageSlider?: boolean;
  productId?:string
}


export async function getbyCat(category: string, subcategory?: string) {
  const products = collection(db, 'products')
  const q = query(products, where("category", "==", category), where("subcategory", "==", subcategory));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(element =>{
    element.data
  })
  return data;
}

export async function getbyImageSlider() {
  const products = collection(db, "products")
  const q = query(products, where("isImageSlider", "==", true));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(element =>{
    element.data
  })
  return data;
}
export async function updateImageSlider(productid1: string, productid2: string) {
  const products = collection(db, "products");

  // Update product with productid1 to set isImageSlider to true
  const q1 = query(products, where("productId", "==", productid1));
  const querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach(async (doc) => {
    await updateDoc(doc.ref, { isImageSlider: true });
  });

  // Update product with productid2 to set isImageSlider to false
  const q2 = query(products, where("productId", "==", productid2));
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach(async (doc) => {
    await updateDoc(doc.ref, { isImageSlider: false });
  });
}


export async function writebyCat(product: Product) {
  const category =  product.category;
  const data = getbyCat(category);
  const productId =  category +  (await data).length
  product = {...product, productId : productId}
  const docRef = await addDoc(collection(db, "products"), product);
}

export async function getCategories() {
  const products = collection(db, "products");
  const querySnapshot = await getDocs(products);
  let categories: Set<string> = new Set();
  querySnapshot.forEach((element) => {
    const data = element.data() as Product;
    categories.add(data.category);
  });
  return [...categories];
}

export async function getSubCategories() {
  const products = collection(db, "products");
  const querySnapshot = await getDocs(products);
  let subcategories: Set<string> = new Set();
  querySnapshot.forEach((element) => {
    const data = element.data() as Product;
    subcategories.add(data.subcategory);
  });
  return Array.from(subcategories);
}