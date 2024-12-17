import Link from "next/link";

export default function MainContent() {
    return(
        <div className="bg-gray-100 w-full min-h-36 flex justify-center items-center">
            <div className="container">

                <h3 className="text-2xl text-gray-800 font-bold mb-6 mx-6">Most requested</h3>

                <div className="flex items-center mx-6 flex-wrap">
                    <Link href="/about" className="text-2xl text-blue-950 underline mr-6">About</Link>
                    <Link href="/resources" className="text-2xl text-blue-950 underline mr-6">Resources</Link>
                    <a href="https://www.canada.ca/en.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Canada</a>
                    <a href="https://www.canada.ca/en/services/jobs.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Jobs</a>
                    <a href="https://www.canada.ca/en/services/health.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Health</a>
                    <a href="https://www.canada.ca/en/services/taxes.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Taxes</a>
                    <a href="https://www.canada.ca/en/services/finance.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Money and finances</a>
                    <a href="https://www.canada.ca/en/services/business.html" target="_blank" className="text-2xl text-blue-950 underline mr-6">Business and industry</a>
                </div>
            </div>
        </div>
    )
}