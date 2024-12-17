export default function Banner() {
    return (
        <div className="w-full h-52 bg-white relative">
            <img className="w-full h-full " src="./bkg.jpg" alt="image"/>
            <div className="absolute top-6 left-16 bg-gray-800 opacity-80 w-1/2 h-3/4 xx:w-full xx:left-0 xx:mx-1 xl:left-16 2xl:left-32 3xl:left-40 xl:mx-0 xl:w-1/2 flex justify-center text-white flex-col">
                <h1 className="text-4xl font-bold text-white ml-3">
                    Canada IECB
                </h1>

                <div className="bg-red-800 w-20 h-2 ml-3 mb-3 mt-1"></div>

                <span className="ml-3 text-xl">Canadian International Education Bureau</span>
            </div>
        </div>
    )
}