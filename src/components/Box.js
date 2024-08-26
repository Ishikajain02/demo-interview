
const Box = ({ index, isActive, onClick }) => (
    <div
      className={`w-16 h-16 border border-black cursor-pointer p-2 m-2 ${isActive ? 'bg-blue-500' : 'bg-gray-300'}`}
      onClick={() => onClick(index)}
    />
  );
  export default Box;