import { useEffect, useState } from "react";

/** True on devices with a fine pointer (mouse/trackpad) and a wide viewport. */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    setIsDesktop(query.matches);
    const handler = (e) => setIsDesktop(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};

export default useIsDesktop;
