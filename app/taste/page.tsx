import { Taste } from "app/components/taste";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "taste",
    description: "this is taste.",
};

export default function taste_Page() {
    return (
        <div className="flex">
            <aside className="w-64">
                <Sidebar />
            </aside>
            <section className="flex-grow ">
                <Taste />
            </section>
        </div>
    );
}
