function Grid () {
    return (
        <div className=" max-w-[80%] w-100% lg:flex">
            <ul className="grid grid-cols-2 gap-8 justify-center">
            <li className="flex flex-col items-center gap-4 w-[30vw]"><img src="tec_css.png" alt=""/> <h3>CSS</h3></li>
            <li className="flex flex-col items-center gap-4 w-[30vw]"><img src="tec_html.png" alt=""/> <h3>HTML</h3></li>
            <li className="flex flex-col items-center gap-4 w-[30vw]"><img src="tec_js.png" alt=""/> <h3>JS</h3></li>
            <li className="flex flex-col items-center gap-4 w-[30vw]"><img src="tec_tailwind.png" alt=""/> <h3>TAILWIND</h3></li>
        </ul>
        </div>
    )
}

export default Grid;