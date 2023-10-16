import { useGoTo } from "@/hooks";
export default function Logo() {
  const goTo = useGoTo();
  const handleClick = () => {
    goTo("/home");
  };
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 border border-white rounded-lg"
    >
      <h4 className="cursor-pointer">
        Pablo Murillo - Fullstack Web Develoeper
      </h4>
    </button>
  );
}
