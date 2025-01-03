"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Bar {
  value: number;
  state: "default" | "comparing" | "sorted" | "selected";
}

const ALGORITHMS = {
  bubble: "Bubble Sort",
  quick: "Quick Sort",
  merge: "Merge Sort",
};

export function AlgorithmVisualizer() {
  const [bars, setBars] = useState<Bar[]>([]);
  const [algorithm, setAlgorithm] = useState<keyof typeof ALGORITHMS>("bubble");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(50);
  const sortingRef = useRef<boolean>(false);

  // Generate initial bars
  const generateBars = (count: number = 20) => {
    const newBars: Bar[] = Array.from({ length: count }, () => ({
      value: Math.floor(Math.random() * 100) + 1,
      state: "default",
    }));
    setBars(newBars);
  };

  useEffect(() => {
    generateBars();
  }, []);

  // Sleep function for controlling animation speed
  const sleep = (ms: number) => {
    return new Promise((resolve) =>
      setTimeout(resolve, Math.max(10, 150 - ms * 1.4))
    );
  };

  // Bubble Sort Implementation
  const bubbleSort = async () => {
    const arr = [...bars];
    const n = arr.length;

    for (let i = 0; i < n - 1 && sortingRef.current; i++) {
      let swapped = false;

      for (let j = 0; j < n - i - 1 && sortingRef.current; j++) {
        // Set comparing state
        arr[j].state = "comparing";
        arr[j + 1].state = "comparing";
        setBars([...arr]);

        await sleep(speed);

        if (arr[j].value > arr[j + 1].value) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }

        // Reset comparing state
        arr[j].state = "default";
        arr[j + 1].state = "default";
        setBars([...arr]);
      }

      // Mark as sorted
      arr[n - i - 1].state = "sorted";
      setBars([...arr]);

      if (!swapped) break;
    }

    // Mark remaining elements as sorted
    if (sortingRef.current) {
      arr.forEach((bar) => (bar.state = "sorted"));
      setBars([...arr]);
    }
  };

  // Quick Sort Implementation
  const quickSort = async () => {
    const arr = [...bars];

    const partition = async (low: number, high: number) => {
      const pivot = arr[high].value;
      arr[high].state = "selected";
      setBars([...arr]);

      let i = low - 1;

      for (let j = low; j < high && sortingRef.current; j++) {
        arr[j].state = "comparing";
        setBars([...arr]);
        await sleep(speed);

        if (arr[j].value < pivot) {
          i++;
          // Swap elements
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setBars([...arr]);
        }

        arr[j].state = "default";
        setBars([...arr]);
      }

      // Place pivot in correct position
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      arr[i + 1].state = "sorted";
      setBars([...arr]);

      return i + 1;
    };

    const sort = async (low: number, high: number) => {
      if (low < high && sortingRef.current) {
        const pi = await partition(low, high);
        await Promise.all([sort(low, pi - 1), sort(pi + 1, high)]);
      }
    };

    await sort(0, arr.length - 1);

    if (sortingRef.current) {
      arr.forEach((bar) => (bar.state = "sorted"));
      setBars([...arr]);
    }
  };

  // Merge Sort Implementation
  const mergeSort = async () => {
    const arr = [...bars];

    const merge = async (left: number, middle: number, right: number) => {
      const n1 = middle - left + 1;
      const n2 = right - middle;

      const L = arr.slice(left, middle + 1);
      const R = arr.slice(middle + 1, right + 1);

      let i = 0,
        j = 0,
        k = left;

      while (i < n1 && j < n2 && sortingRef.current) {
        arr[k].state = "comparing";
        setBars([...arr]);
        await sleep(speed);

        if (L[i].value <= R[j].value) {
          arr[k] = { ...L[i], state: "default" };
          i++;
        } else {
          arr[k] = { ...R[j], state: "default" };
          j++;
        }
        k++;
        setBars([...arr]);
      }

      while (i < n1 && sortingRef.current) {
        arr[k] = { ...L[i], state: "default" };
        i++;
        k++;
        setBars([...arr]);
        await sleep(speed);
      }

      while (j < n2 && sortingRef.current) {
        arr[k] = { ...R[j], state: "default" };
        j++;
        k++;
        setBars([...arr]);
        await sleep(speed);
      }

      // Mark the merged section as sorted
      for (let m = left; m <= right; m++) {
        arr[m].state = "sorted";
      }
      setBars([...arr]);
    };

    const sort = async (left: number, right: number) => {
      if (left < right && sortingRef.current) {
        const middle = Math.floor((left + right) / 2);
        await sort(left, middle);
        await sort(middle + 1, right);
        await merge(left, middle, right);
      }
    };

    await sort(0, arr.length - 1);

    if (sortingRef.current) {
      arr.forEach((bar) => (bar.state = "sorted"));
      setBars([...arr]);
    }
  };

  const startSorting = async () => {
    setIsRunning(true);
    sortingRef.current = true;

    try {
      switch (algorithm) {
        case "bubble":
          await bubbleSort();
          break;
        case "quick":
          await quickSort();
          break;
        case "merge":
          await mergeSort();
          break;
      }
    } finally {
      setIsRunning(false);
      sortingRef.current = false;
    }
  };

  const stopSorting = () => {
    sortingRef.current = false;
    setIsRunning(false);
  };

  const reset = () => {
    stopSorting();
    generateBars();
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="w-full sm:w-auto">
            <Select
              value={algorithm}
              onValueChange={(value) =>
                setAlgorithm(value as keyof typeof ALGORITHMS)
              }
              disabled={isRunning}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select algorithm" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(ALGORITHMS).map(([key, name]) => (
                  <SelectItem key={key} value={key}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Speed:</span>
            <Slider
              value={[speed]}
              onValueChange={([value]) => setSpeed(value)}
              min={1}
              max={99}
              step={1}
              className="w-[100px]"
              disabled={isRunning}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={isRunning ? "outline" : "default"}
              onClick={isRunning ? stopSorting : startSorting}
            >
              {isRunning ? (
                <>
                  <Pause className="mr-2 size-4" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="mr-2 size-4" />
                  Start
                </>
              )}
            </Button>
            <Button variant="outline" onClick={reset} disabled={isRunning}>
              <RotateCcw className="mr-2 size-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="h-[200px] sm:h-[300px] flex items-end justify-center gap-0.5 sm:gap-1">
          {bars.map((bar, index) => (
            <div
              key={index}
              // className={`w-2 sm:w-4 transition-all duration-200 ${
              className={`w-2 sm:w-8 transition-all duration-200 ${
                bar.state === "comparing"
                  ? "bg-yellow-500"
                  : bar.state === "sorted"
                    ? "bg-green-500"
                    : bar.state === "selected"
                      ? "bg-purple-500"
                      : "bg-primary"
              }`}
              style={{ height: `${bar.value}%` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
