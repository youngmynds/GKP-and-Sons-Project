"use client";
import { useState, useEffect } from "react";
import {getCategories , getSubCategories } from '../utils/queries'

const AdminPage = () => {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [operation, setOperation] = useState("");
    const [subCategoryItems, setSubCategoryItems] = useState<string[]>([]);
    const Items = [
        { src: "/pendants.png", title: "PENDANTS" },
        { src: "/chains.png", title: "CHAINS" },
        { src: "/bangles.png", title: "BANGLES" },
        { src: "/necklaces.png", title: "NECKLACES" },
    ];

    useEffect(() => {
        const fetchCategories = async () => {
            const categories : string[] = await getCategories();
            setSubCategoryItems(categories);
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Admin Page</h1>
            {/* <div className="flex flex-row items-center justify-center">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled>
                        Select Category
                    </option>
                    {Items.map((item) => (
                        <option key={item.title} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
                {category && (
                    <select
                        value={subcategory}
                        onChange={(e) => setSubcategory(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Subcategory
                        </option>
                        {subCategoryItems.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                )}
            </div> */}
            <div className="flex flex-row items-center justify-center m-5 space-x-5">
                <button
                    className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300"
                    onClick={() => setOperation("Add")}
                >
                    Add Image 
                </button>
                <button
                    className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300"
                    onClick={() => setOperation("Delete")}
                >
                    Delete
                </button>
            </div>
            {operation === "Add" && (
                <div className="flex flex-col items-center justify-center">
                    <input type="text" placeholder="Add Image URL" />
                    <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300">
                        Add
                    </button>
                </div>
            )}
            {operation === "Delete" && (
                <div className="flex flex-col items-center justify-center">
                    <input type="text" placeholder="Delete Image URL" />
                    <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300">
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
