import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledTop, setIsScrolledTop] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > window.innerHeight);
    setIsScrolledTop(scrollPosition > window.innerHeight / 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isScrolled, isScrolledTop };
};
export default useScroll;
