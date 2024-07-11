export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-bold text-white">Keyboard Zone</h5>
              <p>&copy; 2024 Keyboard Zone. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="hover:text-white">
                About Us
              </a>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
