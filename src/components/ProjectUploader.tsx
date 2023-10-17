import ImageUploader from "./ImageUploader";

export default function ProjectUploader() {
  return (
    <form className="flex w-2/3 min-h-[50vh] h-full">
      <div className="w-1/2 h-full border rounded-xl overflow-hidden">
        <ImageUploader></ImageUploader>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-between p-4 gap-3">
        <label htmlFor="" className="w-full">
          <p>Nombre del proyecto</p>
          <input type="text" className="w-full rounded-xl p-2 text-black" />
        </label>
        <label htmlFor="" className="w-full">
          <p>Descripcion</p>
          <input type="text" className="w-full rounded-xl p-2 text-black" />
        </label>
        <label htmlFor="" className="w-full">
          <p>Link Repositorio</p>
          <input type="text" className="w-full rounded-xl p-2 text-black" />
        </label>
        <label htmlFor="" className="w-full">
          <p>Link Deploy</p>
          <input type="text" className="w-full rounded-xl p-2" />
        </label>
        <button className="bg-black p-2 w-full rounded-xl border">
          Subir Proyecto
        </button>
      </div>
    </form>
  );
}
