interface Props {
  link: string;
  alt: string;
  title: string;
  description: string;
  subtitle?: string;
}

export function Cards({ link, alt, title, description, subtitle }: Props) {
  return (
    <div className="w-full max-w-xs min-w-3xs bg-[#0f0f16] border border-gray-800 rounded-3xl px-6 py-8 flex flex-col items-center text-center transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]">
      
      <img
        src={link}
        alt={alt}
        className="w-36 h-36 object-contain mb-6"
      />

      <h2 className="text-xl font-bold tracking-widest uppercase text-gray-100">
        {title}
      </h2>

      {subtitle && (
        <h3 className="text-base text-pink-400">{subtitle}</h3>
      )}

      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
