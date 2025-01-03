"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const examples = {
  "Typescript Express Server": {
    title: "Basic Express Server",
    description:
      "A simple Express.js server with CRUD operations using TypeScript",
    code: `import express, { Request, Response } from 'express';

    const app = express();
    const PORT = 3000;
    
    // In-memory storage for demonstration purposes
    const dataStore: Record<number, string> = {};
    
    app.use(express.json());
    
    app.get('/', (req: Request, res: Response) => {
        res.json({ message: "Welcome to the ExpressJS Server!" });
    });
    
    app.get('/items', (req: Request, res: Response) => {
        res.json({ items: dataStore });
    });
    
    app.post('/items', (req: Request, res: Response) => {
        const { id, name } = req.body;
        if (!id || !name) {
            return res.status(400).json({ error: "Invalid data" });
        }
        dataStore[id] = name;
        res.json({ success: true, added: { id, name } });
    });
    
    app.get('/items/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        if (!(id in dataStore)) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json({ id, name: dataStore[id] });
    });
    
    app.delete('/items/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        if (id in dataStore) {
            const deletedItem = dataStore[id];
            delete dataStore[id];
            return res.json({ success: true, deleted: { id, name: deletedItem } });
        }
        res.status(404).json({ error: "Item not found" });
    });
    
    app.listen(PORT, () => {
        console.log(\`Server is running on http://localhost:\${PORT}\`);
    });
    `,
  },
  "Python Flask Server": {
    title: "Basic Flask Server",
    description: "A simple Flask server with CRUD operations",
    code: `from flask import Flask, request, jsonify

    app = Flask(__name__)
    
    # In-memory storage for demonstration purposes
    data_store = {}
    
    @app.route("/")
    def home():
        return jsonify(message="Welcome to the Flask Server!")
    
    @app.route("/items", methods=["GET", "POST"])
    def manage_items():
        if request.method == "GET":
            return jsonify(items=data_store)
        elif request.method == "POST":
            data = request.get_json()
            if not data or "id" not in data or "name" not in data:
                return jsonify(error="Invalid data"), 400
            data_store[data["id"]] = data["name"]
            return jsonify(success=True, added=data)
    
    @app.route("/items/<int:item_id>", methods=["GET", "DELETE"])
    def handle_item(item_id):
        if request.method == "GET":
            if item_id not in data_store:
                return jsonify(error="Item not found"), 404
            return jsonify(id=item_id, name=data_store[item_id])
        elif request.method == "DELETE":
            if item_id in data_store:
                deleted_item = data_store.pop(item_id)
                return jsonify(success=True, deleted=deleted_item)
            return jsonify(error="Item not found"), 404
    
    if __name__ == "__main__":
        app.run(debug=True)
    `,
  },
  "Go Server": {
    title: "Basic Go HTTP Server",
    description: "A simple HTTP server written in Go",
    code: `package main

    import (
        "fmt"
        "net/http"
    )
    
    func helloHandler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Hello, World!")
    }
    
    func main() {
        http.HandleFunc("/", helloHandler)
        fmt.Println("Server is running on http://localhost:8080")
        if err := http.ListenAndServe(":8080", nil); err != nil {
            fmt.Println("Error starting server:", err)
        }
    }`,
  },
};

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState(Object.keys(examples)[0]);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(
      examples[activeTab as keyof typeof examples].code
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <TabsList className="w-full sm:w-auto">
              {Object.keys(examples).map((key) => (
                <TabsTrigger key={key} value={key}>
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button
              variant="outline"
              size="sm"
              onClick={copyCode}
              className="ml-auto"
            >
              {copied ? (
                <>
                  <Check className="mr-2 size-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 size-4" />
                  Copy Code
                </>
              )}
            </Button>
          </div>

          {Object.entries(examples).map(([key, example]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-muted p-2 sm:p-4 font-mono text-xs sm:text-sm">
                {example.code}
              </pre>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
