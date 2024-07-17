"use client";

import React from "react";

export default function ShareButton({ title, url }) {
  
  const handleShare = async function () {
    try {
      await navigator.share({
        title: title,
        url: url,
      });
    } catch (err) {
      alert("Your device does not support this feature");
    }
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleShare();
      }}
      className="text-primary mx-3"
    >
      <i className="me-1 fa-solid fa-share-nodes pointer"></i>
      Share
    </a>
  );
}