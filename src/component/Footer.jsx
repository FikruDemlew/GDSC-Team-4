import { Popcorn } from "lucide-react";
export const Footer = ()=> {
  return (
   <footer>
<div className="bg-gray-950 text-white">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Popcorn className="h-8" alt="CineSphere Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CineSphere</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-white">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-white" >Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-white">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-white">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">CineSphere™</a>. All Rights Reserved.</span>
    </div>
</div>
</footer>

  )
}
