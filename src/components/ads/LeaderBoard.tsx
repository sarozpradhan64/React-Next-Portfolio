"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ActiveContext } from "../../context/ActiveContext"; // Adjust the import path as needed
import { XMarkIcon } from "@heroicons/react/24/outline";

const LeaderBoard = () => {
  const pathname = usePathname();

  const { activeState, hide } = useContext(ActiveContext);

  return (
    <>
      {activeState?.leaderboard && pathname.includes("/contact") && (
        <div className="fixed left-[50%] -translate-x-[50%] md:bottom-6 bottom-20 z-50">
          <div
            className="w-5 h-5 hover:scale-125 bg-red-400 absolute -right-2 -top-2 cursor-pointer rounded-full p-1 flex justify-center items-center"
            onClick={() => hide("leaderboard")}
          >
            <XMarkIcon className="w-4 h-4" />
          </div>

          <a
            href="https://clients.babal.host/aff.php?aff=700&gocart=true"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://babal.host/img/affiliate/320x50MobileLeaderboard.png"
              width="320"
              height="50"
              className="rounded-md shadow-sm"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default LeaderBoard;
