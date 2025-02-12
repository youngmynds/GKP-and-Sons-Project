"use client";

import React, { useEffect, useState } from "react";
import {
    TextField,
    Autocomplete,
} from "@mui/material";
import { X, Plus } from "lucide-react";
import { toast } from "react-hot-toast";
import {
    getCategories,
    getSubCategories,
    writebyCat,
    getImageSlider,
    deleteImageSlider,
    deleteProduct,
    getProductId,
    addImageSlider
} from "../utils/queries";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";

const AdminPage: React.FC = () => {
    const router = useRouter();
    const [operations, setOperations] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [subcategories, setSubcategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
    const [imageName, setImageName] = useState<string>("");
    const [imageDescription, setImageDescription] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");
    const [productId, setproductId] = useState<string[]>([]);
    const [imageSlider, setImageSlider] = useState<string[]>([]);
    const [productId1, setProductId1] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [carat, setCarat] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [weight, setWeight] = useState<string>("");

    const validurl = (image) => {
        try {
            const url = new URL(image)
            return true;
        } catch (e) {
            return false;
        }
    }

    useEffect(() => {
        const auth = secureLocalStorage.getItem("auth")
        if (!auth)
            router.push('/login')
    }, [])

    useEffect(() => {
        if (operations === 'addProduct') {
            getCategories().then((data) => setCategories(data));
            getSubCategories().then((data) => setSubcategories(data));
        }
        if (operations === 'deleteProduct') {
            getProductId().then((data) => {
                console.log(data);
                setproductId(data as string[]);
            });
        }
        if (operations === 'imageSlider') {
            getImageSlider().then((data) => {
                setImageSlider(data as string[]);
            });
        }
    }, [operations]);

    async function deleteimage(image: string) {
        try {
          if (imageSlider.length == 2) return toast.error("Cannot delete lesser than 2 images")
            await deleteImageSlider(image);
            console.log("deleteImageSlider called successfully");

            setImageSlider((prev) => prev.filter((item) => item !== image));
            toast.success("Success in deleting image slider");
        } catch (e: any) {
            console.error("Error in deleteimage:", e);
            toast.error("Error in deleting image slider: " + e.message);
        }
    }

    async function addImage(image: string) {
        try {
            if (image === "") return toast.error("Add image URL")
            if (!validurl(image)) return toast.error("Enter valid URL");

            await addImageSlider(image);
            toast.success("Success in adding image slider");
            setImageSlider([...imageSlider, image]);
            setImageURL("");
            setOperations("")
        } catch (e: any) {
            toast.error("Error in adding image slider", e);
        }
    }

    return (
        secureLocalStorage.getItem("auth") === "true" &&
        <>
            {/* Sidebar */}
            <div className="bg-blue-600 text-white py-8 px-4 shadow-md w-[20%] h-screen fixed flex flex-col justify-between items-center">
                <div className="w-full">
                    <p className="text-xl mb-20">Admin Page <br /> <span className="text-2xl font-bold">GKP & Son's Jewellers</span> </p>

                    <div className="flex flex-col space-y-4 items-center">
                        <button className="px-4 py-2 bg-white text-blue-600 rounded shadow w-full"
                            onClick={() => setOperations('addProduct')}>
                            Add Product
                        </button>
                        <button className="px-4 py-2 bg-white text-blue-600 rounded shadow w-full"
                            onClick={() => setOperations('imageSlider')}>
                            Add ImageSlider
                        </button>
                        <button className="px-4 py-2 bg-white text-blue-600 rounded shadow w-full"
                            onClick={() => setOperations('deleteProduct')}>
                            Delete Product
                        </button>
                    </div>
                </div>

                {/* Logout Button */}
                <button className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded shadow w-full mb-10" onClick={() => {
                    secureLocalStorage.removeItem("auth");
                    router.push("/")
                }}
                >
                    Logout
                </button>
            </div>

            {
                (operations === 'addProduct') && (
                    <div className="ml-52 flex flex-col space-y-5 items-center justify-center">
                        <div className="mt-5">

                        </div>
                        <Autocomplete
                            style={{ width: '50%' }}
                            options={categories}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Type or select Categories" variant="outlined" />
                            )}
                            onInputChange={(_, value) => {
                                // Triggered when the user types in the input
                                setSelectedCategory(value); // Update the selected category with typed input
                                console.log("Input Changed:", value);
                            }}
                            value={selectedCategory}
                        />
                        <Autocomplete
                            style={{ width: '50%' }}
                            options={subcategories}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Type or select Subcategories" variant="outlined" />
                            )}
                            value={selectedSubcategory}
                            onInputChange={(_, value) => {
                                // Triggered when the user types in the input
                                setSelectedSubcategory(value); // Update the selected category with typed input
                                console.log("Subcat Input Changed:", value);
                            }} />
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            className="w-[50%]"
                            value={imageName}
                            onChange={(e) => setImageName(e.target.value)} />
                        <TextField
                            label="Product Description"
                            variant="outlined"
                            className="w-[50%]"
                            value={imageDescription}
                            onChange={(e) => setImageDescription(e.target.value)} />
                        <TextField
                            label="Product Image URL"
                            variant="outlined"
                            className="w-[50%]"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)} />
                        <TextField
                            label="Enter Product Size"
                            variant="outlined"
                            className="w-[50%]"
                            value={size}
                            onChange={(e) => setSize(e.target.value)} />
                        <TextField
                            label="Enter Weight of Product"
                            variant="outlined"
                            className="w-[50%]"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)} />
                        <TextField
                            label="Enter Carat of Product"
                            variant="outlined"
                            className="w-[50%]"
                            value={carat}
                            onChange={(e) => setCarat(e.target.value)} />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-1/2"
                            onClick={async () => {
                                if (selectedCategory === "" || selectedSubcategory === "" || imageName === "" || imageDescription === "" || imageURL === "" || carat === "" || size === "" || weight === "") {
                                    toast.error("Please fill all the fields");
                                    return;
                                }
                                if (!validurl(imageURL)) return toast.error("Enter Valid URL");

                                await writebyCat({
                                    category: selectedCategory,
                                    subcategory: selectedSubcategory,
                                    name: imageName,
                                    description: imageDescription,
                                    imageUrl: imageURL,
                                    carat: carat,
                                    size: size,
                                    weight: weight
                                });
                                toast.success("Product added successfully");
                                setCarat("");
                                setSize("");
                                setWeight("");
                                setOperations("");
                                setImageName("");
                                setImageDescription("");
                                setImageURL("");
                                setSelectedCategory("");
                                setSelectedSubcategory("");
                            }}>Add Product</button>
                    </div>
                ) || ((operations === 'imageSlider') && (
                    <div className="ml-52 justify-center items-center flex flex-col space-y-4">
                        <div className="flex flex-col items-center justify-center space-y-4 mt-10">

                            <TextField
                                label="Image URL"
                                variant="outlined"
                                value={imageURL}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageURL(e.target.value)}
                                style={{ width: '50%' }}
                            />
                            <button
                                className="flex justify-center items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-1/2"
                                onClick={() => { addImage(imageURL) }}
                            >
                                <Plus size={18} />
                                Add Image
                            </button>
                            <div className="flex flex-wrap justify-center gap-4">
                                {imageSlider?.map((item) => (
                                    <div key={item} className="relative" style={{ width: '50%' }}>
                                        <button
                                            className="absolute top-2 right-2 bg-gray-500 text-white p-1 rounded-full"
                                            onClick={() => deleteimage(item)}
                                        >
                                            <X size={20} />
                                        </button>
                                        <img src={item} alt={item} className="w-full h-auto object-cover rounded-lg shadow-md" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )) || (
                    (operations === 'deleteProduct') && (
                        <div className="ml-52 flex flex-col items-center justify-center space-y-4">
                            <div className="mt-6"></div>
                            <Autocomplete
                                style={{ width: '50%' }}
                                options={productId}
                                freeSolo
                                renderInput={(params) => (
                                    <TextField {...params} label="Type or Select Product ID" variant="outlined" />
                                )}
                                value={productId1}
                                onInputChange={(_, value) => {
                                    setProductId1(value)
                                    console.log("Product Id Input Changed:", value);
                                }} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                style={{ width: '50%' }}
                                onClick={async () => {
                                    if (productId1 === "")
                                        return toast.error("Please Select a Product");
                                    await deleteProduct(productId1);
                                    setOperations('');
                                    setProductId1('');
                                    toast.success("Product Deleted Successfully")
                                }}>Delete Product</button>
                        </div>
                    )
                )
            }
        </>
    )
};

export default AdminPage;
