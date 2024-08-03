// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "components/ImageGallery";

export default function Home() {
    const buildingImages = ["/image 1.png", "/image 2.png", "/image 3.png", "/image 4.png"];
    const funImages = ["/fun 1.gif"];

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-zinc-900">
            <Head>
                <title>Doeon Kwon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="MiddleWidget w-full max-w-[1000px] sm:w-hug min-h-[500px] h-fit p-3 sm:p-5 bg-stone-200 rounded-2xl shadow flex flex-col sm:flex-row m-4">
                <div className="LeftBar w-full sm:w-full md:w-auto md:max-w-[180px] self-stretch p-3 rounded-lg shadow flex-col justify-between items-center inline-flex relative overflow-hidden mb-4 sm:mb-0">
                    <Image src="/bag1.png" alt="Background" layout="fill" objectFit="cover" quality={100} priority />
                    <div className="relative z-10 flex flex-col justify-between gap-2 items-center h-full w-full">
                        <div className="text-white text-[17px] font-normal font-['Pretendard'] text-center sm:text-left">
                            좋은 제품에 대한 글을 쓰고 영감을 퍼뜨리기.
                        </div>
                        <div className="Frame1 self-stretch h-11 flex-col justify-end items-center gap-2 flex">
                            <div className="DoeonKwon self-stretch text-white text-[15px] font-normal font-['Pretendard'] text-center sm:text-left">
                                Doeon Kwon
                            </div>
                            <div className="DisquietIgSubstack self-stretch text-white text-[13px] font-normal font-['Pretendard'] text-center sm:text-left">
                                <a
                                    href="https://disquiet.io/@kwondoeon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    disquiet
                                </a>
                                {" / "}
                                <a
                                    href="https://www.instagram.com/kwondoeon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    ig
                                </a>
                                {" / "}
                                <a
                                    href="https://kwondoeon.substack.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    substack →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MiddleBar w-full sm:w-3/4 md:w-2/3 lg:w-1/2 grow shrink basis-0 self-stretch px-0 sm:px-3 rounded-lg flex-col justify-start items-start gap-3 inline-flex">
                    <div className="RecentPosts self-stretch shrink basis-0 p-3 bg-stone-100 rounded-lg shadow flex-col justify-start items-start gap-2 flex">
                        <div className="Frame2 self-stretch pb-2 justify-center items-center gap-3 inline-flex">
                            <div className="RecentPosts w-full text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                Writing
                            </div>
                        </div>
                        <div className="Frame2 self-stretch justify-between items-center inline-flex">
                            <div className="HelloWorld text-black text-[15px] font-medium font-['Pretendard']">
                                <a
                                    href="https://dis.qa/Fs849hY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    좋은 방향으로, 매일 조금씩 성장하기
                                </a>
                            </div>
                            <div className="0803 text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                2024.07.14
                            </div>
                        </div>
                        <div className="Frame3 self-stretch justify-between items-center inline-flex">
                            <div className="HelloWorld text-black text-[15px] font-medium font-['Pretendard']">
                                <a
                                    href="https://dis.qa/T8w7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    작게 생각하기
                                </a>
                            </div>
                            <div className="0803 text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                2024.07.08
                            </div>
                        </div>
                        <div className="Frame4 self-stretch justify-between items-center inline-flex">
                            <div className="HelloWorld text-black text-[15px] font-medium font-['Pretendard']">
                                <a
                                    href="https://dis.qa/e9cg7Vm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-change-hover"
                                >
                                    앞으로 제품 디자인은 어떻게 바뀔까?
                                </a>
                            </div>
                            <div className="0803 text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                2024.07.04
                            </div>
                        </div>
                    </div>
                    <div className="BuildingThis self-stretch h-fit p-3 bg-stone-100 rounded-lg shadow flex-col justify-start items-start gap-3 flex">
                        <div className="Frame2 self-stretch pb-2 justify-center items-center gap-3 inline-flex">
                            <div className="BuildingThis w-full text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                Building
                            </div>
                        </div>
                        <div className="Product self-stretch pb-2 justify-start items-start gap-4 sm:gap-8 flex flex-col sm:flex-row">
                            <div className="Frame2 self-stretch justify-center items-start gap-3 flex">
                                <div className="01Present text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                    2022.01 ~ Present
                                </div>
                            </div>
                            <div className="Frame2 grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                <div className="Title self-stretch justify-start items-start gap-1 inline-flex">
                                    <div className="Disquiet text-black text-[15px] font-medium font-['Pretendard']">
                                        <a
                                            href="https://disquiet.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="color-change-hover"
                                        >
                                            DISQUIET →
                                        </a>
                                    </div>
                                </div>
                                <div className="Description self-stretch h-20 flex-col h-fit justify-center items-start gap-2 flex">
                                    <div className=" text-stone-500 text-[14px] mb-1 font-normal font-['Pretendard'] leading-5">
                                        프로덕트를 만들고 교류하는 소셜 네트워크입니다.
                                    </div>
                                    <div className=" text-stone-500 mb-1 text-[14px] font-normal font-['Pretendard'] leading-5">
                                        첫 번째 팀원으로 합류해 메이커들을 위한 컨텐츠를 만들고
                                        <br />
                                        이벤트와 프로그램을 운영하고 있습니다.
                                    </div>
                                    <div className=" text-stone-500 mb-1 text-[14px] font-normal font-['Pretendard'] leading-5">
                                        좋은 제품이 많아지려면 인재, 지식, 자본이
                                        <br />한 곳에 모여야 한다는 큰 가설을 갖고 만들어가는 중입니다.
                                    </div>
                                </div>
                                <div className="Image self-stretch flex flex-wrap sm:flex-nowrap justify-start items-center gap-2">
                                    <ImageGallery images={buildingImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="JustForFun self-stretch h-fit p-3 bg-stone-100 rounded-lg shadow flex-col justify-start items-start gap-2 flex">
                        <div className="Frame2 self-stretch pb-2 justify-center items-center gap-3 inline-flex">
                            <div className="JustForFun w-full text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                                Just for fun
                            </div>
                        </div>
                        <div className="Description self-stretch flex flex-wrap sm:flex-nowrap justify-start items-center gap-2">
                            <ImageGallery images={funImages} />
                        </div>
                    </div>
                </div>
                <div className="RightBar w-full sm:w-auto self-stretch p-3 bg-stone-100 rounded-lg shadow flex-col justify-start items-center gap-3 inline-flex mt-4 sm:mt-0">
                    <div className="Frame12 p-2 bg-stone-200 rounded justify-start items-center gap-2 inline-flex">
                        <div className="RecentListen text-neutral-400 text-[13px] font-normal font-['Pretendard']">
                            Listening
                        </div>
                        <div className="Frame1 pl-1 pr-2 justify-start items-center gap-2 flex">
                            <div className="Group1 w-1.5 h-2 relative">
                                <div className="Rectangle1 w-0.5 h-2 left-0 top-0 absolute bg-neutral-400" />
                                <div className="Rectangle2 w-0.5 h-2 left-[3.96px] top-0 absolute bg-neutral-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
