'use client';

import React from "react";
import Link from "next/link";

export interface AddonDetailsProps {
  license?: string;
  componentCount: number;
  topPicks: { name: string; href?: string; opinion: string }[];
  blocks: { name: string; href: string }[];
  kits: { name: string; href: string; type: "free" | "paid" }[];
}

export default function ShadcnAddonDetails({
  license = "MIT",
  componentCount,
  topPicks = [],
  blocks = [],
  kits = [],
}: AddonDetailsProps) {
  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-wrap gap-4 items-center text-sm mb-6">
        <span>License: {license}</span>
      </div>
{/* hell */}
      <h2>🔢 Component Count</h2>
      <p>
        <strong>Total main components:</strong> {componentCount}{' '}
        <em>(main components because there are more component variants per component and I don’t want to count them)</em>
      </p>

      {topPicks.length > 0 && (
        <>
          <h2>🌟 Top Picks</h2>
          <ul>
            {topPicks.map(({ name, href, opinion }) => (
              <li key={name} className="mb-2">
                {href ? (
                  <Link href={href} className="underline">
                    {name}
                  </Link>
                ) : (
                  name
                )}{' '}
                — <em>{opinion}</em>
              </li>
            ))}
          </ul>
        </>
      )}

      {blocks.length > 0 && (
        <>
          <h2>🧱 Blocks</h2>
          <ul>
            {blocks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {kits.length > 0 && (
        <>
          <h2>🚀 Starter Kits</h2>
          <ul>
            {kits.map(({ name, href, type }) => (
              <li key={name}>
                <Link href={href} className="underline">
                  {type === "free" ? "🆓" : "💰"} {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
