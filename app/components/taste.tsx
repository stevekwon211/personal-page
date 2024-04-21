import Link from "next/link";

export function Taste() {
    return (
        <div className="grid grid-cols-1 gap-4 ml-10 mb-10">
            <div>
                <h1>product</h1>
                <div className="grid grid-cols-3 gap-4 ml-10 mb-10"></div>
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
    );
}
