import Image from "next/image"

const ToggleButton = () => {
    return (
        <div>
            {/* darkMode Toggle */}
            <input
                type="checkbox"
                name="mode-switch"
                id="mode-switch"
                className="w-0 h-0"
            />
            <label
                htmlFor="mode-switch"
                className="relative block mx-auto w-[46px] h-[92px] p-2 bg-white rounded-[100px] shadow-inner dark:bg-gray dark:before:bg-deep-blue label"
            >
                <Image
                    src="/assets/icons/brightness.svg"
                    alt="brightness"
                    width={16.8}
                    height={16.8}
                    className={`absolute m-auto z-10 top-4 right-0 left-0`}
                />
                <Image
                    src="/assets/icons/moon.svg"
                    alt="dark"
                    width={30}
                    height={30}
                    className={`absolute bottom-0 m-auto z-10`}
                />

            </label>
        </div>
    )
}

export default ToggleButton