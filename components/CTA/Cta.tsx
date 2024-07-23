type CtaProp = {
  ctaText: string;
};

const Cta: React.FC<CtaProp> = ({ ctaText }) => {
  return (
    <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-lg p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-blue-900 hover:bg-blue-500 transition-all duration-200 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl cursor-pointer">
        {ctaText}
      </span>
    </button>
  );
};
export default Cta;
