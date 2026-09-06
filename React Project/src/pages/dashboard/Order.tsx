import { useState } from "react";
import { Icon } from "@iconify/react";

interface Order {
  id: number;
  customer: string;
  email: string;
  product: string;
  quantity: number;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Processing" | "Cancelled";
}

const Order = () => {
  const [search, setSearch] = useState("");

  const orders: Order[] = [
    {
      id: 1001,
      customer: "John Doe",
      email: "john@example.com",
      product: "Wireless Headphones",
      quantity: 1,
      amount: 59.99,
      date: "Sep 05, 2026",
      status: "Completed",
    },
    {
      id: 1002,
      customer: "Sarah Smith",
      email: "sarah@example.com",
      product: "Smart Watch",
      quantity: 1,
      amount: 89.99,
      date: "Sep 05, 2026",
      status: "Processing",
    },
    {
      id: 1003,
      customer: "Michael Brown",
      email: "michael@example.com",
      product: "Running Shoes",
      quantity: 2,
      amount: 149.98,
      date: "Sep 04, 2026",
      status: "Pending",
    },
    {
      id: 1004,
      customer: "Emma Wilson",
      email: "emma@example.com",
      product: "Leather Backpack",
      quantity: 1,
      amount: 45.0,
      date: "Sep 03, 2026",
      status: "Completed",
    },
    {
      id: 1005,
      customer: "David Miller",
      email: "david@example.com",
      product: "Cotton T-Shirt",
      quantity: 3,
      amount: 74.97,
      date: "Sep 02, 2026",
      status: "Cancelled",
    },
    {
      id: 1006,
      customer: "James Taylor",
      email: "james@example.com",
      product: "Wireless Headphones",
      quantity: 2,
      amount: 119.98,
      date: "Sep 01, 2026",
      status: "Completed",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.email.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
  );

  const getStatusStyle = (status: Order["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Orders
          </h1>

          <p className="text-gray-500 mt-1">
            Manage and track all customer orders.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-teal-950 text-white px-5 py-3 rounded-xl hover:bg-teal-900 transition"
        >
          <Icon
            icon="solar:download-minimalistic-bold"
            width="20"
          />
          Export Orders
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Orders */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Orders
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                856
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Icon icon="solar:bag-4-bold" width="25" />
            </div>
          </div>

          <p className="text-sm text-green-500 mt-4">
            +8.2% from last month
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                650
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <Icon
                icon="solar:check-circle-bold"
                width="25"
              />
            </div>
          </div>

          <p className="text-sm text-green-500 mt-4">
            76% of total orders
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                125
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
              <Icon
                icon="solar:clock-circle-bold"
                width="25"
              />
            </div>
          </div>

          <p className="text-sm text-yellow-600 mt-4">
            Needs attention
          </p>
        </div>

        {/* Cancelled */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Cancelled
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                81
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Icon
                icon="solar:close-circle-bold"
                width="25"
              />
            </div>
          </div>

          <p className="text-sm text-red-500 mt-4">
            9.4% of total orders
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                View and manage your recent orders.
              </p>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3 w-full lg:w-80">
              <Icon
                icon="solar:magnifer-linear"
                width="20"
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm text-gray-700 w-full"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Order ID
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Customer
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Product
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Quantity
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Amount
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-center px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition"
                >
                  {/* Order ID */}
                  <td className="px-6 py-4">
                    <span className="font-semibold text-teal-700">
                      #ORD-{order.id}
                    </span>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                        {order.customer
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {order.customer}
                        </p>

                        <p className="text-xs text-gray-400">
                          {order.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Product */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">
                      {order.product}
                    </span>
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">
                      {order.quantity}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-800">
                      ${order.amount.toFixed(2)}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">
                      {order.date}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {order.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        title="View Order"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-teal-50 hover:text-teal-700 transition"
                      >
                        <Icon
                          icon="solar:eye-linear"
                          width="19"
                        />
                      </button>

                      <button
                        type="button"
                        title="Edit Order"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        <Icon
                          icon="solar:pen-new-square-linear"
                          width="19"
                        />
                      </button>

                      <button
                        type="button"
                        title="Delete Order"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        <Icon
                          icon="solar:trash-bin-trash-linear"
                          width="19"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                <Icon
                  icon="solar:bag-cross-linear"
                  width="30"
                  className="text-gray-400"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                No orders found
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Try searching with a different keyword.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredOrders.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-700">
                1
              </span>{" "}
              to{" "}
              <span className="font-medium text-gray-700">
                {filteredOrders.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-700">
                856
              </span>{" "}
              orders
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition"
              >
                <Icon
                  icon="solar:alt-arrow-left-linear"
                  width="18"
                  className="mx-auto"
                />
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-lg bg-teal-950 text-white text-sm"
              >
                1
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                2
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                3
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="18"
                  className="mx-auto"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;