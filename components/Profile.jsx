import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[253px] gap-5  flex items-center">
        <div className="flex items-center justify-between gap-[10px] px-4 pr-0 py-3">
          <Image
            src="/assets/icons/solar_calendar.svg"
            alt="Calender"
            width={20}
            height={20}
          />
          <p className="text-sm font-medium leading-snug text-zinc-800">
            November 15, 2023
          </p>
        </div>
        <div className="p-[11px] rounded-[27px] border border-zinc-300">
        <Image
            src="/assets/icons/solar_bell.svg"
            alt="notification"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="w-[215px] h-[52px] px-2 py-1.5 rounded-[28px] border border-zinc-300 justify-between items-center gap-2 flex">
        <Image
          src="/assets/images/profile.png"
          alt="profile"
          width={38}
          height={38}
        />
        <div className="flex items-center gap-3">
          <div className="inline-flex flex-col items-end justify-start gap-1">
            <p className="text-base font-normal text-zinc-800">
              Justin Bergson
            </p>
            <p className="text-sm font-normal text-zinc-500">
              Justin@gmail.com
            </p>
          </div>
          <Image
            src="/assets/icons/arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
