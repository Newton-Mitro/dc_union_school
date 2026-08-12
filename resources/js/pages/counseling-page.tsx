import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

const counselingServices = [
    {
        icon: 'fas fa-heart',
        title: 'মানসিক সহায়তা',
        description:
            'শিক্ষার্থীদের ব্যক্তিগত অনুভূতি, উদ্বেগ ও বিভিন্ন চ্যালেঞ্জ মোকাবিলায় প্রয়োজনীয় সহায়তা ও দিকনির্দেশনা প্রদান করা হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-user-graduate',
        title: 'শিক্ষার্থীবান্ধব পরামর্শ',
        description:
            'শিক্ষার্থীদের বয়স, প্রয়োজন ও পরিস্থিতি বিবেচনা করে তাদের জন্য উপযুক্ত পরামর্শ ও সহযোগিতা প্রদান করা হয়।',
        color: 'secondary',
    },
    {
        icon: 'fas fa-book-reader',
        title: 'শিক্ষাগত পরামর্শ',
        description:
            'পড়াশোনায় মনোযোগ, সময় ব্যবস্থাপনা, পরীক্ষার প্রস্তুতি এবং শিক্ষাজীবনের বিভিন্ন বিষয়ে প্রয়োজনীয় পরামর্শ দেওয়া হয়।',
        color: 'primary',
    },
    {
        icon: 'fas fa-compass',
        title: 'ভবিষ্যৎ পরিকল্পনা',
        description:
            'শিক্ষার্থীদের আগ্রহ, দক্ষতা ও সম্ভাবনা অনুযায়ী ভবিষ্যৎ শিক্ষা ও ক্যারিয়ার পরিকল্পনা সম্পর্কে দিকনির্দেশনা দেওয়া হয়।',
        color: 'secondary',
    },
];

const counselingAreas = [
    {
        icon: 'fas fa-smile',
        title: 'আত্মবিশ্বাস বৃদ্ধি',
        description:
            'শিক্ষার্থীদের আত্মবিশ্বাস ও ইতিবাচক মানসিকতা গড়ে তুলতে সহযোগিতা করা।',
    },
    {
        icon: 'fas fa-tasks',
        title: 'সময় ব্যবস্থাপনা',
        description:
            'পড়াশোনা, বিশ্রাম ও অন্যান্য কার্যক্রমের মধ্যে কার্যকর সময় ব্যবস্থাপনা শেখানো।',
    },
    {
        icon: 'fas fa-users',
        title: 'সামাজিক সম্পর্ক',
        description:
            'সহপাঠী, শিক্ষক ও পরিবারের সঙ্গে ইতিবাচক সম্পর্ক গড়ে তুলতে সহায়তা করা।',
    },
    {
        icon: 'fas fa-brain',
        title: 'চাপ মোকাবিলা',
        description:
            'পড়াশোনা ও দৈনন্দিন জীবনের বিভিন্ন চাপ ইতিবাচকভাবে মোকাবিলা করার বিষয়ে দিকনির্দেশনা।',
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'শিক্ষাগত উন্নয়ন',
        description:
            'শিক্ষার্থীদের পড়াশোনার সমস্যা চিহ্নিত করে উন্নতির জন্য প্রয়োজনীয় পরামর্শ প্রদান।',
    },
    {
        icon: 'fas fa-route',
        title: 'ক্যারিয়ার নির্দেশনা',
        description:
            'শিক্ষার্থীদের আগ্রহ ও সক্ষমতা অনুযায়ী ভবিষ্যৎ শিক্ষা ও ক্যারিয়ার নিয়ে আলোচনা।',
    },
];

const counselingSteps = [
    {
        number: '01',
        title: 'সমস্যা চিহ্নিতকরণ',
        description:
            'শিক্ষার্থীর প্রয়োজন, সমস্যা বা উদ্বেগ সম্পর্কে মনোযোগ দিয়ে জানা।',
    },
    {
        number: '02',
        title: 'আলোচনা ও পরামর্শ',
        description:
            'শিক্ষার্থীর পরিস্থিতি বুঝে বন্ধুত্বপূর্ণ পরিবেশে প্রয়োজনীয় পরামর্শ প্রদান।',
    },
    {
        number: '03',
        title: 'পরিকল্পনা তৈরি',
        description:
            'প্রয়োজন অনুযায়ী বাস্তবসম্মত সমাধান ও উন্নয়নের জন্য একটি পরিকল্পনা তৈরি করা।',
    },
    {
        number: '04',
        title: 'ফলোআপ',
        description:
            'শিক্ষার্থীর অগ্রগতি পর্যবেক্ষণ এবং প্রয়োজনে পরবর্তী সহায়তা প্রদান।',
    },
];

export default function Counseling() {
    return (
        <>
            <Head title="কাউন্সেলিং" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'সুবিধাসমূহ',
                        },
                        {
                            label: 'কাউন্সেলিং',
                        },
                    ]}
                    categoryIcon="fas fa-comments"
                    category="বিদ্যালয়ের সুবিধাসমূহ"
                    title="কাউন্সেলিং"
                    subtitle={`শিক্ষার্থীদের মানসিক, শিক্ষাগত ও ব্যক্তিগত বিকাশে প্রয়োজনীয় পরামর্শ ও দিকনির্দেশনা।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            শিক্ষার্থীদের পাশে
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            একজন শিক্ষার্থীর সুন্দর বিকাশে প্রয়োজন সঠিক
                            দিকনির্দেশনা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            বিদ্যালয় জীবনে শিক্ষার্থীরা পড়াশোনা, বন্ধুত্ব,
                            আত্মবিশ্বাস, ভবিষ্যৎ পরিকল্পনা ও বিভিন্ন ব্যক্তিগত
                            বিষয়ে নানা ধরনের চ্যালেঞ্জের মুখোমুখি হতে পারে।
                            কাউন্সেলিংয়ের মাধ্যমে শিক্ষার্থীদের কথা মনোযোগ দিয়ে
                            শোনা, তাদের সমস্যা বুঝতে সাহায্য করা এবং ইতিবাচক
                            সিদ্ধান্ত নিতে প্রয়োজনীয় দিকনির্দেশনা দেওয়া হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    HIGHLIGHT
                ====================================================== */}
                <section className="container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
                        <div className="grid items-center md:grid-cols-[190px_1fr]">
                            <div className="flex justify-center p-8 md:p-10">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary-foreground/15 ring-8 ring-primary-foreground/10">
                                    <i className="fas fa-hand-holding-heart text-5xl" />
                                </div>
                            </div>

                            <div className="px-6 pb-8 text-center md:px-8 md:py-10 md:text-left">
                                <span className="text-sm font-semibold text-primary-foreground/80">
                                    শিক্ষার্থীদের কল্যাণ
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    শুনি, বুঝি এবং পাশে থাকি
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
                                    প্রতিটি শিক্ষার্থী আলাদা। তাদের প্রয়োজন,
                                    আগ্রহ ও সক্ষমতা বিবেচনা করে সহানুভূতিশীল
                                    পরিবেশে প্রয়োজনীয় পরামর্শ ও সহযোগিতা প্রদানই
                                    কাউন্সেলিং কার্যক্রমের অন্যতম উদ্দেশ্য।
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SERVICES
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <i className="fas fa-hands-helping" />
                                কাউন্সেলিং সেবা
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                শিক্ষার্থীদের জন্য আমাদের সহায়তা
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের সার্বিক বিকাশে বিভিন্ন ধরনের
                                পরামর্শ ও সহযোগিতামূলক কার্যক্রম পরিচালনা করা
                                হয়।
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {counselingServices.map((service) => (
                                <div
                                    key={service.title}
                                    className="group rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div
                                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                                            service.color === 'primary'
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-secondary/10 text-secondary'
                                        } transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <i
                                            className={`${service.icon} text-xl`}
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    COUNSELING AREAS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                        <span className="text-sm font-semibold text-primary">
                            সহায়তার ক্ষেত্র
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            যেসব বিষয়ে শিক্ষার্থীদের সহায়তা করা হয়
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {counselingAreas.map((area, index) => (
                            <div
                                key={area.title}
                                className="group flex items-start gap-4 rounded-2xl border border-dashed border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                    <i className={`${area.icon} text-lg`} />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <h3 className="font-bold">
                                            {area.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    PROCESS
                ====================================================== */}
                <section className="border-y border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                                <i className="fas fa-route" />
                                কাউন্সেলিং প্রক্রিয়া
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                কীভাবে কাউন্সেলিং কার্যক্রম পরিচালিত হয়
                            </h2>
                        </div>

                        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-4">
                            {counselingSteps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
                                >
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-md">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                                        {step.description}
                                    </p>

                                    {index < counselingSteps.length - 1 && (
                                        <div className="absolute top-7 -right-3 z-10 hidden text-primary md:block">
                                            <i className="fas fa-chevron-right" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    STUDENT WELLBEING
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                            <div>
                                <span className="text-sm font-semibold text-primary">
                                    শিক্ষার্থীদের কল্যাণ
                                </span>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    সুস্থ মন, সুন্দর ভবিষ্যৎ
                                </h2>

                                <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />

                                <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                                    একটি সুস্থ ও ইতিবাচক মানসিক পরিবেশ
                                    শিক্ষার্থীদের শেখা ও ব্যক্তিত্ব বিকাশে
                                    গুরুত্বপূর্ণ ভূমিকা রাখে। তাই শিক্ষার্থীদের
                                    কথা শোনা, তাদের অনুভূতিকে সম্মান করা এবং
                                    প্রয়োজন অনুযায়ী সহযোগিতা করা আমাদের
                                    শিক্ষাব্যবস্থার একটি গুরুত্বপূর্ণ অংশ।
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {[
                                        'শিক্ষার্থীদের কথা মনোযোগ দিয়ে শোনা',
                                        'ইতিবাচক মানসিকতা গড়ে তুলতে সহায়তা',
                                        'শিক্ষাজীবনের সমস্যা মোকাবিলায় পরামর্শ',
                                        'আত্মবিশ্বাস ও আত্মনির্ভরতা বৃদ্ধি',
                                        'ভবিষ্যৎ পরিকল্পনায় দিকনির্দেশনা',
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-sm"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-check text-xs" />
                                            </span>

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                            <i className="fas fa-heart text-2xl text-primary" />

                                            <h3 className="mt-3 font-bold">
                                                যত্ন
                                            </h3>

                                            <p className="mt-1 text-xs text-foreground/60">
                                                সহানুভূতিশীল পরিবেশ
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-comments text-2xl text-secondary" />

                                            <h3 className="mt-3 font-bold">
                                                আলোচনা
                                            </h3>

                                            <p className="mt-1 text-xs text-foreground/60">
                                                মুক্তভাবে কথা বলা
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-secondary/10 p-5 text-center">
                                            <i className="fas fa-lightbulb text-2xl text-secondary" />

                                            <h3 className="mt-3 font-bold">
                                                দিকনির্দেশনা
                                            </h3>

                                            <p className="mt-1 text-xs text-foreground/60">
                                                সঠিক সিদ্ধান্তে সহায়তা
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-primary/10 p-5 text-center">
                                            <i className="fas fa-user-check text-2xl text-primary" />

                                            <h3 className="mt-3 font-bold">
                                                আত্মবিশ্বাস
                                            </h3>

                                            <p className="mt-1 text-xs text-foreground/60">
                                                ব্যক্তিত্বের বিকাশ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-hand-holding-heart text-2xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                শিক্ষার্থীদের পাশে আমরা সবসময়
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                শিক্ষার্থীদের সুন্দর ভবিষ্যৎ ও সার্বিক বিকাশের
                                জন্য প্রয়োজনীয় সহযোগিতা ও দিকনির্দেশনা প্রদান
                                করাই আমাদের অঙ্গীকার।
                            </p>

                            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    <i className="fas fa-phone-alt" />
                                    যোগাযোগ করুন
                                </Link>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <i className="fas fa-info-circle" />
                                    আমাদের সম্পর্কে
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
