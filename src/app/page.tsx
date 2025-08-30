import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to YogaSoul</h1>
      <p className="mt-4 text-lg">Your journey to wellness starts here.</p>
      <Image
        src="/images/yoga-pose.jpg"
        alt="Person meditating"
        width={500}
        height={500}
      />
    </main>
  );
}
