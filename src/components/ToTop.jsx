import toTop from "../assets/toTop.svg";
import useScroll from "../hooks/useScroll";

const ToTop = () => {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { isScrolledTop } = useScroll();
  return (
    <img
      onClick={handleClick}
      alt="To top button"
      src={toTop}
      className={`toTop-btn ${isScrolledTop ? "topShow" : ""}`}
    ></img>
  );
};
export default ToTop;
