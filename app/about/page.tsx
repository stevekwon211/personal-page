import { About } from "app/components/about";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "about",
    description: "this is about.",
};

export default function about_Page() {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen">
                <Sidebar />
            </aside>
            <section className="flex-grow">
                <About />
            </section>
        </div>
    );
}
