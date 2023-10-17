import { useGoTo } from "@/hooks";

export default function MenuLi({ children, route }: any) {
  const goTo = useGoTo();

  const handleClick = () => {
    goTo(route);
  };

  return (
    <li>
      <button
        className="text-white font-semibold py-2 px-4 shadow-lg"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
