"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Copy } from "lucide-react"
import { useState } from "react"

const codeSnippets = [
  {
    title: "React Custom Hook",
    language: "JavaScript",
    code: `// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};`,
    output: "Custom hook for clean API data fetching in React components"
  },
  {
    title: "Flutter Animation",
    language: "Dart",
    code: `// Smooth scale animation
AnimatedScale(
  scale: _isPressed ? 0.95 : 1.0,
  duration: Duration(milliseconds: 100),
  child: GestureDetector(
    onTapDown: (_) => setState(() => _isPressed = true),
    onTapUp: (_) => setState(() => _isPressed = false),
    child: Container(
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Text('Tap me!'),
    ),
  ),
)`,
    output: "Interactive button with smooth press animation"
  }
]

export function CodePlayground() {
  const [activeSnippet, setActiveSnippet] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Playground</h2>
          <p className="text-muted-foreground">
            Live code snippets showcasing my development approach and coding style
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Code Examples</h3>
                <Badge variant="secondary">{codeSnippets[activeSnippet].language}</Badge>
              </div>
              
              <div className="space-y-2">
                {codeSnippets.map((snippet, index) => (
                  <Button
                    key={index}
                    variant={activeSnippet === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveSnippet(index)}
                    className="w-full justify-start"
                  >
                    {snippet.title}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{codeSnippets[activeSnippet].title}</h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(codeSnippets[activeSnippet].code)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-muted-foreground">
                    {codeSnippets[activeSnippet].code}
                  </code>
                </pre>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Play className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Output:</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300">
                  {codeSnippets[activeSnippet].output}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}