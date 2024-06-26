function ArrowIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="">
            <ul className="font-sm flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 ">
                <li>
                    <a
                        className="
                        flex items-center transition-all
                        duration-500
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://disquiet.io/@kwondoeon"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">disquiet</p>
                    </a>
                </li>
                <li>
                    <a
                        className="
                        flex items-center transition-all
                        duration-500
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/kwondoeon/"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">ig</p>
                    </a>
                </li>
                <li>
                    <a
                        className="
                        flex items-center transition-all
                        duration-500
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        "
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/kwondoeon_dq"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">x</p>
                    </a>
                </li>
            </ul>
            <p className="mt-8 ">stevekwon@disquiet.io</p>
        </footer>
    );
}
