import { People } from "app/components/people";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "people",
    description: "this is people.",
};

export default function people_Page() {
    return (
        <div className="flex">
            <aside className="w-64">
                <Sidebar />
            </aside>
            <section className="flex">
                <People />
            </section>
        </div>
    );
}
