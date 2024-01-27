import AnalysisCard from "@/components/AnalysisCard";
import LastOrders from "@/components/LastOrders";
import SalesTrend from "@/components/SalesTrend";
import TopPlatform from "@/components/TopPlatform";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen p-5 pt-60 sm:pt-40 md:pr-5 m-auto bg-neutral-50 max-w-[1440px] md:p-[100px] md:pt-[108px]">
      <section className="flex flex-col gap-5 lg:flex-row">
        <SalesTrend />
        <AnalysisCard />
      </section>
      <section className="flex gap-[26px] flex-col lg:flex-row">
        <LastOrders />
        <TopPlatform />
      </section>
    </main>
  );
}
