"use client";

import { Share2 } from "lucide-react";
import React from "react";

export default function ShareButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
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
      <Share2 className="cursor-pointer inline w-4 me-2" />
      Share
    </a>
  );
}
