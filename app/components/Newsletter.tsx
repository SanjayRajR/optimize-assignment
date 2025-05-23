"use client"

import React, { useCallback, useState } from "react";
import SuccessAlert from "./SuccessAlert";

export default function Newsletter() {

    const [email, setEmail] = useState<string>();

    const handleEmailInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setEmail(newValue)
    }, [email])

    const handleEmailSubscription = (e: any) => {
      e.preventDefault();
    }

  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailInput}
          className="flex-1 px-4 py-2 text-black rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          onClick={handleEmailSubscription}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
