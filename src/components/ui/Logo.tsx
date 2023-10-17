import { useGoTo } from "@/hooks";

export default function Logo() {
  const goTo = useGoTo();

  const handleClick = () => {
    goTo("/home");
  };

  return (
    <button onClick={handleClick} className="text-white font-bold py-2 px-4">
      <h4 className="cursor-pointer">
        Pablo Murillo - Fullstack Web Developer
      </h4>
    </button>
  );
}
