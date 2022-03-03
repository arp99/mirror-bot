import Mirror from "../../assets/mirror.png";
const Header = () => {
  return (
    <div className="w-full p-2 bg-blue-500 h-[10%] text-2xl font-semibold text-white flex justify-center">
      <div className="flex items-center w-60 justify-around">
        <img src={Mirror} alt="mirror bot" style={{ width:"60px", height:"60px"}} />
        <p>Mirror Bot</p>
      </div>
    </div>
  );
};

export default Header;
