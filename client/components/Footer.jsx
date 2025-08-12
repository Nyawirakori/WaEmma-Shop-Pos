import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return (
      <footer className="bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-teal-800/40 text-white p-4 rounded">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/*Company Info*/}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">WaEmma Shop POS</h3>
              <p>
                Providing Business an efficient way to track Sales and
                Inventory. Worry no more about where your money goes and how
                much you have in stock. We got you covered.
              </p>
            </div>
            <div className="flex space-x-4">
              {/*Social Media Icons*/}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}