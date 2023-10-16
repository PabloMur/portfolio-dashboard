import GithubButton from "@/components/GithubButton";
import fondo from "../../public/pexels-pixabay-87009.jpg";

const backgroundStyles = {
  backgroundImage: `url(${fondo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

export default function Home() {
  return (
    <main
      className="h-screen grid place-items-center bg-slate-600"
      style={backgroundStyles}
    >
      <form action="" className="flex flex-col bg-red-400 p-4">
        <label htmlFor="">
          <p className="text-white">Email</p>
          <input type="email" />
        </label>
        <label htmlFor="">
          <p className="text-white">password</p>
          <input type="password" />
        </label>
        <button>Ingresar</button>
      </form>
      <GithubButton></GithubButton>
    </main>
  );
}
