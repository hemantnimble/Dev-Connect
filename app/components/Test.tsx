"use client";

import { useState } from "react";
import axios from "axios";

export default function AddUserPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddUser = async () => {
    setLoading(true);
    setMessage("");

    try {
      const { data } = await axios.post("/api/test", {
        name: "Hemant Nimble",
        email: "hemant@example.com",
        hashedPassword: "someHashedPassword",
        image: "https://example.com/profile.jpg",
      });

      setMessage(`✅ User Added: ${data.email}`);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errMsg =
          error.response?.data?.message || "Something went wrong on the server";
        setMessage(`❌ Error: ${errMsg}`);
      } else {
        setMessage(`⚠️ Request failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button
        onClick={handleAddUser}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Adding User..." : "Add User"}
      </button>

      {message && (
        <p className="text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
