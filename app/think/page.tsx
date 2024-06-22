import { BlogPosts } from "app/components/posts";
import { Sidebar } from "app/components/sidebar";

export const metadata = {
    title: "think",
    description: "this is think.",
};

export default function Page() {
    return (
        <div className="flex">
            <aside className="w-64">
                <Sidebar />
            </aside>
            <section className="flex-grow">
                <BlogPosts />
            </section>
        </div>
    );
}
