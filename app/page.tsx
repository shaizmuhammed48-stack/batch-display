import Header from "@/components/Header";
import Clock from "@/components/Clock";
import SlotBadge from "@/components/SlotBadge";
import Particles from "@/components/Particles";
import BatchStage from "@/components/BatchStage";

export default function Home() {
  return (
    <main>
      <Header />
      <Clock />
      <div style={{ textAlign: "center" }}>
        <SlotBadge />
      </div>
      <Particles />
      <BatchStage />
    </main>
  );
}
