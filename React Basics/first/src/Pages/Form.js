import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    firstName: "Sagar",
    lastName: "Waghmare",
    email: "sagarwaghmare1384@gmail.com",
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <label className="block mb-4">
        <span className="block text-sm font-medium text-gray-700">First Name:</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </label>
      <label className="block mb-4">
        <span className="block text-sm font-medium text-gray-700">Last Name:</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </label>
      <label className="block mb-4">
        <span className="block text-sm font-medium text-gray-700">Email:</span>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <p className="mt-4 text-gray-800">
        {form.firstName} {form.lastName} {form.email}
      </p>
    </div>
  );
}

export default Form;
