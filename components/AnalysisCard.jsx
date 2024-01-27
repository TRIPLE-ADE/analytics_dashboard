import { analysisData } from "@/app/data"
import Image from "next/image"

const AnalysisCard = () => {
    return (
        <div className="lg:w-[37.8%] grid grid-cols-2 grid-rows-2 gap-4">
            {
                analysisData.map(({title, value, percentage, icon, status}, index) => (
                    <div key={index} className="flex flex-col gap-[10px] p-4 bg-white rounded-[14px] border border-slate-100">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col items-center justify-center w-10 h-10 border rounded-full border-neutral-200">
                                <Image
                                    src={icon}
                                    alt="box-tick"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <Image
                                src={`/assets/icons/${status == 1 ? "rising-trend" : "falling-trend"}.svg`}
                                alt="rising-trend"
                                width={104}
                                height={32}
                                className="w-8/12"
                            />
                        </div>
                        <div>
                            <p className="block text-lg font-medium leading-relaxed text-zinc-500">{title}</p>
                            <p className="text-lg font-semibold leading-loose text-gray-700 lg:text-2xl ">{value}</p>
                        </div>
                        <div className="items-center justify-between lg:flex">
                            <div className={`w-[70px] h-6 px-2 py-1 ${status == 1 ? 'bg-emerald-400' : ' bg-red-500'} bg-opacity-10 rounded-full justify-center items-center gap-1 flex`}>
                                <Image
                                    src={`/assets/icons/${status == 1 ? "trending-up" : "trending-down"}.svg`}
                                    alt="trending-up"
                                    width={9}
                                    height={5}
                                />
                                <p className={`text-xs font-medium leading-none ${status == 1 ? 'text-emerald-400' : 'text-red-500'}`}>{percentage}%</p>
                            </div>
                            <p className="text-sm font-normal text-zinc-600">vs. previous month</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AnalysisCard
