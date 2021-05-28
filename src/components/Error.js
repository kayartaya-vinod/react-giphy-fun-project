import React from "react";

export default function Error({ isError, text }) {
  if (isError) {
    return <div className="text-danger">{text}</div>;
  }

  return null;
}
