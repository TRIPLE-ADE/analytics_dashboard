import Profile from "@/components/Profile";
import SearchInput from "@/components/SearchInput";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 flex items-center justify-between py-[18px] px-5 w-full bg-neutral-50">
            <h1 className="text-xl font-semibold leading-7 text-zinc-800">
                Dashboard
            </h1>
            <div className="flex items-start gap-[22px]">
               <SearchInput />
               <Profile />
            </div>
        </header>
    );
};

export default Header;
