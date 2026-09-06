import { Icon } from "@iconify/react";


const DashboardHome = () => {
    return (
        <div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Welcome Back, Rakesh!
                </h2>

                <p className="text-gray-500 mt-1">
                    Here's what's happening with your store today.
                </p>
            </div>


            {/* Dashboard Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Users */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <Icon icon={"flowbite:users-solid"} width={18}/>
                    <p className="text-sm text-gray-500">
                         Total Users
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mt-2">
                        1,250
                    </h3>

                </div>


                {/* Products */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <Icon icon={"eos-icons:products"} width={18}/>
                    <p className="text-sm text-gray-500">
                         Products
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mt-2">
                        350
                    </h3>

                </div>


                {/* Orders */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <Icon icon={"fluent-mdl2:reservation-orders"} width={18}/>
                    <p className="text-sm text-gray-500">
                        Orders
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mt-2">
                        856
                    </h3>

                </div>


                {/* Revenue */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <Icon icon={"streamline-flex:decent-work-and-economic-growth-solid"} width={18}/>
                    <p className="text-sm text-gray-500">
                        Revenue
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mt-2">
                        RS. 12,450
                    </h3>

                </div>

            </div>

        </div>
    );
};

export default DashboardHome;