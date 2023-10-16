import { useGoTo } from "@/hooks";

export default function Logo() {
  const goTo = useGoTo();

  const handleClick = () => {
    goTo("/home");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg"
    >
      <h4 className="cursor-pointer">
        Pablo Murillo - Fullstack Web Developer
      </h4>
    </button>
  );
}
