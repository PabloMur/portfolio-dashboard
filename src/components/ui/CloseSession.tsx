export default function CloseSession() {
  const handleClick = () => {
    alert("cerrando sesion");
  };
  return (
    <button
      onClick={handleClick}
      className="border border-red-800 rounded-lg px-2 py-1"
    >
      Salir
    </button>
  );
}
