import { Head, Link } from '@inertiajs/react';

interface Student {
    name: string;
    className: string;
    section: string;
    roll: string;
    icon: string;
}

const students: Student[] = [
    {
        name: 'শিক্ষার্থী',
        className: 'ষষ্ঠ শ্রেণি',
        section: 'ক',
        roll: '০১',
        icon: 'fas fa-user-graduate',
    },
    {
        name: 'শিক্ষার্থী',
        className: 'সপ্তম শ্রেণি',
        section: 'ক',
        roll: '০২',
        icon: 'fas fa-user-graduate',
    },
    {
        name: 'শিক্ষার্থী',
        className: 'অষ্টম শ্রেণি',
        section: 'খ',
        roll: '০৩',
        icon: 'fas fa-user-graduate',
    },
    {
        name: 'শিক্ষার্থী',
        className: 'নবম শ্রেণি',
        section: 'ক',
        roll: '০৪',
        icon: 'fas fa-user-graduate',
    },
    {
        name: 'শিক্ষার্থী',
        className: 'দশম শ্রেণি',
        section: 'খ',
        roll: '০৫',
        icon: 'fas fa-user-graduate',
    },
    {
        name: 'শিক্ষার্থী',
        className: 'দশম শ্রেণি',
        section: 'ক',
        roll: '০৬',
        icon: 'fas fa-user-graduate',
    },
];

const classGroups = [
    {
        title: 'প্রাথমিক বিভাগ',
        classes: 'প্রথম — পঞ্চম',
        icon: 'fas fa-child',
        color: 'primary',
        description:
            'শিক্ষার্থীদের প্রাথমিক শিক্ষার ভিত্তি শক্তিশালী করার পাশাপাশি তাদের সৃজনশীলতা, শৃঙ্খলা ও সামাজিক মূল্যবোধ বিকাশে গুরুত্ব দেওয়া হয়।',
    },
    {
        title: 'মাধ্যমিক বিভাগ',
        classes: 'ষষ্ঠ — দশম',
        icon: 'fas fa-user-graduate',
        color: 'secondary',
        description:
            'মাধ্যমিক পর্যায়ে শিক্ষার্থীদের একাডেমিক দক্ষতা, প্রযুক্তিগত জ্ঞান, নেতৃত্বগুণ ও ভবিষ্যৎ শিক্ষাজীবনের জন্য প্রস্তুত করা হয়।',
    },
];

const activities = [
    {
        title: 'একাডেমিক শিক্ষা',
        icon: 'fas fa-book-open',
        description:
            'পাঠ্যক্রমভিত্তিক মানসম্মত শিক্ষার মাধ্যমে শিক্ষার্থীদের জ্ঞান ও দক্ষতা বৃদ্ধি করা।',
    },
    {
        title: 'সহশিক্ষা কার্যক্রম',
        icon: 'fas fa-palette',
        description:
            'সংস্কৃতি, সাহিত্য, বিতর্ক, ক্রীড়া ও বিভিন্ন সৃজনশীল কার্যক্রমে অংশগ্রহণের সুযোগ।',
    },
    {
        title: 'প্রযুক্তি শিক্ষা',
        icon: 'fas fa-laptop',
        description:
            'আধুনিক প্রযুক্তি ও ডিজিটাল শিক্ষার মাধ্যমে ভবিষ্যৎ উপযোগী দক্ষতা তৈরি করা।',
    },
    {
        title: 'নৈতিক মূল্যবোধ',
        icon: 'fas fa-heart',
        description:
            'সততা, দায়িত্ববোধ, সহমর্মিতা ও মানবিক মূল্যবোধসম্পন্ন শিক্ষার্থী গড়ে তোলা।',
    },
];

export default function Students() {
    return (
        <>
            <Head title="শিক্ষার্থীবৃন্দ" />

            <main className="min-h-screen bg-background text-foreground">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative container mx-auto px-4 py-16 text-center sm:py-20 md:py-24">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                            <i className="fas fa-user-graduate" />
                            আমাদের শিক্ষার্থীবৃন্দ
                        </span>

                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            শিক্ষার্থীবৃন্দ
                        </h1>

                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                            জ্ঞান, দক্ষতা, সৃজনশীলতা ও মানবিক মূল্যবোধের সমন্বয়ে
                            আমাদের শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের শিক্ষার্থীরা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            ভবিষ্যতের নেতৃত্বের জন্য প্রস্তুতি
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-foreground/70 sm:text-base">
                            একটি বিদ্যালয়ের সবচেয়ে গুরুত্বপূর্ণ অংশ হলো তার
                            শিক্ষার্থীরা। ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                            শিক্ষার্থীদের শুধু একাডেমিক জ্ঞান অর্জনে নয়, বরং
                            তাদের চিন্তাশক্তি, সৃজনশীলতা, নেতৃত্বগুণ, নৈতিকতা
                            এবং সামাজিক দায়িত্ববোধ বিকাশে গুরুত্ব দিয়ে থাকে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    STATISTICS
                ====================================================== */}
                <section className="border-y border-border bg-muted/20">
                    <div className="container mx-auto px-4 py-12 sm:py-14">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                            {[
                                {
                                    number: '৫০০+',
                                    label: 'মোট শিক্ষার্থী',
                                    icon: 'fas fa-users',
                                },
                                {
                                    number: '১০',
                                    label: 'শ্রেণি',
                                    icon: 'fas fa-school',
                                },
                                {
                                    number: '২০+',
                                    label: 'সহশিক্ষা কার্যক্রম',
                                    icon: 'fas fa-star',
                                },
                                {
                                    number: '১০০%',
                                    label: 'ভবিষ্যতমুখী শিক্ষা',
                                    icon: 'fas fa-graduation-cap',
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="group rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                                >
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                                        <i className={item.icon} />
                                    </div>

                                    <div className="mt-4 text-2xl font-bold sm:text-3xl">
                                        {item.number}
                                    </div>

                                    <p className="mt-1 text-xs text-foreground/60 sm:text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLASS GROUPS
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                            <i className="fas fa-layer-group" />
                            শিক্ষার স্তর
                        </span>

                        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                            শ্রেণিভিত্তিক শিক্ষা কার্যক্রম
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                            শিক্ষার্থীদের বয়স ও শিক্ষার স্তর অনুযায়ী উপযুক্ত
                            শিক্ষা ও সহায়ক কার্যক্রম পরিচালনা করা হয়।
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {classGroups.map((group) => (
                            <div
                                key={group.title}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                            >
                                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 transition group-hover:scale-150" />

                                <div className="relative flex items-start gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                                            group.color === 'primary'
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-secondary/10 text-secondary'
                                        }`}
                                    >
                                        <i
                                            className={`${group.icon} text-xl`}
                                        />
                                    </div>

                                    <div>
                                        <span className="text-xs font-semibold text-foreground/50">
                                            শ্রেণিসমূহ
                                        </span>

                                        <h3 className="mt-1 text-xl font-bold">
                                            {group.title}
                                        </h3>

                                        <span
                                            className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                                group.color === 'primary'
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'bg-secondary/10 text-secondary'
                                            }`}
                                        >
                                            {group.classes}
                                        </span>
                                    </div>
                                </div>

                                <p className="relative mt-5 text-sm leading-7 text-foreground/70">
                                    {group.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    STUDENT CARDS
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                                <i className="fas fa-users" />
                                আমাদের শিক্ষার্থীরা
                            </span>

                            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                                শিক্ষার্থীদের পরিচিতি
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                                বিদ্যালয়ের বিভিন্ন শ্রেণিতে অধ্যয়নরত
                                শিক্ষার্থীদের একটি সংক্ষিপ্ত পরিচিতি।
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {students.map((student) => (
                                <div
                                    key={`${student.className}-${student.roll}`}
                                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Profile Header */}
                                    <div className="relative flex h-28 items-center justify-center bg-primary/10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

                                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition duration-300 group-hover:scale-110">
                                            <i
                                                className={`${student.icon} text-xl`}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-bold">
                                                    {student.name}
                                                </h3>

                                                <p className="mt-1 text-sm text-foreground/60">
                                                    {student.className}
                                                </p>
                                            </div>

                                            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                                                #{student.roll}
                                            </span>
                                        </div>

                                        <div className="mt-5 grid grid-cols-2 gap-3">
                                            <div className="rounded-xl bg-muted/50 p-3">
                                                <p className="text-[11px] text-foreground/50">
                                                    শ্রেণি
                                                </p>
                                                <p className="mt-1 text-sm font-semibold">
                                                    {student.className}
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-muted/50 p-3">
                                                <p className="text-[11px] text-foreground/50">
                                                    শাখা
                                                </p>
                                                <p className="mt-1 text-sm font-semibold">
                                                    {student.section}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    STUDENT DEVELOPMENT
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            শিক্ষার্থী উন্নয়ন
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            শিক্ষার্থীদের সামগ্রিক বিকাশ
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {activities.map((activity) => (
                            <div
                                key={activity.title}
                                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                                    <i className={`${activity.icon} text-lg`} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    {activity.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/65">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary p-7 text-center text-primary-foreground shadow-xl sm:p-10 md:p-12">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/15">
                                <i className="fas fa-graduation-cap text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                আপনার সন্তানের উজ্জ্বল ভবিষ্যতের পথে
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                                মানসম্মত শিক্ষা, আধুনিক সুযোগ-সুবিধা এবং মানবিক
                                মূল্যবোধের সমন্বয়ে শিক্ষার্থীদের ভবিষ্যতের জন্য
                                প্রস্তুত করতে আমরা প্রতিশ্রুতিবদ্ধ।
                            </p>

                            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/admission-info"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
                                >
                                    <i className="fas fa-user-plus" />
                                    ভর্তি তথ্য
                                </Link>

                                <Link
                                    href="/gallery"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/20"
                                >
                                    <i className="fas fa-images" />
                                    স্টুডেন্টস্ গ্যালারি
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
