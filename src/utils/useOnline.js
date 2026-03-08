import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with current status

  useEffect(() => {
    const handleOnline = () => {
      console.log("You are online.");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("You are offline.");
      setIsOnline(false);
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      console.log("Cleaning up event listeners.");
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
