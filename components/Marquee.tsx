/**
 * Infinite horizontal scroller. The list is rendered twice so the -50%
 * keyframe in `animate-marquee` loops seamlessly; `.marquee-track` pauses the
 * animation on hover and `.mask-fade-x` feathers both edges.
 */
export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="mask-fade-x marquee-track relative overflow-hidden py-2">
      <div className="flex w-max animate-marquee items-center gap-8">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-[15px] font-medium tracking-tight text-bone-400 transition-colors duration-300 hover:text-bone-100">
              {item}
            </span>
            <span className="text-[10px] text-gold-400/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
