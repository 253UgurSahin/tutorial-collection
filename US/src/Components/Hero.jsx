export default function Hero({ bg }) {
    return (
        <div id="home" className="w-full bg-white h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-xs sm:max-w-none text-center font-bold uppercase text-white inline-block">
                <span className="block text-lightgreen text-5xl md:text-6xl xl:text-7xl">ugur sahin</span>
                <span className="text-4xl">web developer</span>
                <a href="#aboutme">
                    <button className="btn group">
                        Lees meer <div className="ml-3 inline-block group-hover:rotate-90 transition duration-500"><i className="fas fa-arrow-right"></i></div>
                    </button>
                </a>
            </div>
        </div>
    )
}
