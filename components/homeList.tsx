export default function HomeList() {
    return (
        <section className="bg-white">
            <div className="container px-6 pb-8 mx-auto">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="w-full max-w-xs">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                             src="./c001.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">About IECB</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left">
                                We specialize in coordinating international educational initiatives and developing innovative programs across Canada. Our organization provides strategic support to strengthen educational partnerships and enhance global academic collaboration.
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-xs">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                             src="./c002.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">Quality Assurance</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left">
                                Through comprehensive monitoring and evaluation processes, we maintain the highest standards in international education. Our team works with experienced educators to ensure all programs meet Canadian and global quality benchmarks.
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-xs">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                             src="./c003.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">Global Educational
                                Network</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left">
                                We connect Canadian educational institutions with international partners through strategic collaborations and exchange programs. Our network creates opportunities for knowledge sharing and cross-cultural learning worldwide.
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-xs">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                             src="./c004.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">Educational Innovation
                                Center</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left">
                                We drive educational advancement through modern technologies and innovative teaching approaches. Our center develops forward-thinking solutions and programs to keep Canadian education at the forefront of global excellence.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}