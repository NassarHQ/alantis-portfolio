// "use client";
// import Section from "./Section";
// import { FEATURED_PROJECT } from "@/lib/content";
// import Link from "next/link";

// export default function FeaturedProject() {
//   const p = FEATURED_PROJECT;
//   return (
//     <Section id="project" title="Featured Project">
//       <div className="p-6 sm:p-8">
//         <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
//           <h3 className="text-lg font-semibold">
//             {p.title} • <span className="opacity-90">{p.client}</span>
//           </h3>
//           <span className="text-sm opacity-70 mt-1 sm:mt-0">{p.year}</span>
//         </div>

//         <p className="mt-3 opacity-90">{p.summary}</p>
//         <ul className="mt-3 list-disc pl-5 space-y-2">
//           {p.highlights.map((h) => (
//             <li key={h}>{h}</li>
//           ))}
//         </ul>

//         {p.artifacts?.length ? (
//           <div className="mt-5 grid gap-3 sm:grid-cols-2">
//             {p.artifacts.map((a) => (
//               <Link
//                 key={a.name}
//                 href={a.href}
//                 target="_blank"
//                 className="rounded-lg border border-white/10 px-4 py-3 hover:bg-white/10 text-sm"
//               >
//                 {a.name}
//               </Link>
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </Section>
//   );
// }
