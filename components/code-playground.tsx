"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const DEFAULT_CODE = `const greet = (name) => {
  return \`Hello, \${name}!\`;
};

const add = (a, b) => {
  return a + b;
};

// Try it out!
console.log(greet("Ntsako"));
console.log(add(420, 69));`;

export function CodePlayground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Create a new function from the code and execute it
      const log = console.log;
      const logs: string[] = [];
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Execute the code
      new Function(code)();

      // Restore console.log and set output
      console.log = log;
      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  return (
    <Card className="grid gap-4 p-4">
      <div className="grid gap-2">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="min-h-[200px] sm:min-h-[300px] w-full rounded-md border bg-muted p-4 font-mono text-sm"
          spellCheck={false}
        />
        <Button onClick={runCode} className="w-full sm:w-auto">
          Run Code
        </Button>
      </div>
      {output && (
        <pre className="rounded-md bg-muted p-4 font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-words">
          {output}
        </pre>
      )}
    </Card>
  );
}
