import Image from "next/image";
import dq1 from "app/public/work/dq1 Medium.png";
import dq2 from "app/public/work/dq2 Medium.png";
import dq3 from "app/public/work/dq3 Medium.png";
import dq4 from "app/public/work/dq4 Medium.png";
import shift1 from "app/public/work/shift1 Medium.png";
import shift2 from "app/public/work/shift2 Medium.png";
import shift3 from "app/public/work/shift3 Medium.png";
import j2kb1 from "app/public/work/j2kb1 Medium.png";
import j2kb2 from "app/public/work/j2kb2 Medium.png";

export function Work() {
    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="">
                <div>
                    <p className="text-sm text-center font-semibold text-indigo-600 underline decoration-solid">
                        <a href="https://disquiet.io/">disquiet</a>
                    </p>
                    <p className="text-sm text-slate-400 text-center m-6">2022 ~ present</p>
                    <p className="text-sm text-slate-400 text-center">operator, founding member</p>
                    <p className="text-sm text-slate-400 text-center mb-6">do everything we need</p>
                </div>
                <div className=" justify-center	">
                    <Image src={dq1} alt="dq1" width={300} height={300} className="mb-4" />
                    <Image src={dq3} alt="dq3" width={300} height={300} className="mb-4" />
                    <Image src={dq4} alt="dq4" width={300} height={300} className="mb-4" />
                </div>
            </div>

            <div className="">
                <div className="">
                    <p className="text-sm  text-center font-semibold text-blue-500 underline decoration-solid">
                        <a href="https://www.youtube.com/watch?v=yehd_khX-NA">shift</a>
                    </p>
                    <p className="text-sm text-slate-400 text-center m-6">2020 ~ 2022</p>
                    <p className="text-sm text-slate-400 text-center">head of people</p>
                    <p className="text-sm text-slate-400 text-center mb-6">partipants experiences</p>
                </div>
                <div className=" justify-center">
                    <Image src={shift1} alt="shift1" width={300} height={300} className="mb-4" />
                    <Image src={shift2} alt="shift2" width={300} height={300} className="mb-4" />
                    <Image src={shift3} alt="shift3" width={300} height={300} className="mb-4" />
                </div>
            </div>

            <div className="">
                <div>
                    <p className="text-sm  text-center font-semibold text-yellow-300 underline decoration-solid">
                        <a href="https://github.com/J2KB">j2kb</a>
                    </p>
                    <p className="text-sm text-slate-400 text-center m-6">2020 ~ 2021</p>
                    <p className="text-sm text-slate-400 text-center">founder</p>
                    <p className="text-sm text-slate-400 text-center mb-6">operate coding community</p>
                </div>
                <div className="justify-center">
                    <Image src={j2kb1} alt="j2kb1" width={300} height={300} className="mb-4" />
                    <Image src={j2kb2} alt="j2kb2" width={300} height={300} className="mb-4" />
                </div>
            </div>
        </div>
    );
}
