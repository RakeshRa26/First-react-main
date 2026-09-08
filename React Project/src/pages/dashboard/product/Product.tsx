


import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: "In Stock" | "Low Stock" | "Out of Stock";
}

const Product = () => {
    const [search, setSearch] = useState("");

    const products: Product[] = [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 59.99,
            stock: 25,
            status: "In Stock",
        },
        {
            id: 2,
            name: "Smart Watch",
            category: "Electronics",
            price: 89.99,
            stock: 8,
            status: "Low Stock",
        },
        {
            id: 3,
            name: "Running Shoes",
            category: "Fashion",
            price: 74.99,
            stock: 15,
            status: "In Stock",
        },
        {
            id: 4,
            name: "Leather Backpack",
            category: "Accessories",
            price: 45.00,
            stock: 5,
            status: "Low Stock",
        },
        {
            id: 5,
            name: "Cotton T-Shirt",
            category: "Fashion",
            price: 24.99,
            stock: 0,
            status: "Out of Stock",
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full">

            {/* ================= PAGE HEADER ================= */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Products
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your products and inventory.
                    </p>
                </div>

                {/* Add Product Button */}
                <NavLink to="/user-dashboard/product-create">
                <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-950 text-white rounded-xl font-medium hover:bg-teal-900 transition"
                >
                    <Icon icon="mdi:plus" className="text-xl" />
                    Add Product
                </button>
                </NavLink>

            </div>


            {/* ================= STAT CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

                {/* Total Products */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Total Products
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 mt-1">
                                125
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Icon
                                icon="mdi:package-variant-closed"
                                className="text-2xl"
                            />
                        </div>

                    </div>

                </div>


                {/* In Stock */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                In Stock
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 mt-1">
                                98
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                            <Icon
                                icon="mdi:check-circle-outline"
                                className="text-2xl"
                            />
                        </div>

                    </div>

                </div>


                {/* Low Stock */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Low Stock
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 mt-1">
                                17
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                            <Icon
                                icon="mdi:alert-circle-outline"
                                className="text-2xl"
                            />
                        </div>

                    </div>

                </div>


                {/* Out of Stock */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Out of Stock
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 mt-1">
                                10
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                            <Icon
                                icon="mdi:close-circle-outline"
                                className="text-2xl"
                            />
                        </div>

                    </div>

                </div>

            </div>


            {/* ================= PRODUCT TABLE ================= */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

                {/* Table Header */}
                <div className="p-5 border-b border-gray-200">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">
                                Product List
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                All products in your store
                            </p>
                        </div>


                        {/* Search */}
                        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5 w-full md:w-72">

                            <Icon
                                icon="mdi:magnify"
                                className="text-gray-400 text-xl"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search products..."
                                className="bg-transparent outline-none text-sm w-full text-gray-700"
                            />

                        </div>

                    </div>

                </div>


                {/* Responsive Table */}
                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Product
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Price
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Stock
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {filteredProducts.map((product) => (

                                <tr
                                    key={product.id}
                                    className="hover:bg-gray-50 transition"
                                >

                                    {/* Product */}
                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-3">

                                            <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                                                <Icon
                                                    icon="mdi:package-variant"
                                                    className="text-xl text-gray-500"
                                                />
                                            </div>

                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    {product.name}
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                    ID: #{product.id}
                                                </p>
                                            </div>

                                        </div>

                                    </td>


                                    {/* Category */}
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {product.category}
                                    </td>


                                    {/* Price */}
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                                        Rs. {product.price.toFixed(2)}
                                    </td>


                                    {/* Stock */}
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {product.stock}
                                    </td>


                                    {/* Status */}
                                    <td className="px-6 py-4">

                                        {product.status === "In Stock" && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                In Stock
                                            </span>
                                        )}

                                        {product.status === "Low Stock" && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                                Low Stock
                                            </span>
                                        )}

                                        {product.status === "Out of Stock" && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                                Out of Stock
                                            </span>
                                        )}

                                    </td>


                                    {/* Actions */}
                                    <td className="px-6 py-4">

                                        <div className="flex justify-end items-center gap-2">

                                            {/* View */}
                                            <button
                                                type="button"
                                                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-teal-950 transition"
                                                title="View"
                                            >
                                                <Icon icon="mdi:eye-outline" />
                                            </button>


                                            {/* Edit */}
                                            <button
                                                type="button"
                                                className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-500 hover:bg-blue-50 transition"
                                                title="Edit"
                                            >
                                                <Icon icon="mdi:pencil-outline" />
                                            </button>


                                            {/* Delete */}
                                            <button
                                                type="button"
                                                className="w-9 h-9 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition"
                                                title="Delete"
                                            >
                                                <Icon icon="mdi:delete-outline" />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-12 text-center">

                        <Icon
                            icon="mdi:package-variant-remove"
                            className="mx-auto text-5xl text-gray-300"
                        />

                        <p className="mt-3 text-gray-500">
                            No products found.
                        </p>

                    </div>
                )}


                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-5 border-t border-gray-200">

                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium text-gray-700">1</span> to{" "}
                        <span className="font-medium text-gray-700">
                            {filteredProducts.length}
                        </span>{" "}
                        of <span className="font-medium text-gray-700">125</span> products
                    </p>

                    <div className="flex items-center gap-2">

                        <button
                            type="button"
                            className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50"
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            className="w-9 h-9 rounded-lg bg-teal-950 text-white text-sm"
                        >
                            1
                        </button>

                        <button
                            type="button"
                            className="w-9 h-9 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                        >
                            2
                        </button>

                        <button
                            type="button"
                            className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                        >
                            Next
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Product;