import { useState } from "react";
import { NavLink } from "react-router";
import TableRowSkeleton from "../../../components/ui/tabel/Skeleton";



type Category = {
    id: number;
    name: string;
    description: string;
    products: number;
    status: "Active" | "Inactive";
    created: string;
};

const categories: Category[] = [
    {
        id: 1,
        name: "Electronics",
        description: "Electronic devices and accessories",
        products: 125,
        status: "Active",
        created: "Sep 01, 2026",
    },
    {
        id: 2,
        name: "Clothing",
        description: "Men and women clothing",
        products: 85,
        status: "Active",
        created: "Aug 28, 2026",
    },
    {
        id: 3,
        name: "Shoes",
        description: "Sports and casual footwear",
        products: 64,
        status: "Active",
        created: "Aug 25, 2026",
    },
    {
        id: 4,
        name: "Furniture",
        description: "Home and office furniture",
        products: 42,
        status: "Inactive",
        created: "Aug 20, 2026",
    },
    {
        id: 5,
        name: "Books",
        description: "Educational and entertainment books",
        products: 96,
        status: "Active",
        created: "Aug 15, 2026",
    },
    {
        id: 6,
        name: "Sports",
        description: "Sports equipment and accessories",
        products: 38,
        status: "Active",
        created: "Aug 10, 2026",
    },
    {
        id: 7,
        name: "Beauty",
        description: "Beauty and personal care products",
        products: 57,
        status: "Inactive",
        created: "Aug 05, 2026",
    },
];

const CategoryPage = () => {

    const [loading, setLoading] = useState(true);

    // Just for testing skeleton
    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-teal-950">
                        Categories
                    </h1>

                    <p className="text-sm text-gray-500">
                        Manage your product categories.
                    </p>
                </div>

                <NavLink to="/user-dashboard/category-create">
                <button className="bg-teal-950 hover:bg-teal-800 text-white px-5 py-3 rounded-xl font-semibold">
                    + Add Category
                </button>
                </NavLink>

            </div>

            {/* Search and Filter */}
            <div className="p-5 border-b flex gap-3">
                <input
                    type="text"
                    placeholder="Search categories..."
                    className="w-64 px-4 py-3 border border-teal-500 rounded-xl outline-none focus:border-teal-900"
                />

                <select className="px-4 py-3 border border-gray-600 rounded-xl outline-none">
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-2">

                    {/* Table Header */}
                    <thead className="bg-gray-50 border-2">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Category
                            </th>

                            <th className="px-6 py-4 text-left">
                                Description
                            </th>

                            <th className="px-6 py-4 text-left">
                                Products
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-left">
                                Created
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y">

                        {loading ? (
                            <TableRowSkeleton
                                rows={7}
                                cols={5}
                            />
                        ) : (
                            categories.map((category) => (
                                <tr
                                    key={category.id}
                                    className="hover:bg-gray-50"
                                >

                                    {/* Category */}
                                    <td className="px-6 py-4 font-semibold text-gray-800">
                                        {category.name}
                                    </td>

                                    {/* Description */}
                                    <td className="px-6 py-4 text-gray-600">
                                        {category.description}
                                    </td>

                                    {/* Products */}
                                    <td className="px-6 py-4 text-gray-600">
                                        {category.products}
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                category.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                            {category.status}
                                        </span>

                                    </td>

                                    {/* Created */}
                                    <td className="px-6 py-4 text-gray-600">
                                        {category.created}
                                    </td>

                                </tr>
                            ))
                        )}

                    </tbody>

                </table>

                {/* Pagination */}
                <div className="w-full flex justify-end gap-3 py-4">

                    <ul className="flex gap-3">

                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold">
                            <NavLink to="#">&lt;</NavLink>
                        </li>

                        <li className="size-8 bg-teal-950 text-white flex items-center justify-center rounded-full shadow-lg text-lg font-semibold">
                            <NavLink to="#">1</NavLink>
                        </li>

                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold">
                            <NavLink to="#">2</NavLink>
                        </li>

                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold">
                            <NavLink to="#">&gt;</NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default CategoryPage;