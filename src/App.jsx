import Contato from "./components/Contato"
import Projetos from "./components/Projetos"
import Rodape from "./components/Rodape"
import Secao from "./components/Secao"
function App() {
 
  return (
    <div className="font-viet bg-claro">
       <header className="bg-white py-5">
        <nav>
          <ul className="flex justify-around text-naval font-light lg:justify-center lg:gap-20">
            <li><a href="">Tecnologias</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex flex-col items-center gap-20 lg:max-w-[80%] lg:mx-auto pt-15 lg:flex-row-reverse">
          <img src="./perfil.jpeg" alt="" className="m-auto w-1/4 h-auto" />
          <div className="flex flex-col gap-20 ml-10">
            <div className="flex flex-col items-start gap-4 max-w-[85%] ">
              <h1 className="text-xl font-semibold text-naval lg:text-3xl">Olá, eu sou o<br/>Pedro Quadros</h1>
              <p className="">Crio sistemas modernos, seguros e eficientes com ferramentas de IA</p>
            </div>
            <button className="bg-naval p-2 w-[37%] rounded-md tracking-wide text-white">Saiba mais</button>
          </div>
        </section>
        <Secao/>
        <Projetos/>
        <Contato/>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </div>
  )
}

export default App
