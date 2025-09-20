import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-gray-500">&copy; {new Date().getFullYear()} BSMS Club. All rights reserved.</p>
    </footer>
  );
}
