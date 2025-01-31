import {
    addDoc,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    QuerySnapshot,
    deleteDoc,
    doc
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
        let q: any;
        if (subcategory) {
            q = query(
                products,
                where("category", "==", category),
                where("subcategory", "==", subcategory)
            );
        } else {
            q = query(
                products,
                where("category", "==", category)
            );
        }
        const querySnapshot = await getDocs(q);
        let data: Product[] = [];
        querySnapshot.docs.forEach((doc) => {
            data.push(doc.data() as Product);
        })
        console.log(data)
        return data;
    } catch (e) {
        console.log("Error in getting products by category", e);
        return [];
    }
}

export async function addImageSlider(imageUrl: string) {
    try {
        const products = collection(db, "imageSlider");
        await addDoc(products, { imageUrl: imageUrl });
        return toast.success("Success in adding image slider");
    } catch (e: any) {
        toast.error("Error in adding image slider", e);
    }
}

export async function deleteImageSlider(imageUrl: String) {
    try {
        console.log(imageUrl)
        const products = collection(db, "imageSlider");
        const q = query(products, where("imageUrl", "==", imageUrl));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
            console.log(doc.data())
            await deleteDoc(doc.ref);
        });
        toast.success("Success in deleting image slider");
        return;
    } catch (e: any) {
        toast.error("Error in deleting image slider", e);
    }
}

export async function getImageSlider() {
    try {
        const imageSlider = collection(db, "imageSlider");
        const q = query(imageSlider);

        const querySnapshot = await getDocs(q);
        let data: String[] = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data().imageUrl);
        })
        return data;

    } catch (e: any) {
        toast.error("Error in getting image slider", e);
    }
}
export async function writebyCat(product: Product) {
    try {
        const category = product.category;
        const data: Product[] = await getbyCat(category);
        console.log(data);
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
        let q = query(products, where("productId", "==", productId1));
        let querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
        return toast.success("Success in deleting product");
    } catch (e: any) {
        toast.error("Error in deleting product", e);
    }
}

export async function getProductId() {
    try {
        const products = collection(db, "products");
        const querySnapshot = await getDocs(products);
        let data = new Set();
        querySnapshot.forEach((doc) => {
            data.add(doc.data().productId);
        });

        return [...data];
    } catch (e) {
        console.log("Error in getting products", e);
        return [];
    }
}

export async function getProduct(productId: string) {
    try {
        const products = collection(db, "products");
        const q = query(products, where("productId", "==", productId));
        const querySnapshot = await getDocs(q);
        let data: Product = querySnapshot.docs[0].data() as Product;
        return data;
    } catch (e) {
        console.log("Error in getting product", e);
        return null;
    }
}