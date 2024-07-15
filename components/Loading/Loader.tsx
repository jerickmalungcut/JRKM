import "./index.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="loading-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};
export default Loader;
