import Image from "next/image";

export default function Partners() {
    const partners = [
        {
            name: "University of Toronto",
            logo: "/l001.png",
            link: "https://www.utoronto.ca"
        },
        {
            name: "University of British Columbia",
            logo: "/l002.png",
            link: "https://www.ubc.ca"
        },
        {
            name: "McGill University",
            logo: "/l003.png",
            link: "https://www.mcgill.ca"
        },
        {
            name: "University of Alberta",
            logo: "/l004.png",
            link: "https://www.ualberta.ca"
        }
    ];

    return (
        <div className="bg-white w-full min-h-72 flex justify-center items-center py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="flex items-center mb-6">
                    <h3 className="text-2xl text-gray-800 font-bold">Our Partners</h3>
                    <div className="bg-red-800 w-16 h-1 ml-4 mt-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.link}
                            target="_blank"
                            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
                        >
                            <div className="relative w-60 h-32 mb-4">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="object-contain"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority={index < 2}
                                />
                            </div>
                            <span className="text-lg text-gray-800 text-center">{partner.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}