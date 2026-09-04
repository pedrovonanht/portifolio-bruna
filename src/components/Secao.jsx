import Grid from "./Grid"
function Secao() {
 
  return (
    <div className="flex flex-col items-center max-w-[85%]  gap-10 mt-30 py-30 m-auto">
     <h1 className="text-2xl font-semibold text-naval lg:text-4xl">Tecnologias</h1>
     <div className="flex flex-col gap-15 items-center lg:flex-row-reverse  lg:justify-center">
       <img src="./tecnologia.png" alt="" className="lg:w-[35%] w-[80%] h-auto"/>
       <div className="flex flex-col gap-10 items-center lg:items-start">
         <p className="text-gray-500 w-[80%] text-xl lg:w-[90%] lg:text-lg">Possuo conhecimento e experiência com as seguintes tecnologias:</p>
         <Grid/>
       </div>
     </div>
    </div>
  )
}

export default Secao
