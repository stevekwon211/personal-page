import { Work } from "app/components/work";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "work",
    description: "this is work.",
};

export default function work_Page() {
    return (
        <div className="flex">
            <aside className="w-32">
                <Sidebar />
            </aside>
            <section className="flex-grow">
                <Work />
            </section>
        </div>
    );
}
