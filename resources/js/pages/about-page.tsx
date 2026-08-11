import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Heart,
    Lightbulb,
    Target,
    Users,
} from 'lucide-react';
import PageHeader from '../components/page-header';

export default function About() {
    return (
        <>
            <Head title="আমাদের সম্পর্কে" />

            <main className="bg-background text-foreground">
                <PageHeader
                    page_title={'আমাদের সম্পর্কে'}
                    page_subtitle={`জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে শিক্ষার্থীদের একটি সুন্দর ও আত্মনির্ভর ভবিষ্যতের জন্য প্রস্তুত করাই আমাদের লক্ষ্য।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Content */}
                        <div>
                            <span className="text-sm font-semibold text-primary">
                                আমাদের প্রতিষ্ঠান
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                শিক্ষার মাধ্যমে আলোকিত ভবিষ্যৎ
                            </h2>

                            <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/75 sm:text-base">
                                <p>
                                    ঢাকা ক্রেডিট ইউনিয়ন স্কুল একটি শিক্ষাবান্ধব
                                    ও মূল্যবোধভিত্তিক শিক্ষা প্রতিষ্ঠান।
                                    শিক্ষার্থীদের একাডেমিক জ্ঞানের পাশাপাশি
                                    নৈতিকতা, শৃঙ্খলা, মানবিকতা ও সামাজিক
                                    দায়িত্ববোধে সমৃদ্ধ করে গড়ে তোলাই আমাদের
                                    অন্যতম উদ্দেশ্য।
                                </p>

                                <p>
                                    আমরা বিশ্বাস করি, একটি শিশুর পূর্ণাঙ্গ
                                    বিকাশের জন্য শুধু পাঠ্যবইয়ের জ্ঞান যথেষ্ট
                                    নয়। সৃজনশীলতা, খেলাধুলা, প্রযুক্তি, সংস্কৃতি
                                    এবং সহশিক্ষামূলক কার্যক্রমের সমন্বিত পরিবেশ
                                    একজন শিক্ষার্থীকে আত্মবিশ্বাসী ও দায়িত্বশীল
                                    নাগরিক হিসেবে গড়ে তুলতে সাহায্য করে।
                                </p>

                                <p>
                                    আধুনিক শিক্ষা পদ্ধতি ও প্রযুক্তির কার্যকর
                                    ব্যবহারের মাধ্যমে শিক্ষার্থীদের ভবিষ্যৎ
                                    চ্যালেঞ্জ মোকাবিলার উপযোগী করে তোলার জন্য
                                    আমরা নিরন্তর কাজ করে যাচ্ছি।
                                </p>
                            </div>

                            <div className="mt-7">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    যোগাযোগ করুন
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <BookOpen className="h-6 w-6" />
                                </div>

                                <h3 className="mt-4 font-bold">
                                    মানসম্মত শিক্ষা
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-foreground/70">
                                    আধুনিক ও কার্যকর শিক্ষা পদ্ধতির মাধ্যমে
                                    শিক্ষার্থীদের জ্ঞান ও দক্ষতা বৃদ্ধি।
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                                    <Heart className="h-6 w-6" />
                                </div>

                                <h3 className="mt-4 font-bold">
                                    নৈতিক মূল্যবোধ
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-foreground/70">
                                    সততা, মানবিকতা, শৃঙ্খলা ও দায়িত্ববোধের
                                    চর্চার মাধ্যমে চরিত্র গঠন।
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                                    <Lightbulb className="h-6 w-6" />
                                </div>

                                <h3 className="mt-4 font-bold">সৃজনশীলতা</h3>

                                <p className="mt-2 text-sm leading-6 text-foreground/70">
                                    শিক্ষার্থীদের চিন্তা, উদ্ভাবন ও সৃজনশীলতার
                                    বিকাশে সহায়ক পরিবেশ।
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                    <Users className="h-6 w-6" />
                                </div>

                                <h3 className="mt-4 font-bold">
                                    সামাজিক দায়িত্ব
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-foreground/70">
                                    সমাজ ও দেশের প্রতি দায়িত্বশীল নাগরিক হিসেবে
                                    শিক্ষার্থীদের প্রস্তুত করা।
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    MISSION / VISION
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold text-primary">
                                আমাদের লক্ষ্য ও উদ্দেশ্য
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                                ভবিষ্যৎ প্রজন্মের জন্য আমাদের প্রত্যয়
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের জ্ঞান, দক্ষতা, নৈতিকতা এবং মানবিক
                                মূল্যবোধের সমন্বয়ে একজন পূর্ণাঙ্গ মানুষ হিসেবে
                                গড়ে তোলাই আমাদের অঙ্গীকার।
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Vision */}
                            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Target className="h-7 w-7" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    আমাদের লক্ষ্য
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
                                    যুগোপযোগী শিক্ষা প্রদান করে শিক্ষার্থীদের
                                    জ্ঞান, দক্ষতা ও নৈতিক মূল্যবোধে সমৃদ্ধ করা
                                    এবং তাদের ভবিষ্যৎ জীবনের জন্য আত্মবিশ্বাসী ও
                                    যোগ্য করে গড়ে তোলা।
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                    <GraduationCap className="h-7 w-7" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    আমাদের উদ্দেশ্য
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
                                    শিক্ষার্থীদের মধ্যে দেশপ্রেম, সততা, শৃঙ্খলা,
                                    মানবিকতা ও সামাজিক দায়িত্ববোধ সৃষ্টি করা এবং
                                    একটি আত্মনির্ভরশীল দেশ গঠনে তাদের প্রস্তুত
                                    করা।
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CORE VALUES
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের মূল্যবোধ
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            যে মূল্যবোধগুলো আমাদের পথ দেখায়
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Heart className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-bold">মানবিকতা</h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/70">
                                মানুষের প্রতি সম্মান, সহমর্মিতা ও সহযোগিতা।
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                                <Target className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-bold">শৃঙ্খলা</h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/70">
                                নিয়ম-শৃঙ্খলা ও দায়িত্বশীলতার চর্চা।
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
                                <Lightbulb className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-bold">সৃজনশীলতা</h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/70">
                                নতুন চিন্তা, উদ্ভাবন ও সৃষ্টিশীলতার বিকাশ।
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                <Users className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-bold">সহযোগিতা</h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/70">
                                পারস্পরিক সহযোগিতা ও দলগতভাবে এগিয়ে চলা।
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    MOTTO
                ====================================================== */}
                <section className="bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 py-14 text-center sm:py-16 md:py-20">
                        <span className="text-sm font-semibold text-primary-foreground/75">
                            আমাদের প্রত্যয়
                        </span>

                        <h2 className="mx-auto mt-3 max-w-4xl text-2xl leading-relaxed font-bold sm:text-3xl md:text-4xl">
                            “যুগোপযোগী শিক্ষা আমাদের লক্ষ্য;
                            <span className="block text-secondary">
                                আত্মনির্ভরশীল দেশ আমাদের স্বপ্ন।”
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
                            প্রতিটি শিক্ষার্থীর সম্ভাবনাকে বিকশিত করে একটি
                            জ্ঞানভিত্তিক, নৈতিক ও মানবিক সমাজ গঠনে আমরা
                            প্রতিশ্রুতিবদ্ধ।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            আমাদের সম্পর্কে আরও জানতে চান?
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/70">
                            বিদ্যালয়ের কার্যক্রম, ভর্তি তথ্য এবং অন্যান্য
                            প্রয়োজনীয় বিষয়ে আমাদের সাথে যোগাযোগ করুন।
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                যোগাযোগ করুন
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/admission-info"
                                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:bg-primary/10 hover:text-primary"
                            >
                                ভর্তি তথ্য
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
