import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-24">
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-15 lg:px-16 lg:py-12 xl:col-span-6">
       <SignUp />
   </main>
   </div>
   </section>
    );
}