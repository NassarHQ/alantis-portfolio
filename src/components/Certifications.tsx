"use client";
import Section from "./Section";
import { CERTS } from "@/lib/content";
import Link from "next/link";

export default function Certifications() {
  return (
    <Section id="certs" title="Certificates Gallery">
      <div className="p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {CERTS.map((c) => (
            <figure
              key={c.name}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4"
            >
              <figcaption>
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm opacity-80">{c.issuer}</div>
                <div className="text-xs opacity-70">
                  Issued {c.issued}
                  {c.expires ? ` • Expires ${c.expires}` : ""}
                </div>
                {c.code ? (
                  <div className="text-xs opacity-70">Code: {c.code}</div>
                ) : null}
                <Link
                  href={c.href}
                  target="_blank"
                  className="mt-3 inline-block text-sm underline underline-offset-4"
                >
                  View certificate (PDF)
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
