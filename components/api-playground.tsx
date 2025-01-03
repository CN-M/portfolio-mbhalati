"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import { useState } from "react";

const endpoints = [
  {
    name: "Get User",
    method: "GET",
    path: "/api/users/:id",
    description: "Fetch user details by ID",
    parameters: [{ name: "id", type: "string", required: true }],
    backendCode: `
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await db.users.findUnique({
      where: { id: params.id }
    })
    
    return new Response(JSON.stringify({ user }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), { status: 500 })
  }
}`,
  },
  {
    name: "Create Post",
    method: "POST",
    path: "/api/posts",
    description: "Create a new blog post",
    parameters: [
      { name: "title", type: "string", required: true },
      { name: "content", type: "string", required: true },
    ],
    backendCode: `
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newPost = await db.posts.create({
      data: {
        title: body.title,
        content: body.content
      }
    })

    return new Response(JSON.stringify({ post: newPost }), { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create post" }), { status: 500 })
  }
}`,
  },
  {
    name: "Update Status",
    method: "PUT",
    path: "/api/status",
    description: "Update user status",
    parameters: [
      { name: "status", type: "string", required: true },
      { name: "message", type: "string", required: false },
    ],
    backendCode: `
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const updatedStatus = await db.status.update({
      where: { id: body.id },
      data: {
        status: body.status,
        message: body.message || null,
      }
    })

    return new Response(JSON.stringify({ status: updatedStatus }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update status" }), { status: 500 })
  }
}`,
  },
];

export function APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [parameters, setParameters] = useState<Record<string, string>>({});

  const handleSubmit = async () => {
    setLoading(true);
    setResponse("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockResponse = {
      success: true,
      data: {
        id: "123",
        ...parameters,
        timestamp: new Date().toISOString(),
      },
    };

    setResponse(JSON.stringify(mockResponse, null, 2));
    setLoading(false);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Tabs defaultValue="playground" className="space-y-4">
          <TabsList>
            <TabsTrigger value="playground">Playground</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="playground" className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {endpoints.map((endpoint) => (
                <Button
                  key={endpoint.name}
                  variant={
                    selectedEndpoint === endpoint ? "default" : "outline"
                  }
                  onClick={() => {
                    setSelectedEndpoint(endpoint);
                    setParameters({});
                    setResponse("");
                  }}
                >
                  {endpoint.name}
                </Button>
              ))}
            </div>

            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="font-semibold text-primary">
                  {selectedEndpoint.method}
                </span>
                <span>{selectedEndpoint.path}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {selectedEndpoint.description}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {selectedEndpoint.parameters.map((param) => (
                <div
                  key={param.name}
                  className="flex flex-col items-center sm:flex-row gap-2 sm:gap-4"
                >
                  <label className="text-sm font-medium">
                    {param.name}
                    {param.required && (
                      <span className="text-destructive">*</span>
                    )}
                  </label>
                  <Input
                    className="mt-1.5 w-full sm:w-auto"
                    placeholder={`Enter ${param.name}`}
                    value={parameters[param.name] || ""}
                    onChange={(e) =>
                      setParameters((prev) => ({
                        ...prev,
                        [param.name]: e.target.value,
                      }))
                    }
                  />
                </div>
              ))}
            </div>
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={loading}
            >
              <Play className="mr-2 size-4" />
              {loading ? "Sending Request..." : "Send Request"}
            </Button>

            {response && (
              <pre className="mt-4 overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
                {response}
              </pre>
            )}
          </TabsContent>

          <TabsContent value="code">
            <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
              {selectedEndpoint.backendCode}
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
