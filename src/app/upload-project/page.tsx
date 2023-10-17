import ProjectUploader from "@/components/ProjectUploader";
import css from "@/styles/landing.module.css";
export default function UploadProject() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <div
        className={`${css.root} bg-green-400 h-40 w-full flex items-center justify-center`}
      >
        <h3 className="text-5xl font-bold bg-black/60 h-full w-full grid place-items-center">
          Subir un proyecto
        </h3>
      </div>
      <div className="flex flex-grow h-full w-full items-center justify-center">
        <ProjectUploader />
      </div>
    </div>
  );
}
