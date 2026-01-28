interface Props {
    label: string;
}

export function SectionTitle({label}: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-28">
      <div className="border-t border-gray-800" />
      <h3 className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0a0a0f] px-6 text-pink-400 text-lg uppercase tracking-widest">
        {label}
      </h3>
    </div>
  );
}
