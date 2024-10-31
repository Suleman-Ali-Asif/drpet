import React from "react";
import Sidebar from "../components/Profile/Sidebar";
import OrderCard from "../components/Profile/OrderCard";
import { FaTrashAlt } from "react-icons/fa"; // For the delete icon
import AccountsPage from "../components/Profile/AccountsPage";

const Account = () => {
  return (
    <div className="flex my-44 justify-between bg-gray-50 p-12">
      <Sidebar />
      <AccountsPage />
    </div>
  );
};

export default Account;
