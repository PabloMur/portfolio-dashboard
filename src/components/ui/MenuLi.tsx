import { useGoTo } from "@/hooks";

export default function MenuLi({ children, route }: any) {
  const goTo = useGoTo();

  const handleClick = () => {
    goTo(route);
  };

  return (
    <li>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
