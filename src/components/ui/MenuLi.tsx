import { useGoTo } from "@/hooks";
export default function MenuLi({ children, route }: any) {
  const goTo = useGoTo();
  const handleClick = () => {
    goTo(route);
  };
  return (
    <li>
      <button
        className="px-2 py-1 border border-white rounded-lg"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
