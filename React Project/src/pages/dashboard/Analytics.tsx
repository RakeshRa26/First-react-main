import { Icon } from "@iconify/react";

const Analytics = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,580",
      change: "+12.5%",
      icon: "solar:dollar-minimalistic-bold",
      positive: true,
    },
    {
      title: "Total Orders",
      value: "856",
      change: "+8.2%",
      icon: "solar:bag-4-bold",
      positive: true,
    },
    {
      title: "Customers",
      value: "2,450",
      change: "+15.8%",
      icon: "solar:users-group-rounded-bold",
      positive: true,
    },
    {
      title: "Conversion Rate",
      value: "4.85%",
      change: "-2.4%",
      icon: "solar:graph-up-bold",
      positive: false,
    },
  ];

  const salesData = [
    { month: "Jan", sales: 3200 },
    { month: "Feb", sales: 4500 },
    { month: "Mar", sales: 3900 },
    { month: "Apr", sales: 5200 },
    { month: "May", sales: 4800 },
    { month: "Jun", sales: 6200 },
    { month: "Jul", sales: 5700 },
    { month: "Aug", sales: 7100 },
    { month: "Sep", sales: 6500 },
  ];

  const topProducts = [
    {
      name: "Wireless Headphones",
      category: "Electronics",
      sales: 245,
      revenue: "$14,455",
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      sales: 189,
      revenue: "$12,210",
    },
    {
      name: "Running Shoes",
      category: "Sports",
      sales: 156,
      revenue: "$11,698",
    },
    {
      name: "Leather Backpack",
      category: "Accessories",
      sales: 124,
      revenue: "$5,580",
    },
    {
      name: "Cotton T-Shirt",
      category: "Clothing",
      sales: 98,
      revenue: "$2,449",
    },
  ];

  const maxSales = Math.max(...salesData.map((item) => item.sales));

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Analytics
          </h1>

          <p className="text-gray-500 mt-1">
            Track your store performance and business growth.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-teal-950 text-white px-5 py-3 rounded-xl hover:bg-teal-900 transition"
        >
          <Icon icon="solar:download-minimalistic-bold" width="20" />
          Export Report
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl border border-gray-200 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>

                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {stat.value}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Icon icon={stat.icon} width="25" />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Icon
                icon={
                  stat.positive
                    ? "solar:arrow-up-linear"
                    : "solar:arrow-down-linear"
                }
                width="18"
                className={
                  stat.positive
                    ? "text-green-500"
                    : "text-red-500"
                }
              />

              <span
                className={`text-sm font-medium ${
                  stat.positive
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>

              <span className="text-sm text-gray-400">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Overview + Traffic */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Sales Overview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Monthly sales performance
              </p>
            </div>

            <select
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-teal-200"
              defaultValue="2026"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Chart */}
          <div className="h-72 flex items-end gap-3 sm:gap-5 border-b border-gray-200">
            {salesData.map((item) => {
              const height = (item.sales / maxSales) * 100;

              return (
                <div
                  key={item.month}
                  className="flex-1 h-full flex flex-col justify-end items-center gap-2"
                >
                  <div className="text-xs text-gray-500 hidden sm:block">
                    ${item.sales}
                  </div>

                  <div
                    className="w-full max-w-12 bg-teal-600 rounded-t-lg hover:bg-teal-700 transition"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="text-xs text-gray-500 pb-2">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Traffic Sources
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Where your visitors come from
          </p>

          <div className="flex justify-center py-8">
            <div className="relative w-40 h-40 rounded-full bg-teal-600 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">
                  24.5K
                </span>

                <span className="text-xs text-gray-400">
                  Visitors
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-600" />
                <span className="text-sm text-gray-600">
                  Direct
                </span>
              </div>

              <span className="text-sm font-semibold text-gray-800">
                42%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600">
                  Search
                </span>
              </div>

              <span className="text-sm font-semibold text-gray-800">
                28%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm text-gray-600">
                  Social Media
                </span>
              </div>

              <span className="text-sm font-semibold text-gray-800">
                18%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-sm text-gray-600">
                  Referral
                </span>
              </div>

              <span className="text-sm font-semibold text-gray-800">
                12%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top Products */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Products
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Best performing products
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Product
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Category
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Sales
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Revenue
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {topProducts.map((product, index) => (
                  <tr
                    key={product.name}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>

                        <span className="font-medium text-gray-800">
                          {product.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {product.category}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      {product.sales}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                      {product.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Performance
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            This month's performance
          </p>

          <div className="mt-7 space-y-6">
            {/* Revenue */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Revenue
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  82%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-600 rounded-full"
                  style={{ width: "82%" }}
                />
              </div>
            </div>

            {/* Orders */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Orders
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  74%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "74%" }}
                />
              </div>
            </div>

            {/* Customers */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Customers
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  68%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: "68%" }}
                />
              </div>
            </div>

            {/* Conversion */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Conversion
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  55%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-teal-50">
            <div className="flex items-start gap-3">
              <Icon
                icon="solar:lightbulb-bold"
                width="22"
                className="text-teal-700 mt-0.5"
              />

              <div>
                <h3 className="font-semibold text-teal-900">
                  Good progress!
                </h3>

                <p className="text-sm text-teal-700 mt-1">
                  Your revenue is performing better than last
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;