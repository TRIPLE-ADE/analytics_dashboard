import ToggleButton from "@/components/ToggleButton"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
    return (
        <div className='fixed flex flex-col items-center w-20 h-full min-h-screen py-5 border-r bg-gray-50 border-r-slate-200'>
            <Image
                src="/assets/icons/logo.svg"
                alt="Calender"
                width={40}
                height={40}
                className="mx-auto"
            />
            <nav className="w-full mb-20">
                <ul className="flex flex-col mt-[30px] gap-9">
                    <li>
                        <Link href="/" className="relative nav-item">
                            <Image
                                src="/assets/icons/category.svg"
                                alt="Category"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/trend-up.svg"
                                alt="Trend Up"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/user.svg"
                                alt="user"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/box.svg"
                                alt="box"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/discount-shape.svg"
                                alt="Discount"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/info-circle.svg"
                                alt="Info Circle"
                                width={24}
                                height={24}
                                className="mx-auto"
                            />
                        </Link>
                    </li>
                </ul>
                <ToggleButton />
            </nav>
            <div className="flex flex-col w-full mt-auto gap-9">
                <Link href="/">
                    <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="Arrow Right"
                        width={24}
                        height={24}
                        className="mx-auto"
                    />
                </Link>
                <Link href="/">
                    <Image
                        src="/assets/icons/setting-2.svg"
                        alt="Settings"
                        width={24}
                        height={24}
                        className="mx-auto"
                    />
                </Link>
                <Link href="/">
                    <Image
                        src="/assets/icons/logout.svg"
                        alt="Logout"
                        width={24}
                        height={24}
                        className="mx-auto"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar