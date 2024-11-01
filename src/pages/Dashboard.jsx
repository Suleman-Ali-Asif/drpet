import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { API_BASE_URL } from "../config";
import { toast } from "react-toastify";

function Dashboard() {
  const { auth } = useAuth();
  console.log(auth);

  const [email, setEmail] = useState(auth?.email || "");
  const [firstName, setFirstName] = useState(auth?.firstName || "");
  const [lastName, setLastName] = useState(auth?.lastName || "");
  const [mobile, setMobile] = useState(auth?.mobile || "");
  const [userId, setUserId] = useState(auth?.userId || "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const update = async (e) => {
    e.preventDefault();
    const formData = {
      userId,
      email,
      firstName,
      lastName,
      mobile,
    };
    console.log(JSON.stringify(formData));
    const response = await fetch(`${API_BASE_URL}/Account/UpdateProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    if (data.succeeded) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const formData = {
      userId,
      email,
      currentPassword: password,
      newPassword,
    };
    console.log(JSON.stringify(formData));
    const response = await fetch(`${API_BASE_URL}/Account/ChangePassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    if (data.succeeded) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="my-96 px-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <form className="flex flex-col w-1/2 space-y-4" onSubmit={update}>
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          value={email}
          type="email"
          className="border-2 border-gray-300 rounded-md p-3"
          readOnly
        />

        <label className="text-sm font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-3"
        />

        <label className="text-sm font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-3"
        />

        <label className="text-sm font-medium">Mobile</label>
        <input
          type="text"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-3"
        />

        <label className="text-sm font-medium">User ID</label>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-3"
          readOnly // Disable if you don't want user to edit ID
        />
        <button
          type="submit"
          className="bg-gray-300 border border-slate-700 p-2 w-1/2 mx-auto rounded"
        >
          Update info
        </button>
      </form>

      <h1 className="text-2xl font-semibold mt-10">Update Password</h1>
      <form className="flex flex-col w-1/2 space-y-4" onSubmit={updatePassword}>
        <label className="text-sm font-medium">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border-2 border-gray-300 rounded-md p-3"
        />
        <label className="text-sm font-medium">New Password</label>
        <input
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          className="border-2 border-gray-300 rounded-md p-3"
        />
        <button
          type="submit"
          className="bg-gray-300 border border-slate-700 p-2 w-1/2 mx-auto rounded"
        >
          Update info
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
