import css from "@/styles/landing.module.css";
export default function Home() {
  return (
    <div
      className={`${css.root} flex flex-grow justify-center items-center relative`}
    >
      <h2 className="text-7xl font-bold shadow-xl  bg-black p-4 rounded-xl flex gap-3 border">
        Welcome<h2 className="text-blue-500">Pablo</h2>
      </h2>
    </div>
  );
}
