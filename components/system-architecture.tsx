"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

interface Node {
  id: string;
  label: string;
  type: "frontend" | "backend" | "database" | "cache" | "queue";
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
  label: string;
}

const nodes: Node[] = [
  { id: "frontend", label: "Next.js Frontend", type: "frontend", x: 20, y: 20 },
  { id: "api", label: "API Gateway", type: "backend", x: 50, y: 20 },
  { id: "auth", label: "Auth Service", type: "backend", x: 80, y: 20 },
  { id: "cache", label: "Redis Cache", type: "cache", x: 35, y: 50 },
  { id: "queue", label: "Message Queue", type: "queue", x: 65, y: 50 },
  { id: "db", label: "PostgreSQL", type: "database", x: 50, y: 80 },
];

const connections: Connection[] = [
  { from: "frontend", to: "api", label: "REST/GraphQL" },
  { from: "api", to: "auth", label: "JWT" },
  { from: "api", to: "cache", label: "Cache Layer" },
  { from: "api", to: "queue", label: "Events" },
  { from: "auth", to: "db", label: "User Data" },
  { from: "api", to: "db", label: "CRUD" },
];

const nodeColors = {
  frontend: "#3B82F6",
  backend: "#10B981",
  database: "#8B5CF6",
  cache: "#F59E0B",
  queue: "#EC4899",
};

export function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    const nodesOrder = nodes.map((node) => node.id);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex >= nodesOrder.length) {
        setIsAnimating(false);
        setActiveNode(null);
        clearInterval(interval);
        return;
      }

      setActiveNode(nodesOrder[currentIndex]);
      currentIndex++;
    }, 1000);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold"></h3>
          <Button
            variant="outline"
            onClick={startAnimation}
            disabled={isAnimating}
          >
            Simulate Request Flow
          </Button>
        </div>

        <div className="relative aspect-square sm:aspect-video w-full">
          <svg
            ref={svgRef}
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Draw connections */}
            {connections.map((conn) => {
              const from = nodes.find((n) => n.id === conn.from)!;
              const to = nodes.find((n) => n.id === conn.to)!;
              const isActive =
                activeNode &&
                (activeNode === conn.from || activeNode === conn.to);

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke={isActive ? nodeColors["frontend"] : "#94a3b8"}
                    strokeWidth={isActive ? "0.8" : "0.5"}
                    strokeDasharray={isActive ? "none" : "2,2"}
                  />
                  <text
                    x={`${(from.x + to.x) / 2}%`}
                    y={`${(from.y + to.y) / 2 - 1}%`}
                    textAnchor="middle"
                    className="fill-current text-[1.5px]"
                  >
                    {conn.label}
                  </text>
                </g>
              );
            })}

            {/* Draw nodes */}
            {nodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer"
                  onClick={() => handleNodeClick(node.id)}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.circle
                        initial={{ r: 3 }}
                        animate={{ r: 4.5 }}
                        exit={{ r: 3 }}
                        cx="0"
                        cy="0"
                        fill={nodeColors[node.type]}
                        opacity="0.3"
                      />
                    )}
                  </AnimatePresence>
                  <circle
                    r="2"
                    fill={nodeColors[node.type]}
                    stroke={isActive ? "#000" : "none"}
                    strokeWidth="0.5"
                  />
                  <text
                    y="5"
                    textAnchor="middle"
                    className="fill-current text-[2px] font-medium"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {Object.entries(nodeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm capitalize">{type}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
