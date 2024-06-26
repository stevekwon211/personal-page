import Image from "next/image";

import matter from "app/public/taste/matter.png";
import matterlogo from "app/public/taste/matter logo.png";
import rize from "app/public/taste/rize.png";
import rizelogo from "app/public/taste/rize logo.png";
import reflect from "app/public/taste/reflect.png";
import reflectlogo from "app/public/taste/reflect logo.png";
import cursor from "app/public/taste/cursor.png";
import cursorlogo from "app/public/taste/cursor logo.png";
import muji from "app/public/taste/muji.png";
import mujilogo from "app/public/taste/muji logo.png";
import carhartt from "app/public/taste/carhartt.jpeg";
import carharttlogo from "app/public/taste/carhartt logo.png";

export function Taste() {
    return (
        <div className="grid grid-cols-1 gap-4 ml-10 mb-10 ">
            <div>
                <h1>product</h1>
                <div className="grid grid-cols-[120px_900px] mt-4">
                    <div className="">
                        <p className="text-sm text-slate-400 content-center">software</p>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="grid grid-rows-[300px_100px] gap-4 ">
                                <Image className="" src={matter} alt="matter" width={300} height={300} />
                                <div className="flex space-x-4">
                                    <div className="">
                                        <Image src={matterlogo} alt="matterlogo" width={40} height={40} />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold text-black-600 underline decoration-solid content-center">
                                            <a href="https://hq.getmatter.com/">matter</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-rows-[300px_100px] gap-4 ">
                                <Image className="" src={reflect} alt="matter" width={300} height={300} />
                                <div className="flex space-x-4">
                                    <div className="">
                                        <Image src={reflectlogo} alt="matterlogo" width={40} height={40} />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold text-black-600 underline decoration-solid content-center">
                                            <a href="https://reflect.app/home#product">reflect</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-rows-[300px_100px] gap-4 ">
                                <Image className="" src={cursor} alt="matter" width={300} height={300} />
                                <div className="flex space-x-4">
                                    <div className="">
                                        <Image src={cursorlogo} alt="matterlogo" width={40} height={40} />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold text-black-600 underline decoration-solid content-center">
                                            <a href="https://cursor.sh/">cursor</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[120px_900px] mt-4">
                        <div className="">
                            <p className="text-sm text-slate-400 content-center">not software</p>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="grid grid-rows-[300px_100px] gap-4 ">
                                    <Image className="" src={carhartt} alt="matter" width={180} height={300} />
                                    <div className="flex space-x-4">
                                        <div className="">
                                            <Image src={carharttlogo} alt="matterlogo" width={40} height={40} />
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-semibold text-black-600 underline decoration-solid content-center">
                                                <a href="https://www.carhartt.com/about">carhartt</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-rows-[300px_100px] gap-4 ">
                                    <Image className="" src={muji} alt="matter" width={300} height={300} />
                                    <div className="flex space-x-4">
                                        <div className="">
                                            <Image src={mujilogo} alt="matterlogo" width={40} height={40} />
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-semibold text-black-600 underline decoration-solid content-center">
                                                <a href="https://www.muji.com/kr/about/">muji</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>article</h1>
                    <div className="grid grid-cols-3 gap-4 ml-10 mb-10"></div>
                </div>
                <div>
                    <h1>movie</h1>
                    <div className="grid grid-cols-3 gap-4 ml-10 mb-10"></div>
                </div>
                <div>
                    <h1>music</h1>
                    <div className="grid grid-cols-3 gap-4 ml-10 mb-10"></div>
                </div>
            </div>
        </div>
    );
}
