const Footer = () => {
  return (
    <footer className="font-[FiraCode] bg-[#FDF9F4] text-[#3E3E3E] dark:bg-[#2A1E0C] dark:text-[#D9CFC1] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Branding */}
        <div>
          <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2996E] tracking-wide transition-colors duration-500">
            ☕ DripCafe
          </h1>
          <p className="mt-3 text-sm text-[#6B4F4F] dark:text-[#BDAA9E] leading-relaxed transition-colors duration-500">
            Brewing happiness, one cup at a time. Premium beans, heartfelt
            service.
          </p>
        </div>

        {/* Center: Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#5E3023] dark:text-[#C9B497] transition-colors duration-500">
            Navigation
          </h2>
          <ul className="space-y-2 text-sm">
            {["🏠 Home", "➕ Add Coffee", "🔐 Sign In", "👥 Users"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`/${
                      item.split(" ")[1].toLowerCase() === "home"
                        ? ""
                        : item.split(" ")[1].toLowerCase()
                    }`}
                    className="hover:text-[#C97A40] dark:hover:text-[#E5C290] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right: Connect / Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#5E3023] dark:text-[#C9B497] transition-colors duration-500">
            Stay Connected
          </h2>
          <p className="text-sm mb-3 text-[#6B4F4F] dark:text-[#BDAA9E] transition-colors duration-500">
            Join our mailing list for exclusive brews and bean drops.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs bg-white text-black placeholder:text-sm dark:bg-[#422F1F] dark:text-[#E6DCC6] dark:placeholder:text-[#CBB78A]"
            />
            <button className="btn bg-[#8B4513] hover:bg-[#A05C38] text-white dark:bg-[#D2996E] dark:hover:bg-[#E5C290] transition-colors duration-300">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#E4D6CC] dark:border-[#7A624A] text-center py-4 text-sm text-[#5E3023] dark:text-[#C9B497] transition-colors duration-500">
        © {new Date().getFullYear()} DripCafe — Roasted with ❤️ in every line.
      </div>
    </footer>
  );
};

export default Footer;
