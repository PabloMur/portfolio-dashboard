import css from "@/styles/landing.module.css";
export default function Home() {
  return (
    <div className={`${css.root} flex flex-grow justify-center items-center`}>
      <h2 className="text-7xl font-bold bg-black/60 flex justify-center items-center flex-grow">
        WELCOME<p className="text-blue-500"> Pablo</p>
      </h2>
    </div>
  );
}
