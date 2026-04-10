"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { ActiveContext } from "../../context/ActiveContext";
import { X } from "lucide-react";

const LeaderBoard = () => {
  const pathname = usePathname();

  const { activeState, hide } = useContext(ActiveContext);

  return (
    <>
      {activeState?.leaderboard && pathname !== "/" && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-20 md:bottom-8 z-[60] w-[95%] max-w-[400px]">
          <div className="relative bg-slate-950/60 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-red-500/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-[70]"
              onClick={() => hide("leaderboard")}
              aria-label="Close Ad"
            >
              <X className="w-5 h-5" />
            </button>

            <a
              href="https://clients.babal.host/aff.php?aff=700&gocart=true"
              rel="noreferrer"
              target="_blank"
              className="block overflow-hidden rounded-xl"
            >
              <img
                src="https://babal.host/img/affiliate/320x50MobileLeaderboard.png"
                alt="Affiliate Banner"
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaderBoard;
