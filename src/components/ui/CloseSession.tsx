export default function CloseSession() {
  const handleClick = () => {
    alert("Cerrando sesión");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg"
    >
      Salir
    </button>
  );
}
