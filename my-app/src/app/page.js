import Image from "next/image";
import Header from "./components/header";
import Card from "./components/Card";
export default function Home() {
  const Items = [
    { src: "/pendants.png", title: "PENDANTS" },
    { src: "/chains.png", title: "CHAINS" },
    { src: "/bangles.png", title: "BANGLES" },
    { src: "/necklaces.png", title: "NECKLACES" },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Items.map((item, index) => (
          <Card key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
}
