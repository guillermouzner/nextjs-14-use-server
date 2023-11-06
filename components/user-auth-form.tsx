"use client";
import * as React from "react";

export function UserAuthForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log("formData:", formData);

    const {email, password} = event.currentTarget.elements as any;

    if (email.value === "g@gmail.com" && password.value === "admin") {
      console.log(email);
      console.log(password);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-extrabold tracking-tighter">Login Action</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label className="block text-sm text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="off"
            className="mt-1 w-full rounded border border-gray-300 px-2 py-1.5"
            name="email"
            placeholder="email address"
            type="email"
          />
        </div>
        <div className="mt-3">
          <label className="block text-sm text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="off"
            className="mt-1 w-full rounded border border-gray-300 px-2 py-1.5"
            name="password"
            placeholder="your password"
            type="password"
          />
        </div>
        <button className="mt-3 w-full rounded-sm border" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
