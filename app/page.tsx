import { Navbar } from "app/components/nav";
import { Sidebar } from "app/components/sidebar";

export default function Page() {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen">
                <Sidebar />
            </aside>
            <section className="flex-grow">
                <div>
                    <a>click something on left</a>
                </div>
            </section>
        </div>
    );
}
