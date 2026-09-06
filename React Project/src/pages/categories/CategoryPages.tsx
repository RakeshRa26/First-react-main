import TableRowSkeleton from "../../components/ui/tabel/Skeleton";


const CategoryPage = () => {
    return (


        <div className="min-h-screen bg-gray-50 p-6">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-teal-950">
                        Categories
                    </h1>

                    <p className="text-sm  text-gray-500">
                        Manage your product categories.
                    </p>
                </div>

                <button className="bg-teal-950 hover:bg-teal-800 text-white px-5 py-3 rounded-xl font-semibold">
                    + Add Category
                </button>

            </div>

            <div className="p-5 border-b flex gap-3">
                <input type="text" placeholder="Search categories..."
                    className="w-64 px-4 py-3 border border-gray-200 roudnded-xl outline-none focus:border-teal-900" />

                <select className="px-4 py-3 border border-gray-200 rounded-xl outline-none">
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-2">
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

                    <tbody className="divide-y">
                        <TableRowSkeleton rows={7} cols={5} />


                    </tbody>
                </table>


                <div className="w-full flex justify-end gap-3 py-2">

                    <ul className="flex gap-3">
                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold ">
                            <a href="">&lt;</a>
                        </li>
                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold ">
                            <a href="">1</a>
                        </li>
                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold ">
                            <a href="">2</a>
                        </li>
                        <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-lg font-semibold ">
                            <a href="">&gt;</a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>

    )
}

export default CategoryPage;

