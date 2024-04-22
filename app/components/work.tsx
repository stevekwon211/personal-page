import Image from "next/image";
import Group1 from "app/public/animal/Group 1 Medium.png";

export function Work() {
    return (
        <div className="grid grid-cols-3">
            <div className="">
                <p className="text-sm gap-5 text-center text-slate-400 underline decoration-solid">
                    <a href="https://disquiet.io/">DISQUIET</a>
                </p>
                <p className="text-sm text-slate-400 text-center m-8">2022 ~ Present</p>
                <div className="grid grid-rows-2">
                    <Image src={Group1} alt="Group-1" width={300} height={300} />
                </div>
            </div>

            <div className="">
                <p className="text-sm gap-5 text-center text-slate-400 underline decoration-solid">
                    <a href="https://www.youtube.com/watch?v=yehd_khX-NA">SHIFT</a>
                </p>
                <p className="text-sm text-slate-400 text-center m-8">2020 ~ 2022</p>

                <div className="grid grid-rows-2">
                    <Image src={Group1} alt="Group-1" width={300} height={300} />
                </div>
            </div>

            <div className="">
                <p className="text-sm gap-5 text-center text-slate-400 underline decoration-solid">
                    <a href="https://github.com/J2KB">J2KB</a>
                </p>
                <p className="text-sm text-slate-400 text-center m-8">2020 ~ 2021</p>
                <div className="grid grid-rows-2">
                    <Image src={Group1} alt="Group-1" width={300} height={300} />
                </div>
            </div>
        </div>
    );
}
