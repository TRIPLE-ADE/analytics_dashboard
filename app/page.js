import LastOrders from "@/components/LastOrders";
import SalesTrend from "@/components/SalesTrend";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen p-[100px] pt-[108px] m-auto bg-neutral-50 ">
      <section>
        <SalesTrend />
      </section>
      <section>
        <LastOrders />
      </section>
    </main>
  );
}
