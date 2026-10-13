import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
            <h2 className="text-7xl font-bold mb-4">404</h2>
            <p className="text-xl mb-2 font-light">Oops! Page not found</p>
            <p className="text-md mb-8 text-slate-300">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition"
            >
                Return Home
            </Link>
        </div>
    );
}