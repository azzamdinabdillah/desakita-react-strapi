export default function Pagination() {
  return (
    <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
      <img src="/icons/pagination-right.svg" alt="" className="rotate-180" />
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
        >
          {index + 1}
        </div>
      ))}
      <img src="/icons/pagination-right.svg" alt="" />
    </div>
  );
}
