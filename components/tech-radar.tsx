"use client";

import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface Technology {
  name: string;
  category: string;
  experience: number; // 1-4 (Core, Regular, Occasional, Learning)
}

const technologies: Technology[] = [
  { name: "React", category: "Frontend", experience: 4 },
  { name: "Next.js", category: "Frontend", experience: 4 },
  { name: "TypeScript", category: "Languages", experience: 4 },
  { name: "Node.js", category: "Backend", experience: 3 },
  { name: "GraphQL", category: "Backend", experience: 3 },
  { name: "AWS", category: "Infrastructure", experience: 3 },
  { name: "Docker", category: "Infrastructure", experience: 2 },
  { name: "Kubernetes", category: "Infrastructure", experience: 2 },
  { name: "Rust", category: "Languages", experience: 1 },
  { name: "WebAssembly", category: "Frontend", experience: 1 },
];

export function TechRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = theme === "dark";
    const textColor = isDark ? "#ffffff" : "#000000";
    const gridColor = isDark ? "#ffffff20" : "#00000020";
    const dotColors = ["#22c55e", "#3b82f6", "#a855f7", "#ef4444"];

    // Set canvas size
    const size = Math.min(window.innerWidth - 40, 600);
    canvas.width = size;
    canvas.height = size;
    const center = size / 2;
    const maxRadius = (size - 40) / 2;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw circles
    for (let i = 1; i <= 4; i++) {
      ctx.beginPath();
      ctx.arc(center, center, (maxRadius * i) / 4, 0, Math.PI * 2);
      ctx.strokeStyle = gridColor;
      ctx.stroke();
    }

    // Draw category lines
    const categories = Array.from(new Set(technologies.map((t) => t.category)));
    const angleStep = (Math.PI * 2) / categories.length;

    categories.forEach((_, i) => {
      ctx.beginPath();
      ctx.moveTo(center, center);
      const angle = i * angleStep - Math.PI / 2;
      ctx.lineTo(
        center + Math.cos(angle) * maxRadius,
        center + Math.sin(angle) * maxRadius
      );
      ctx.strokeStyle = gridColor;
      ctx.stroke();

      // Draw category labels
      ctx.save();
      ctx.translate(
        center + Math.cos(angle) * (maxRadius + 20),
        center + Math.sin(angle) * (maxRadius + 20)
      );
      ctx.rotate(angle + Math.PI / 2);
      ctx.fillStyle = textColor;
      ctx.font = "12px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(categories[i], 0, 0);
      ctx.restore();
    });

    // Plot technologies
    technologies.forEach((tech) => {
      const categoryIndex = categories.indexOf(tech.category);
      const angle = categoryIndex * angleStep - Math.PI / 2;
      const radius = (maxRadius * (5 - tech.experience)) / 4;

      // Draw dot
      ctx.beginPath();
      ctx.arc(
        center + Math.cos(angle) * radius,
        center + Math.sin(angle) * radius,
        6,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = dotColors[tech.experience - 1];
      ctx.fill();

      // Draw label
      ctx.fillStyle = textColor;
      ctx.font = "12px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(
        tech.name,
        center + Math.cos(angle) * radius,
        center + Math.sin(angle) * radius - 12
      );
    });
  }, [theme]);

  return (
    <Card className="p-4">
      <canvas ref={canvasRef} className="w-full max-w-[600px] mx-auto" />
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#22c55e]" />
          <span className="text-sm">Core</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#3b82f6]" />
          <span className="text-sm">Regular</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#a855f7]" />
          <span className="text-sm">Occasional</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ef4444]" />
          <span className="text-sm">Learning</span>
        </div>
      </div>
    </Card>
  );
}
