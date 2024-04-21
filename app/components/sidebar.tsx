import { ThemeToggle } from "app/components/theme";

export function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    <ThemeToggle />
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/taste"
                    >
                        taste
                    </a>
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/things"
                    >
                        things
                    </a>
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/think"
                    >
                        think
                    </a>
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/work"
                    >
                        work
                    </a>
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/people"
                    >
                        people
                    </a>
                </li>
                <li className="pt-2">
                    <a
                        className="
                        transition-all
                        duration-700
                        hover:opacity-100
                        hover:text-indigo-600
                        hover:decoration-indigo-600
                        hover:line-through decoration-solid
                        "
                        href="/about"
                    >
                        about
                    </a>
                </li>
            </ul>
        </div>
    );
}
