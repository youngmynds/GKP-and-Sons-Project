"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    TextField,
    Checkbox,
    Autocomplete,
    FormControlLabel
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

const AdminPage: React.FC = () => {
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
            await deleteImageSlider(image);
            setImageSlider(imageSlider.filter((item) => item !== image));
            toast.success("Success in deleting image slider");
            setOperations("")
        } catch (e: any) {
            toast.error("Error in deleting image slider", e);
        }
    }
    async function addImage(image: string) {
        try {
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
        <>
            <div className="flex flex-row items-center justify-center space-x-5">
                <button className="bg-blue-500 text-white rounded p-2 m-2" onClick={() => setOperations('addProduct')}>Add Product</button>
                <button className="bg-blue-500 text-white rounded p-2 m-2" onClick={() => setOperations('imageSlider')}>Add in ImageSlider</button>
                <button className="bg-blue-500 text-white rounded p-2" onClick={() => setOperations('deleteProduct')}>Delete Product</button>
            </div>
            {
                (operations === 'addProduct') && (
                    <div className="flex flex-col sm:flex-row space-y-5 items-center justify-center space-x-5">
                        <Autocomplete
                            style={{ width: '216px' }}
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
                            style={{ width: '215px' }}
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
                            value={imageName}
                            onChange={(e) => setImageName(e.target.value)} />
                        <TextField
                            label="Product Description"
                            variant="outlined"
                            value={imageDescription}
                            onChange={(e) => setImageDescription(e.target.value)} />
                        <TextField
                            label="Product Image URL"
                            variant="outlined"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)} />
                        <TextField
                            label="Enter Product Size"
                            variant="outlined"
                            value={size}
                            onChange={(e) => setSize(e.target.value)} />
                        <TextField
                            label="Enter Weight of Product"
                            variant="outlined"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)} />
                        <TextField
                            label="Enter Carat of Product"
                            variant="outlined"
                            value={carat}
                            onChange={(e) => setCarat(e.target.value)} />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                if (selectedCategory === "" || selectedSubcategory === "" || imageName === "" || imageDescription === "" || imageURL === "" || carat === "" || size === "" || weight === "") {
                                    toast.error("Please fill all the fields");
                                    return;
                                }
                                writebyCat({
                                    category: selectedCategory,
                                    subcategory: selectedSubcategory,
                                    name: imageName,
                                    description: imageDescription,
                                    imageUrl: imageURL,
                                    carat: carat,
                                    size: size,
                                    weight: weight
                                });
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
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            {imageSlider.map((item) => (
                                <div key={item} className="relative">
                                    <button
                                        className="absolute top-0 right-0 bg-gray-500 text-white p-1 rounded-full"
                                        onClick={() => deleteimage(item)}
                                    >
                                        <X size={16} />
                                    </button>
                                    <img src={item} alt={item} className="w-40 h-40 object-cover rounded-lg shadow-md" />
                                </div>
                            ))}
                        </div>
                        <TextField
                            label="Image URL"
                            variant="outlined"
                            value={imageURL}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageURL(e.target.value)}
                        />
                        <button
                            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            onClick={() => { addImage(imageURL) }}
                        >
                            <Plus size={18} />
                            Add Image
                        </button>
                    </div>
                )) || (
                    (operations === 'deleteProduct') && (
                        <div className="flex flex-col items-center justify-center">
                            <Autocomplete
                                style={{ width: '215px' }}
                                options={productId}
                                freeSolo
                                renderInput={(params) => (
                                    <TextField {...params} label="Type or select ProductId" variant="outlined" />
                                )}
                                value={productId1}
                                onInputChange={(_, value) => {
                                    // Triggered when the user types in the input
                                    setProductId1(value) // Update the selected category with typed input
                                    console.log("Product Id Input Changed:", value);
                                }} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={async () => {
                                    if (productId1 === "")
                                        return toast.error("Please Select a Product");
                                    await deleteProduct(productId1);
                                    setOperations('');
                                    setProductId1('');
                                }}>Delete Product</button>
                        </div>
                    )
                )
            }

        </>
    )
};

export default AdminPage;
