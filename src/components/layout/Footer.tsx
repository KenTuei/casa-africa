const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold">Casa Africa</h2>
          <p className="mt-3 text-sm">
            Practical software products built for Africa.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">info@casaafrica.io</p>
          <p className="text-sm">Nairobi, Kenya</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Casa Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
