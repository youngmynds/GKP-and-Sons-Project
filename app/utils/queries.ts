import {
    addDoc,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    QuerySnapshot,
    deleteDoc
} from "firebase/firestore";
import db from "./firebase";
import { toast } from "react-toastify";

interface Product {
    name: string;
    category: string;
    subcategory: string;
    description: string;
    imageUrl: string;
    isImageSlider?: boolean;
    productId?: string;
}

export async function getbyCat(category: string, subcategory?: string) {
    try {
        const products = collection(db, "products");
        const q = query(
            products,
            where("category", "==", category),
            where("subcategory", "==", subcategory),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((element) => {
            element.data;
        });
        return data;
    } catch (e) {
        console.log("Error in getting products by category", e);
        return [];
    }
}

export async function addImageSlider(productId1: string) {
 try{
        const products = collection(db, "products");
        const q = query(products, where("productId", "==", productId1));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                isImageSlider: true,
            });
        });
        return toast.success("Success in adding image slider");
 }catch(e:any){
        toast.error("Error in adding image slider", e);
 }
}

export async function deleteImageSlider(productId1: string) {
    try {
        const products = collection(db, "products");
        const q = query(products, where("productId", "==", productId1));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                isImageSlider: false,
            });
        });
        return toast.success("Success in deleting image slider");
    } catch (e:any) {
        toast.error("Error in deleting image slider", e);
    }
}

export async function writebyCat(product: Product) {
    try {
        const category = product.category;
        const data = await getbyCat(category);
        const productId = category + (data.length + 1).toString();
        product = { ...product, productId: productId };
        const docRef = await addDoc(collection(db, "products"), product);
    } catch (e) {
        console.log("Error in adding product", e);
    }
}

export async function getCategories() {
    try {
        const products = collection(db, "products");
        const querySnapshot = await getDocs(products);
        let categories: Set<string> = new Set();
        querySnapshot.forEach((element) => {
            const data = element.data() as Product;
            categories.add(data.category);
        });
        console.log("Success in getting categories");
        return [...categories];
    } catch (e) {
        console.log("Error in getting categories", e);
        return [];
    }
}

export async function getSubCategories() {
    try {
        const products = collection(db, "products");
        const querySnapshot = await getDocs(products);
        let subcategories: Set<string> = new Set();
        querySnapshot.forEach((element) => {
            const data = element.data() as Product;
            subcategories.add(data.subcategory);
        });
        console.log("Success in getting subcategories");
        return Array.from(subcategories);
    } catch (e) {
        console.log("Error in getting subcategories", e);
        return [];
    }
}


export async function deleteProduct(productId1: string) {
    try {
        const products = collection(db, "products");
        const q = query(products, where("productId", "==", productId1));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach(async (doc) =>{
            await deleteDoc(doc.ref);   
        })
        return toast.success("Success in deleting product");
    } catch (e:any) {
        toast.error("Error in deleting product", e);
    }
}