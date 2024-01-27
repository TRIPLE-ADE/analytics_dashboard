import Link from "next/link";
import ordersArray from "@/app/data";
import Image from "next/image";

const LastOrders = () => {
    return (
        <div className="w-[806px] bg-white rounded-[14px] border border-slate-100  px-5 pt-[18px] pb-[31px]">
            <div className="flex items-center justify-between mb-[14px]">
                <h5 className="text-lg font-semibold leading-relaxed text-zinc-800">Last Orders</h5>
                <Link href="/" className="text-lg font-medium leading-relaxed text-center text-emerald-400">See All</Link>
            </div>
            <table className="w-full divide-y divide-slate-100">
                <thead>
                    <tr class="text-left text-gray-400 text-base font-medium leading-normal">
                        <th className="pb-5 ">Name</th>
                        <th className="pb-5 ">Date</th>
                        <th className="pb-5 ">Amount</th>
                        <th className="pb-5 ">Status</th>
                        <th className="pb-5 ">Invoice</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {ordersArray.map((data, index) => (
                        <tr key={index} className="text-base leading-normal">
                            <td className="flex items-center gap-[10px] pt-3 pb-6 font-medium text-gray-700">
                            <Image
                                    src={`/assets/images/order-pic${index+1}.png`}
                                    alt="Calender"
                                    width={32}
                                    height={32}
                                />
                            {data.name}
                            </td>
                            <td className="pt-3 pb-6 font-normal text-neutral-500">{data.date}</td>
                            <td className="pt-3 pb-6 font-medium text-slate-900">{data.amount}</td>
                            <td className={`pt-3 pb-6 ${data.status === "Paid" ? 'text-emerald-400' : "text-red-500"}`}>{data.status}</td>
                            <td className="flex items-center pt-3 pb-6 text-sm font-normal leading-snug text-slate-900 gap-[6px] hover:scale-105 cursor-pointer transition-all">
                                <Image
                                    src="/assets/icons/download.svg"
                                    alt="Calender"
                                    width={16}
                                    height={16}
                                />
                                {data.action}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LastOrders;
