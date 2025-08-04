"use client";
import React from "react";

export default function Newsletter() {
  return (
    <section className=" bg-gradient-to-tl from-orange-600  to-orange-400 lg:w-4xl mx-auto my-6 rounded text-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Stay Updated</h2>
        <p className="text-white mb-6">
          Subscribe to get the latest tournament news, updates, and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-lg ring-2 ring-orange-600 text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-700 hover:bg-orange-800 transition text-white rounded-lg font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
