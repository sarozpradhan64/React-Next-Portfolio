"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ActiveState = Record<string, boolean>;

type ActiveContextType = {
  activeState: ActiveState;
  show: (key: string) => void;
  hide: (key: string) => void;
  toggle: (key: string) => void;
};

export const ActiveContext = createContext<ActiveContextType>({
  activeState: {},
  show: () => {},
  hide: () => {},
  toggle: () => {},
});

export const useActive = () => {
  const context = useContext(ActiveContext);
  return context;
};

type ActiveProviderProps = {
  children: ReactNode;
  initialState?: ActiveState;
};

export const ActiveProvider: React.FC<ActiveProviderProps> = ({
  children,
  initialState = { leaderboard: true },
}) => {
  const [activeState, setActiveState] = useState<ActiveState>(initialState);

  const show = (key: string) =>
    setActiveState((prev) => ({ ...prev, [key]: true }));
  const hide = (key: string) =>
    setActiveState((prev) => ({ ...prev, [key]: false }));
  const toggle = (key: string) =>
    setActiveState((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <ActiveContext.Provider value={{ activeState, show, hide, toggle }}>
      {children}
    </ActiveContext.Provider>
  );
};
