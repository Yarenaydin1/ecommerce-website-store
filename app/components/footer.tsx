
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t mt-10">
      <div className="container mx-auto py-10 justify-center"> 
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 w-full max-w-6xl text-center"> {/* Değişiklik burada */}
            {/* Menü Bölümleri */}
            <div className="md:col-start-1 md:col-span-3 flex flex-col justify-start">
              <h3 className="text-lg font-semibold mb-2 text-white">Get to Know Us</h3>
              <ul className="text-sm">
                <li><a href="#" className="text-white hover:text-pink-200">Careers</a></li>
                
                <li><a href="#" className="text-white hover:text-pink-200">About ChicPlace</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Contact Us</a></li>
              </ul>
            </div>
            <div className="md:col-span-3 flex flex-col justify-start">
              <h3 className="text-lg font-semibold mb-2 text-white">Make Money with Us</h3>
              <ul className="text-sm">
                <li><a href="#" className="text-white hover:text-pink-200">Sell Products on ChicPlace</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Become an Affiliate</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Advertise Your Products</a></li>
                <li>&nbsp;</li> {/* Placeholder to maintain height */}
              </ul>
            </div>
            <div className="md:col-span-3 flex flex-col justify-start">
              {/* İstediğiniz başlığı buraya ekleyebilirsiniz */}
              <h3 className="text-lg font-semibold mb-2 text-white">Let Us Help You</h3>
              <ul className="text-sm">
                <li><a href="#" className="text-white hover:text-pink-200">Frequently Asked Questions</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Your Account</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Your Orders</a></li>
                <li><a href="#" className="text-white hover:text-pink-200">Returns & Replacements</a></li>
              </ul>
            </div>

            {/* Sosyal Medya Bölümü */}
            <div className="md:col-span-3 flex flex-col justify-start items-center">
              <h3 className="text-lg font-semibold mb-2 text-white">Social Media</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-blue-500"><Facebook size={24} /></a>
                <a href="#" className="text-white hover:text-orange-500"><Instagram size={24} /></a>
                <a href="#" className="text-white hover:text-blue-500"><Twitter size={24} /></a>
                <a href="#" className="text-white hover:text-red-600"><Youtube size={24}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Section */}
      <div className="bg-gray-200 text-black text-center py-3 sm:py-6">
        <p className="text-sm sm:text-base">©2009-2024 ChicPlace All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;