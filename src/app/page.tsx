import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-6">
          Smarter School. Better Learning.
        </h1>
        <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
          One intelligent platform to manage, analyze and improve the entire learning experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Explore Demo</Button>
          <Button variant="outline" size="lg">Sign In</Button>
        </div>
      </div>
    </main>
  );
}