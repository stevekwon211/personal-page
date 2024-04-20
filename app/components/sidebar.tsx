import Link from "next/link";

export function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    <a href="/taste">taste</a>
                </li>
                <li className="pt-2">
                    <a href="/think">think</a>
                </li>
                <li className="pt-2">
                    <a href="/work">work</a>
                </li>
                <li className="pt-2">
                    <a href="/people">people</a>
                </li>
                <li className="pt-2">
                    <a href="/about">about</a>
                </li>
            </ul>
        </div>
    );
}
