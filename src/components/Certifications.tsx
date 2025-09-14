// "use client";
// import React, { memo, useMemo } from "react";
// import { motion as m } from "framer-motion";
// import {
//   Shield,
//   Network,
//   Zap,
//   ExternalLink,
//   Award,
//   Calendar,
//   CheckCircle,
// } from "lucide-react";
// import { CERTS } from "@/lib/content";
// import Link from "next/link";

// // Define proper TypeScript interfaces
// interface CertificateData {
//   name: string;
//   issuer: string;
//   issued: string;
//   expires?: string;
//   code?: string;
//   href: string;
// }

// interface CertificateCardProps {
//   cert: CertificateData;
//   index: number;
// }

// // Minimal background with subtle animation
// const Background = memo(() => {
//   return (
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//       {/* Subtle grid */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>
//       {/* Single subtle glow */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
//     </div>
//   );
// });

// Background.displayName = "Background";

// // Clean certificate card
// const CertificateCard = memo<CertificateCardProps>(({ cert, index }) => {
//   // Simple icon mapping
//   const getIcon = (name: string) => {
//     const lower = name.toLowerCase();
//     if (lower.includes("a+")) return Shield;
//     if (lower.includes("network")) return Network;
//     if (lower.includes("operations") || lower.includes("cios")) return Zap;
//     return Award;
//   };

//   const Icon = getIcon(cert.name);

//   return (
//     <m.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       whileHover={{ y: -4, transition: { duration: 0.2 } }}
//       className="group"
//     >
//       <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.12] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04]">
//         {/* Simple header */}
//         <div className="flex items-start gap-4 mb-6">
//           <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
//             <Icon className="w-6 h-6 text-white/80" />
//           </div>
//           <div className="min-w-0 flex-1">
//             <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
//               {cert.name}
//             </h3>
//             <p className="text-sm text-white/60">{cert.issuer}</p>
//           </div>
//         </div>

//         {/* Clean details */}
//         <div className="space-y-3 mb-6">
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-white/50">Issued</span>
//             <span className="text-white/80">{cert.issued}</span>
//           </div>

//           {cert.expires && (
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-white/50">Expires</span>
//               <span className="text-white/80">{cert.expires}</span>
//             </div>
//           )}

//           {cert.code && (
//             <>
//               <div className="w-full h-px bg-white/[0.06] my-4" />
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-white/50">Code</span>
//                 <span className="font-mono text-white/70 text-xs">
//                   {cert.code}
//                 </span>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Simple status */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-400 rounded-full" />
//             <span className="text-sm text-white/60">Active</span>
//           </div>

//           <Link href={cert.href} target="_blank">
//             <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
//               View
//               <ExternalLink className="w-3 h-3" />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </m.div>
//   );
// });

// CertificateCard.displayName = "CertificateCard";

// export default memo(function Certifications() {
//   return (
//     <section
//       id="certs"
//       className="relative min-h-screen flex items-center py-20"
//     >
//       <Background />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
//         {/* Clean header */}
//         <m.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Certifications
//           </h2>
//           <p className="text-lg text-white/60 max-w-2xl mx-auto">
//             Professional certifications that validate my technical expertise
//           </p>
//         </m.div>

//         {/* Simple stats */}
//         <m.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center mb-12"
//         >
//           <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-white">
//                 {CERTS.length}
//               </div>
//               <div className="text-xs text-white/50 uppercase tracking-wide">
//                 Certificates
//               </div>
//             </div>
//             <div className="w-px h-8 bg-white/[0.1]" />
//             <div className="text-center">
//               <div className="text-2xl font-bold text-green-400">✓</div>
//               <div className="text-xs text-white/50 uppercase tracking-wide">
//                 Verified
//               </div>
//             </div>
//           </div>
//         </m.div>

//         {/* Clean grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {CERTS.map((cert, index) => (
//             <CertificateCard key={cert.name} cert={cert} index={index} />
//           ))}
//         </div>

//         {/* Simple footer */}
//         <m.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="text-center mt-16"
//         >
//           <p className="text-sm text-white/40">
//             All certificates are current and independently verifiable
//           </p>
//         </m.div>
//       </div>
//     </section>
//   );
// });
