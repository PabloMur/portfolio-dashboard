import CloseSession from "./ui/CloseSession";
import Logo from "./ui/Logo";
import MenuLi from "@/components/ui/MenuLi";

const Nav = () => {
  return (
    <nav className="flex justify-between h-14 items-center px-4">
      <Logo />
      <menu>
        <ul className="flex gap-2">
          <MenuLi route="/my-projects">Mis Proyectos</MenuLi>
          <MenuLi route="/upload-project">Subir Proyecto</MenuLi>
          <li>
            <CloseSession></CloseSession>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Nav;
