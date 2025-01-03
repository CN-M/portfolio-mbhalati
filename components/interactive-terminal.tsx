"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const commands = [
  { text: "pnpm create next-app@latest my-project", delay: 1000 },
  { text: "cd my-project", delay: 500 },
  { text: "pnpm install -D prettier", delay: 2000 },
  { text: "pnpm run dev", delay: 1000 },
  { text: "Ready - started server on http://localhost:3000", delay: 500 },
];

export function InteractiveTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || currentLine >= commands.length) return;

    let timeout: NodeJS.Timeout;
    const command = commands[currentLine];
    let currentText = "";
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < command.text.length) {
        currentText += command.text[charIndex];
        setText(currentText);
        charIndex++;
        timeout = setTimeout(typeChar, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, command.delay);
      }
    };

    timeout = setTimeout(typeChar, 500);

    return () => clearTimeout(timeout);
  }, [isVisible, currentLine]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      ref={containerRef}
      className="bg-zinc-950 p-4 font-mono text-sm text-white"
    >
      <div className="flex space-x-2 mb-4">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-2">
        {commands.slice(0, currentLine).map((command, i) => (
          <div key={i} className="flex">
            <span className="text-green-400 mr-2">$</span>
            <span>{command.text}</span>
          </div>
        ))}
        {currentLine < commands.length && (
          <div className="flex">
            <span className="text-green-400 mr-2">$</span>
            <span>{text}</span>
            {showCursor && <span className="ml-1 animate-pulse">▋</span>}
          </div>
        )}
      </div>
    </Card>
  );
}
