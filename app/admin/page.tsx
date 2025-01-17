"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    CircularProgress,
} from "@mui/material";
import { toast } from "react-hot-toast";
import {
    getbyCat,
    getCategories,
    getSubCategories,
    writebyCat,
    updateImageSlider,
} from "../utils/queries";

const AdminPage: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [subcategories, setSubcategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
    const [newCategory, setNewCategory] = useState<string>("");
    const [newSubcategory, setNewSubcategory] = useState<string>("");
    const [imageName, setImageName] = useState<string>("");
    const [imageDescription, setImageDescription] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");
    const [productId1, setProductId1] = useState<string>("");
    const [productId2, setProductId2] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const categories = await getCategories();
                const subcategories = await getSubCategories();
                setCategories(categories);
                setSubcategories(subcategories);
            } catch (error) {
                toast.error("Failed to load categories or subcategories.");
            }
        };
        loadData();
    }, []);

    const handleAddProduct = async () => {
        if (newCategory && selectedCategory) {
            return toast.error(
                "Select either a category from the dropdown or enter a new category, not both!",
            );
        }
        if (newSubcategory && selectedSubcategory) {
            return toast.error(
                "Select either a subcategory from the dropdown or enter a new subcategory, not both!",
            );
        }
        if (newCategory == "" && selectedCategory == "") {
            return toast.error("Please select or enter a category.");
        }
        if (!newSubcategory && !selectedSubcategory) {
            return toast.error("Please select or enter a subcategory.");
        }
        if (!imageName || !imageDescription || !imageURL) {
            return toast.error(
                "Please fill out all the required fields for the product.",
            );
        }

        setLoading(true);
        try {
            const category = newCategory || selectedCategory;
            const subcategory = newSubcategory || selectedSubcategory;

            const product = {
                name: imageName,
                category,
                subcategory,
                description: imageDescription,
                isImageSlider: false,
            };

            await writebyCat(product);
            toast.success("Product added successfully!");
            setImageName("");
            setImageDescription("");
            setImageURL("");
            setNewCategory("");
            setNewSubcategory("");
            setSelectedCategory("");
            setSelectedSubcategory("");
        } catch (error) {
            toast.error("Failed to add product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateImageSlider = async () => {
        if (!productId1 || !productId2) {
            return toast.error("Please enter both Product IDs.");
        }

        setLoading(true);
        try {
            await updateImageSlider(productId1, productId2);
            toast.success("Image slider updated successfully!");
            setProductId1("");
            setProductId2("");
        } catch (error) {
            toast.error("Failed to update the image slider. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ padding: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                Admin Page
            </Typography>

            {/* Add New Product Section */}
            <Box sx={{ marginBottom: "2rem" }}>
                <Typography variant="h6">Add New Image to Category</Typography>

                <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <InputLabel>Select Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        disabled={!!newCategory}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="New Category (Optional)"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    disabled={!!selectedCategory}
                />

                <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <InputLabel>Select Subcategory</InputLabel>
                    <Select
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        disabled={!!newSubcategory}
                    >
                        {subcategories.map((subcategory) => (
                            <MenuItem key={subcategory} value={subcategory}>
                                {subcategory}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="New Subcategory (Optional)"
                    value={newSubcategory}
                    onChange={(e) => setNewSubcategory(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    disabled={!!selectedSubcategory}
                />

                <TextField
                    fullWidth
                    label="Image Name"
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    required
                />

                <TextField
                    fullWidth
                    label="Image Description"
                    value={imageDescription}
                    onChange={(e) => setImageDescription(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    required
                />

                <TextField
                    fullWidth
                    label="Image URL"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    required
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddProduct}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Add Product"}
                </Button>
            </Box>

            {/* Update Image Slider Section */}
            <Box sx={{ marginBottom: "2rem" }}>
                <Typography variant="h6">Update Image Slider</Typography>

                <TextField
                    fullWidth
                    label="Product ID 1 (Set as Slider)"
                    value={productId1}
                    onChange={(e) => setProductId1(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    required
                />

                <TextField
                    fullWidth
                    label="Product ID 2 (Unset as Slider)"
                    value={productId2}
                    onChange={(e) => setProductId2(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                    required
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdateImageSlider}
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress size={24} />
                    ) : (
                        "Update Image Slider"
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default AdminPage;
