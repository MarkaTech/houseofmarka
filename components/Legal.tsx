import type { ReactNode } from 'react';

/**
 * Long-form legal copy. The arbitrary-variant selectors style the headings,
 * paragraphs and lists the pages write as plain elements, so each policy stays
 * readable as ordinary JSX.
 */
export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div className="shell pb-24">
      <div className="max-w-3xl space-y-10 text-[15px] leading-relaxed text-bone-300 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-bone-50 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-bone-100 [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
