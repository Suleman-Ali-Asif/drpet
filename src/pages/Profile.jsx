import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import OrderCard from "../components/Profile/OrderCard";
import { FaTrashAlt } from "react-icons/fa"; // For the delete icon
import { API_BASE_URL } from "../config";
import { useAuth } from "../contexts/AuthProvider";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState([]);
  const { auth } = useAuth();
  const getOrders = async () => {
    const response = await fetch(
      `${API_BASE_URL}/Order/All?userId=${auth.userId}&pageNumber=1&pageSize=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.succeeded) {
      setOrders(data.data);
    } else {
      setOrders(data);
      console.log(orders);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="flex my-44 justify-between bg-gray-50 p-12">
      <Sidebar />
      <div className="w-full ml-10 bg-gray-100 p-10">
        <div className="flex flex-col items-end">
          {/* Orders List */}
          <div className="flex items-center">
            <FaTrashAlt className="text-gray-500 mr-2" />
            <button className="text-gray-500 hover:text-red-500">
              Delete Orders
            </button>
          </div>

          {/* Filter Dropdown */}
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-300">
            All / Last year
          </button>
        </div>
        {orders.length
          ? orders.map((order) => <OrderCard orders={order} key={order.id} />)
          : "No orders found"}
      </div>
    </div>
  );
};

export default Profile;
