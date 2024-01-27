import Profile from "@/components/Profile";
import SearchInput from "@/components/SearchInput";

const Header = () => {
    return (
        <header className="fixed top-0 right-0 flex flex-col md:items-center justify-between py-[18px] w-full px-5 md:w-[calc(100%-5rem)] bg-neutral-50 border-b border-b-slate-200 z-50 md:flex-row">
            <h1 className="mb-5 text-xl font-semibold leading-7 text-zinc-800 md:mb-0">
                Dashboard
            </h1>
            <div className="flex items-start gap-[22px] flex-col sm:flex-row">
               <SearchInput />
               <Profile />
            </div>
        </header>
    );
};

export default Header;
