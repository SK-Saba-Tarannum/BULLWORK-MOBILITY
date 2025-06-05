import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-16 py-10">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src="logo.webp" alt="Bullwork Mobility" className="h-10 mb-4" />
          <p className="font-semibold mb-2">Connect with us on</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <FaFacebookF className="text-2xl hover:text-purple-500 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-purple-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-purple-500 cursor-pointer" />
            <FaXTwitter className="text-2xl hover:text-purple-500 cursor-pointer" />
            <FaLinkedinIn className="text-2xl hover:text-purple-500 cursor-pointer" />
          </div>

          <p className="font-semibold mb-2">Subscribe to receive the latest updates!</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 bg-black text-white border border-white rounded-md w-full sm:w-2/3"
            />
            <button
              type="submit"
              className="bg-white text-purple-800 px-4 py-2 rounded-md font-semibold hover:bg-purple-100 w-full sm:w-auto"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <p className="mb-1">
            For sales: <a href="mailto:sales@bullworkmobility.com" className="text-purple-300">sales@bullworkmobility.com</a>
          </p>
          <p className="mb-1">
            For information: <a href="mailto:info@bullworkmobility.com" className="text-purple-300">info@bullworkmobility.com</a>
          </p>
          <p className="mb-4">
            Call us at: <span className="text-purple-300">8123596969, 8123296969</span>
          </p>

          <h3 className="font-bold mb-2">Visit Us:</h3>
          <div className="flex items-start gap-2">
            <MdLocationOn className="text-xl mt-1 shrink-0" />
            <p className="text-sm leading-relaxed">
              Survey No.26/1 and 27/2, Mallarabanavadi Village,<br />
              Kunigal Bypass Rd, Nelamangala Town, Karnataka<br />
              562123
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-bold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-400">Blogs</a></li>
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">PRODUCTS</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-400">Electric Tractor</a></li>
              <li><a href="#" className="hover:text-purple-400">GLX E-Loader</a></li>
              <li><a href="#" className="hover:text-purple-400">Vamana</a></li>
              <li><a href="#" className="hover:text-purple-400">Warrior</a></li>
              <li><a href="#" className="hover:text-purple-400">0X-1</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">TECHNOLOGY</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-400">Autonomy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-white/30 mt-10" />
    </footer>
  );
}

