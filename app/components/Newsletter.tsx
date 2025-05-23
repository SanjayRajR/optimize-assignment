"use client"

import React, { useCallback, useEffect, useState } from "react";

export default function Newsletter() {

    const [timerId, setTimerId] = useState<any>(null);
    const [email, setEmail] = useState<string>();
    const [showAlert, setShowAlert] = useState(false);

    const handleEmailInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setEmail(newValue)
    }, [email])

    const handleEmailSubscription = (event: any) => {
      setShowAlert(true);
      setEmail("")
    }

    useEffect(() => {

        if(showAlert) {
          const id = setTimeout(() => {
            setShowAlert(false)
          }, 2000)

          setTimerId(id)
        }

        return () => {
          clearTimeout(timerId)
        }        

    }, [showAlert])

  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className="max-w-md mx-auto flex gap-4" action={handleEmailSubscription}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailInput}
          required
          className="flex-1 px-4 py-2 text-black rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>

      {showAlert && (
        <div role="alert" className="max-w-md mx-auto mt-4 relative flex w-full p-3 text-sm text-white bg-green-600 rounded-md">
          Subscribed Successfully!
        </div>
        )}
    </div>
  );
}
