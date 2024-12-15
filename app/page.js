import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" bg-slate-100 ">
        <button className="btn btn-active btn-primary"> Get Started</button>
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
      <div className=" bg-slate-500 ">
        <button className="btn btn-active btn-primary"> Get Started</button>
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
    </main>
  );
}
