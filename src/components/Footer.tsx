import plainLogo from '../assets/images/plain_logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-10">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="bg-white rounded-lg px-4 py-2">
            <img src={plainLogo} alt="Casa Africa" className="h-8 w-auto object-contain" />
          </div>

          <p className="text-sm text-white/50">
            © {currentYear} Casa Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
