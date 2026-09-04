function Rodape() {
 
  return (
    <div className="flex flex-col max-[80%] gap-10 mt-30 py-9 bg-naval px-10 text-white lg:flex-row lg:justify-around lg:py-25">
        <div className="flex flex-col gap-3 text-lg">
            <h3>Minhas redes sociais:</h3>
            <ul className="flex justify-between w-full">
                <li><img src="linkedin.svg" alt="" /></li>
                <li><img src="whatsapp.svg" alt="" /></li>
                <li><img src="gmail.svg" alt="" /></li>
            </ul>
        </div>
        <div className="flex flex-col gap-2 text-xl">
            <h3>Mais projetos que trabalhei</h3>
            <div className="flex gap-4">
                <img src="github.png" alt="" />
                <p>@<a className="text-green-600" href="https://github.com/pedrovonanht">pedrovonant</a> no github</p>
            </div>
        </div>
    </div>
  )
}

export default Rodape
