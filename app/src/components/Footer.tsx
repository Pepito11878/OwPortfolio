export function Footer() {
  return (
    <footer className="w-full bg-[#07070b] border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
        
        <p className="text-gray-400 text-sm">
          fait en {new Date().getFullYear()} par <span className="text-pink-400 font-semibold">Pepito11</span>
        </p>

      </div>
    </footer>
  );
}
