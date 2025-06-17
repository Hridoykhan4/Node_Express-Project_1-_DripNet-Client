import { useEffect } from "react";

const useWindowScrollTop = () => {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useWindowScrollTop;
