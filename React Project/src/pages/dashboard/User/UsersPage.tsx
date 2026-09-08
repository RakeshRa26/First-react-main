import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "Admin" | "User" | "Manager";
  status: "Active" | "Inactive";
  joined: string;
}

const UserPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const users: User[] = [
    {
      id: 1,
      name: "Rakesh Rawal",
      email: "rakesh@example.com",
      phone: "+977 9800000000",
      role: "Admin",
      status: "Active",
      joined: "Sep 01, 2026",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      phone: "+977 9811111111",
      role: "User",
      status: "Active",
      joined: "Aug 28, 2026",
    },
    {
      id: 3,
      name: "Sarah Smith",
      email: "sarah@example.com",
      phone: "+977 9822222222",
      role: "Manager",
      status: "Active",
      joined: "Aug 25, 2026",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+977 9833333333",
      role: "User",
      status: "Inactive",
      joined: "Aug 20, 2026",
    },
    {
      id: 5,
      name: "Emily Wilson",
      email: "emily@example.com",
      phone: "+977 9844444444",
      role: "User",
      status: "Active",
      joined: "Aug 18, 2026",
    },
    {
      id: 6,
      name: "David Miller",
      email: "david@example.com",
      phone: "+977 9855555555",
      role: "User",
      status: "Inactive",
      joined: "Aug 15, 2026",
    },
    {
      id: 7,
      name: "Sophia Brown",
      email: "sophia@example.com",
      phone: "+977 9866666666",
      role: "Manager",
      status: "Active",
      joined: "Aug 12, 2026",
    },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-gray-200">

        <div className="px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h1 className="text-2xl font-bold text-teal-950">
                Users
              </h1>

              <p className="text-sm text-gray-400 mt-1">
                Manage and monitor all registered users.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-teal-950
                hover:bg-teal-800
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                text-sm
                transition
                shadow-sm
              "
            >
              <span className="text-lg">+</span>
              Add User
            </button>

          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}
      <main className="p-4 sm:p-6 lg:p-8">

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

          {/* Total Users */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Total Users
                </p>

                <h2 className="text-2xl font-bold text-teal-950 mt-2">
                  1,250
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-xl">
                <Icon icon={"fa-solid:users"} width={25} />
              </div>

            </div>

            <p className="text-xs text-green-500 font-semibold mt-4">
              ↑ 12.5% this month
            </p>

          </div>

          {/* Active */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Active Users
                </p>

                <h2 className="text-2xl font-bold text-teal-950 mt-2">
                  1,025
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                <Icon icon={"clarity:users-solid-badged"} width={25} className="text-emerald-400 " />
              </div>

            </div>

            <p className="text-xs text-green-500 font-semibold mt-4">
              86.7% of total users
            </p>

          </div>

          {/* Inactive */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Inactive Users
                </p>

                <h2 className="text-2xl font-bold text-teal-950 mt-2">
                  225
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-xl">
                <Icon icon={"fa7-solid:users-slash"} width={25} className="text-rose-600 " />
              </div>

            </div>

            <p className="text-xs text-gray-400 mt-4">
              13.3% of total users
            </p>

          </div>

          {/* New Users */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  New This Month
                </p>

                <h2 className="text-2xl font-bold text-teal-950 mt-2">
                  184
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                <Icon icon={"uil:arrow-growth"} width={25} className="text-emerald-400 " />
              </div>

            </div>

            <p className="text-xs text-green-500 font-semibold mt-4">
              ↑ 8.4% from last month
            </p>

          </div>

        </div>

        {/* ================= USER TABLE CARD ================= */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

          {/* Table Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  All Users
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  {filteredUsers.length} users found
                </p>
              </div>

              {/* Search + Filter */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* Search */}
                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                  </span>

                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                      w-full
                      sm:w-64
                      pl-10
                      pr-4
                      py-2.5
                      border
                      border-gray-200
                      rounded-xl
                      text-sm
                      outline-none
                      focus:border-teal-900
                      focus:ring-2
                      focus:ring-teal-900/10
                    "
                  />

                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="
                    px-4
                    py-2.5
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-600
                    outline-none
                    focus:border-teal-900
                  "
                >
                  <option value="All">
                    All Status
                  </option>

                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* ================= TABLE ================= */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead className="bg-gray-50">

                <tr className="text-left text-xs uppercase text-gray-400">

                  <th className="px-6 py-4">
                    User
                  </th>

                  <th className="px-6 py-4">
                    Phone
                  </th>

                  <th className="px-6 py-4">
                    Role
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4">
                    Joined
                  </th>

                  <th className="px-6 py-4 text-right">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100">

                {filteredUsers.length > 0 ? (

                  filteredUsers.map((user) => (

                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition"
                    >

                      {/* User */}
                      <td className="px-6 py-4">

                        <div className="flex items-center gap-3">

                          <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-950 flex items-center justify-center font-bold text-sm">
                            {getInitials(user.name)}
                          </div>

                          <div>

                            <p className="font-semibold text-gray-800 text-sm">
                              {user.name}
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Phone */}
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.phone}
                      </td>

                      {/* Role */}
                      <td className="px-6 py-4">

                        <span
                          className={`
                            inline-flex
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-semibold

                            ${user.role === "Admin"
                              ? "bg-purple-100 text-purple-700"
                              : user.role === "Manager"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          {user.role}
                        </span>

                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-2
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-semibold

                            ${user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                            }
                          `}
                        >

                          <span
                            className={`
                              w-1.5
                              h-1.5
                              rounded-full

                              ${user.status === "Active"
                                ? "bg-green-500"
                                : "bg-red-500"
                              }
                            `}
                          />

                          {user.status}

                        </span>

                      </td>

                      {/* Joined */}
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.joined}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">

                        <div className="flex justify-end gap-2">

                          <button
                            title="View"
                            className="
                              w-9
                              h-9
                              rounded-lg
                              bg-gray-50
                              hover:bg-teal-50
                              text-gray-500
                              hover:text-teal-900
                              transition
                            "
                          >
                            👁
                          </button>

                          <button
                            title="Edit"
                            className="
                              w-9
                              h-9
                              rounded-lg
                              bg-gray-50
                              hover:bg-blue-50
                              text-gray-500
                              hover:text-blue-600
                              transition
                            "
                          >
                            ✏️
                          </button>

                          <button
                            title="Delete"
                            className="
                              w-9
                              h-9
                              rounded-lg
                              bg-gray-50
                              hover:bg-red-50
                              text-gray-500
                              hover:text-red-600
                              transition
                            "
                          >
                            🗑
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan={6}
                      className="text-center py-16 text-gray-400"
                    >
                      <div className="text-4xl mb-3">
                        🔍
                      </div>

                      <p className="font-medium">
                        No users found
                      </p>

                      <p className="text-sm mt-1">
                        Try changing your search or filter.
                      </p>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* ================= PAGINATION ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-gray-100">

            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-700">
                1
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-700">
                {filteredUsers.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-700">
                1,250
              </span>{" "}
              users
            </p>

            <div className="flex items-center gap-2">

              <button
                className="
                  px-3
                  py-2
                  rounded-lg
                  border
                  border-gray-200
                  text-sm
                  text-gray-400
                  cursor-not-allowed
                "
              >
                Previous
              </button>

              <button
                className="
                  w-9
                  h-9
                  rounded-lg
                  bg-teal-950
                  text-white
                  text-sm
                  font-semibold
                "
              >
                1
              </button>

              <button
                className="
                  w-9
                  h-9
                  rounded-lg
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  hover:bg-gray-50
                "
              >
                2
              </button>

              <button
                className="
                  w-9
                  h-9
                  rounded-lg
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  hover:bg-gray-50
                "
              >
                3
              </button>

              <button
                className="
                  px-3
                  py-2
                  rounded-lg
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  hover:bg-gray-50
                "
              >
                Next
              </button>

            </div>

          </div>

        </div>

      </main>

      {/* ================= ADD USER MODAL ================= */}
      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Overlay */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div>
                <h2 className="text-lg font-bold text-teal-950">
                  Add New User
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  Create a new user account
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>

            </div>

            {/* Modal Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
              className="p-6 space-y-4"
            >

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    focus:border-teal-900
                    focus:ring-2
                    focus:ring-teal-900/10
                  "
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    focus:border-teal-900
                    focus:ring-2
                    focus:ring-teal-900/10
                  "
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>

                <select
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    focus:border-teal-900
                  "
                >
                  <option>User</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>

              </div>

              <div className="flex justify-end gap-3 pt-3">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    border
                    border-gray-200
                    text-gray-600
                    font-medium
                    hover:bg-gray-50
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-teal-950
                    text-white
                    font-semibold
                    hover:bg-teal-800
                  "
                >
                  Create User
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default UserPage;