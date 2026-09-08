
import { useState } from "react";

export default function CategoryCreate() {
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Active");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const categoryData = {
            name: categoryName,
            description,
            status,
        };

        console.log(categoryData);

        // Clear form
        setCategoryName("");
        setDescription("");
        setStatus("Active");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200">

                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-teal-950">
                        Add Category
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Create a new product category.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    {/* Category Name */}
                    <div>
                        <label
                            htmlFor="categoryName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Category Name
                        </label>

                        <input
                            id="categoryName"
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            placeholder="Enter category name"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal-900 focus:ring-1 focus:ring-teal-900"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter category description"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none resize-none focus:border-teal-900 focus:ring-1 focus:ring-teal-900"
                        />
                    </div>

                     {/* Product */}
                    <div>
                        <label
                            htmlFor="Products"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Products
                        </label>

                        <input
                            id="products"
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            placeholder="Enter Products"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal-900 focus:ring-1 focus:ring-teal-900"
                        />
                    </div>


                    {/* Status */}
                    <div>
                        <label
                            htmlFor="status"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Status
                        </label>

                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal-900 focus:ring-1 focus:ring-teal-900"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">

                        <button
                            type="button"
                            className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-3 rounded-xl bg-teal-950 text-white font-semibold hover:bg-teal-800"
                        >
                            Add Category
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};



