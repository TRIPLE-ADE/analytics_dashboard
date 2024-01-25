import Image from "next/image";

const SearchInput = () => {
    return (
        <div className="relative md:w-[349px]">
            <input
                type="search"
                name="search"
                id="search"
                className="w-full h-12 pl-[42px] font-normal leading-normal bg-white border tex6t-base rounded-3xl border-zinc-300 text-neutral-400"
                placeholder="Search..."
            />
            <Image
                src="/assets/icons/search.svg"
                alt="search icon"
                width={18}
                height={18}
                className="absolute top-0 bottom-0 my-auto left-4"
            />
        </div>
    )
}

export default SearchInput