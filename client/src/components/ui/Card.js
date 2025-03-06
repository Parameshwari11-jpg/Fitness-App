import React from "react";

export const Card = ({ children, className }) => (
  <div className={`p-4 shadow-lg rounded-lg bg-white ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => <div className="p-2">{children}</div>;
