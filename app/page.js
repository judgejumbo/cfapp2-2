import Image from "next/image";

export default function Home() {
  return (
    <main>
      <button className="btn btn-active btn-primary"> Get Started</button>
      <button className="btn btn-outline">Default</button>
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      <button className="btn btn-outline btn-accent">Accent</button>
    </main>
  );
}
