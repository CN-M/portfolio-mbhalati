"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion"

interface Metric {
  name: string
  value: number
  change: number
  unit: string
  threshold: number
}

const metrics: Metric[] = [
  {
    name: "Response Time",
    value: 120,
    change: -15,
    unit: "ms",
    threshold: 200,
  },
  {
    name: "Error Rate",
    value: 0.05,
    change: -0.02,
    unit: "%",
    threshold: 1,
  },
  {
    name: "CPU Usage",
    value: 45,
    change: 5,
    unit: "%",
    threshold: 80,
  },
  {
    name: "Memory Usage",
    value: 65,
    change: 10,
    unit: "%",
    threshold: 85,
  },
]

function generateTimeSeriesData(metric: Metric) {
  const data = []
  const now = Date.now()
  const baseValue = metric.value

  for (let i = 0; i < 24; i++) {
    data.push({
      time: new Date(now - (23 - i) * 3600000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value: baseValue + (Math.random() - 0.5) * baseValue * 0.5,
    })
  }

  return data
}

export function PerformanceDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<Metric>(metrics[0])
  const [data, setData] = useState(() => generateTimeSeriesData(selectedMetric))

  useEffect(() => {
    setData(generateTimeSeriesData(selectedMetric))
  }, [selectedMetric])

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`cursor-pointer ${
                  selectedMetric === metric
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setSelectedMetric(metric)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <Badge
                      variant={
                        metric.value < metric.threshold
                          ? "default"
                          : "destructive"
                      }
                    >
                      {metric.value}
                      {metric.unit}
                    </Badge>
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      metric.change > 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {metric.change > 0 ? "+" : ""}
                    {metric.change}
                    {metric.unit}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                domain={[
                  0,
                  Math.max(selectedMetric.threshold, selectedMetric.value * 1.5),
                ]}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="currentColor"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

