import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface LocationContextType {
  location: { state: string | null; region: string | null };
  setLocation: (state: string, region: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [location, setLocationState] = useState<{
    state: string | null;
    region: string | null;
  }>({
    state: null,
    region: null,
  });

  useEffect(() => {
    const savedLocation = Cookies.get("diboruwa_location");
    if (savedLocation) {
      setLocationState(JSON.parse(savedLocation));
    }
  }, []);

  const setLocation = (state: string, region: string) => {
    setLocationState({ state, region });
    Cookies.set(
      "diboruwa_location",
      JSON.stringify({ state, region }),
      { expires: 1 }
    );
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
