function Card({ text, src, link}) {
  return (
    <div className="bg-naval-escuro flex flex-col items-center gap-5 pb-3 max-w-[75%] lg:w-[27%]">
      <img src={src} alt="" className="w-full max-h-90 h-90" />

      <div className="px-10 flex flex-col items-center gap-8">
        <p className="text-gray-300 text-center text-md">{text}</p>
        <button className="border-2 rounded-md border-white p-3 w-1/2">
          <a href={link}>Saiba mais</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
