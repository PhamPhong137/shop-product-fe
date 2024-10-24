import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Download, Paintbrush, Zap } from "lucide-react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

export default function PowerpointTemplatesLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link className="flex items-center space-x-2" to="#">
          <Presentation className="h-6 w-6" />
          <span className="font-bold text-xl">SlidesMaster</span>
        </Link>
        <nav className="flex space-x-4 sm:space-x-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#templates"
          >
            Templates
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Professional PowerPoint Templates
            </h1>
            <p className="text-xl text-muted-foreground">
              Elevate your presentations with our stunning, easy-to-use
              PowerPoint templates. Perfect for business, education, and
              creative projects.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link to="#templates">Browse Templates</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="templates" className="bg-muted py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Featured Templates
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((template) => (
                <Card key={template} className="overflow-hidden">
                  <Img
                    src="https://placehold.co/600x400/png"
                    alt="Description"
                    loader={<div>Loading...</div>}
                    unloader={<div>Failed to load image</div>}
                  />
                  <CardHeader>
                    <CardTitle>Business Template {template}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional design for impactful presentations
                    </p>
                    <Button className="w-full">Preview & Download</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Why Choose Our Templates?
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Paintbrush className="h-6 w-6" />
                    <span>Professional Design</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crafted by expert designers for a polished, professional
                    look.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Zap className="h-6 w-6" />
                    <span>Easy to Customize</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quickly adapt templates to your needs with intuitive
                    editing.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Download className="h-6 w-6" />
                    <span>Instant Download</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get your templates immediately after purchase. No waiting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-muted py-16 md:py-24 lg:py-32 text-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
              Simple Pricing, Powerful Templates
            </h2>
            <div className="max-w-sm mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">All Access Pass</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$49.99</div>
                  <ul className="text-left space-y-2 mb-6">
                    <li>✓ Access to all templates</li>
                    <li>✓ Lifetime updates</li>
                    <li>✓ Premium support</li>
                    <li>✓ Commercial use license</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2024 SlidesMaster. All rights reserved.
          </p>
          <nav className="flex justify-center space-x-4 sm:space-x-6">
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
