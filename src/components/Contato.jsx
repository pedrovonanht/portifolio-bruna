function Contato() {
  return (
    <div className="flex flex-col items-center mt-10 gap-10 w-full px-12">
      <h1 className="text-2xl font-semibold text-naval lg:text-3xl">Contato</h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:w-full">
        <img src="habilidadess.png" alt="" className="lg:w-1/2"/>
        <form action="" className="flex flex-col lg:items-start gap-6 items-center lg:w-1/2">
          <div className="flex flex-col w-full">
            <input type="email" placeholder="Email" id="email" className="lg:w-9/10 border-2 border-gray-300 p-3 w-[75vw] rounded-lg" />
          </div>
          <div className="flex flex-col w-full">
            <textarea
              type="email"
              id="mensagem"
              placeholder="Mensagem"
              className="border-2 h-[16vh] border-gray-400 p-3 w-[75vw] lg:w-9/10 rounded-lg"
            />
          </div>
          <button type="submit" className="bg-naval rounded-md text-white p-3 lg:w-[90%] w-[70%]">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
