import Card from "./Card"

function Projetos() {
    return (
        <div className="bg-naval relative left-0 text-white flex flex-col gap-10 pt-10 items-center">
            <h1 className="text-3xl">Projetos</h1>
            <p className="font-light tracking-wide">Alguns projetos que atuei:</p>
            <div className="flex flex-col items-center gap-20 pb-8 lg:flex-row lg:justify-center lg:pb-15">
                <Card text="Sistema para gerenciamento de reservas em restaurantes." src="proj1_1.png" link="https://restaurante-saas-lilac.vercel.app"/>
                <Card text="Solução para digitalização de prontuários médicos usando IA" src="proj2_3.png" link="https://github.com/pedrovonanht/OCR-prontuarios"/>
                <Card text="Site para venda e marketing de aplicativo Arena GO" src="proj3_1.png" link="https://github.com/pedrovonanht/Go-arena"/>
            </div>
        </div>
    )
}

export default Projetos