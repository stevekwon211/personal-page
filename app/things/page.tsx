import { Things } from "app/components/things";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "things",
    description: "this is things.",
};

export default function things_Page() {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen ">
                <Sidebar />
            </aside>
            <section className="flex-grow ">
                <Things />
            </section>
        </div>
    );
}
