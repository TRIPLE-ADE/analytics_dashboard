import Link from "next/link";
import { topPlatformData } from "@/app/data";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const TopPlatform = () => {
    return (
        <div className="bg-white rounded-[14px] border border-slate-100  pl-5 p-4 pb-8 transition-all hover:shadow lg:w-[37.8%] flex flex-col gap-5">
            <div className="flex items-center justify-between mb-[14px]">
                <h5 className="text-lg font-semibold leading-relaxed text-zinc-800">Top Platform</h5>
                <Link href="/" className="text-lg font-medium leading-relaxed text-center text-emerald-400">See All</Link>
            </div>
            {
                topPlatformData.map(({ title, amount, percentage, percentageIncrease, color }, index) => (
                    <div key={index} className="text-lg font-normal leading-relaxed text-neutral-600">
                        <p className="font-semibold text-zinc-800 mb-[17px]">{title}</p>
                        <ProgressBar percentage={percentage} color={color} />
                        <div className="flex items-center justify-between mt-4 text-neutral-600">
                            <div>{amount}</div>
                            <div>{percentageIncrease}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TopPlatform
