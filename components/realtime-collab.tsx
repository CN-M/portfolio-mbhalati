"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Cursor {
  id: string;
  x: number;
  y: number;
  color: string;
  name: string;
}

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33F5"];
const names = ["Alice", "Bob", "Charlie", "David"];

export function RealtimeCollab() {
  const [cursors, setCursors] = useState<Cursor[]>([]);
  const [localCursor, setLocalCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate other users' cursors
    const otherCursors = Array.from({ length: 3 }, (_, i) => ({
      id: `user-${i}`,
      x: Math.random() * 95, // Constrain to within bounds
      y: Math.random() * 95,
      color: colors[i],
      name: names[i],
    }));

    setCursors(otherCursors);

    const interval = setInterval(() => {
      setCursors((prev) =>
        prev.map((cursor) => ({
          ...cursor,
          x: Math.max(0, Math.min(95, cursor.x + (Math.random() - 0.5) * 10)), // Constrain to bounds
          y: Math.max(0, Math.min(95, cursor.y + (Math.random() - 0.5) * 10)),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)); // Constrain to bounds
    const y = Math.max(0, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100));

    setLocalCursor({ x, y });
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Real-time Collaboration Demo</h3>
          <Badge variant="secondary">4 users online</Badge>
        </div>

        <div
          ref={containerRef}
          className="relative h-[200px] sm:h-[300px] rounded-lg border bg-muted/50"
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {cursors.map((cursor) => (
              <motion.div
                key={cursor.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute"
                style={{
                  left: `${cursor.x}%`,
                  top: `${cursor.y}%`,
                }}
              >
                <div
                  className="relative w-4 h-4 rounded-full"
                  style={{ backgroundColor: cursor.color }}
                >
                  <div className="absolute left-5 top-5 whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm">
                    {cursor.name}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="absolute"
              style={{
                left: `${localCursor.x}%`,
                top: `${localCursor.y}%`,
              }}
              animate={{
                x: `${localCursor.x}%`,
                y: `${localCursor.y}%`,
              }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="relative w-4 h-4 rounded-full bg-primary">
                <div className="absolute left-5 top-5 whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm">
                  You
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center text-center text-sm text-muted-foreground">
            Move your cursor around to see real-time collaboration in action
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
