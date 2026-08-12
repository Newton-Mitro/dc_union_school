import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface ExamSchedule {
    id: number;
    exam: string;
    className: string;
    date: string;
    day: string;
    subject: string;
    time: string;
    duration: string;
}

const schedules: ExamSchedule[] = [
    {
        id: 1,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৬ষ্ঠ শ্রেণি',
        date: '০৫ জুন ২০২৬',
        day: 'শুক্রবার',
        subject: 'বাংলা',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 2,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৬ষ্ঠ শ্রেণি',
        date: '০৭ জুন ২০২৬',
        day: 'রবিবার',
        subject: 'ইংরেজি',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 3,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৬ষ্ঠ শ্রেণি',
        date: '০৯ জুন ২০২৬',
        day: 'মঙ্গলবার',
        subject: 'গণিত',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 4,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৬ষ্ঠ শ্রেণি',
        date: '১১ জুন ২০২৬',
        day: 'বৃহস্পতিবার',
        subject: 'বিজ্ঞান',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 5,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৭ম শ্রেণি',
        date: '০৬ জুন ২০২৬',
        day: 'শনিবার',
        subject: 'বাংলা',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 6,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৭ম শ্রেণি',
        date: '০৮ জুন ২০২৬',
        day: 'সোমবার',
        subject: 'ইংরেজি',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 7,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৭ম শ্রেণি',
        date: '১০ জুন ২০২৬',
        day: 'বুধবার',
        subject: 'গণিত',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
    {
        id: 8,
        exam: 'অর্ধবার্ষিক পরীক্ষা',
        className: '৭ম শ্রেণি',
        date: '১২ জুন ২০২৬',
        day: 'শুক্রবার',
        subject: 'বিজ্ঞান',
        time: 'সকাল ১০:০০ - ১:০০',
        duration: '৩ ঘণ্টা',
    },
];

const classes = [
    'সকল শ্রেণি',
    '৬ষ্ঠ শ্রেণি',
    '৭ম শ্রেণি',
    '৮ম শ্রেণি',
    '৯ম শ্রেণি',
    '১০ম শ্রেণি',
];

export default function ExaminationSchedule() {
    return (
        <>
            <Head title="পরীক্ষার সময়সূচী" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'একাডেমিক',
                        },
                        {
                            label: 'একাডেমিক',
                        },
                    ]}
                    categoryIcon="fas fa-calendar-alt"
                    category="একাডেমিক"
                    title="পরীক্ষার সময়সূচী"
                    subtitle={`বিদ্যালয়ের বিভিন্ন শ্রেণির পরীক্ষা ও মূল্যায়নের সময়সূচী এখানে প্রকাশ করা হয়।`}
                />

                {/* =====================================================
                    INTRO
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            পরীক্ষার তথ্য
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            পরীক্ষার সময়সূচী ও প্রয়োজনীয় তথ্য
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
                            শিক্ষার্থীদের পরীক্ষার প্রস্তুতি সঠিকভাবে সম্পন্ন
                            করার জন্য পরীক্ষার তারিখ, বিষয়, সময় এবং অন্যান্য
                            প্রয়োজনীয় তথ্য নিচে দেওয়া হয়েছে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    FILTER
                ====================================================== */}
                <section className="container mx-auto px-4 pb-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="font-bold">
                                        শ্রেণি নির্বাচন করুন
                                    </h3>

                                    <p className="mt-1 text-xs text-foreground/60 sm:text-sm">
                                        আপনার শ্রেণির পরীক্ষার সময়সূচী দেখুন।
                                    </p>
                                </div>

                                <select
                                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 md:w-64"
                                    defaultValue="সকল শ্রেণি"
                                >
                                    {classes.map((className) => (
                                        <option key={className}>
                                            {className}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DESKTOP TABLE
                ====================================================== */}
                <section className="container mx-auto px-4 pb-14 sm:pb-16 md:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="px-5 py-4 text-left font-semibold">
                                                পরীক্ষা
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                শ্রেণি
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                তারিখ
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                বার
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                বিষয়
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                সময়
                                            </th>
                                            <th className="px-5 py-4 text-left font-semibold">
                                                সময়কাল
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-border">
                                        {schedules.map((schedule) => (
                                            <tr
                                                key={schedule.id}
                                                className="transition-colors hover:bg-primary/5"
                                            >
                                                <td className="px-5 py-4 font-semibold">
                                                    {schedule.exam}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                        {schedule.className}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    {schedule.date}
                                                </td>

                                                <td className="px-5 py-4">
                                                    {schedule.day}
                                                </td>

                                                <td className="px-5 py-4 font-medium">
                                                    {schedule.subject}
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    {schedule.time}
                                                </td>

                                                <td className="px-5 py-4">
                                                    {schedule.duration}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =================================================
                            MOBILE CARDS
                        ================================================== */}
                        <div className="space-y-4 md:hidden">
                            {schedules.map((schedule) => (
                                <article
                                    key={schedule.id}
                                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-3 border-b border-border bg-primary/5 px-4 py-4">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <i className="fas fa-calendar-day" />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="truncate text-sm font-bold">
                                                    {schedule.exam}
                                                </h3>

                                                <span className="text-xs text-foreground/60">
                                                    {schedule.className}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                                            {schedule.subject}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-px bg-border">
                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                তারিখ
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {schedule.date}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                বার
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {schedule.day}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                পরীক্ষার সময়
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {schedule.time}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                সময়কাল
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {schedule.duration}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    IMPORTANT NOTICE
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <i className="fas fa-info-circle text-lg" />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-bold sm:text-xl">
                                            গুরুত্বপূর্ণ নির্দেশনা
                                        </h2>

                                        <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/70 sm:text-base">
                                            <li className="flex gap-2">
                                                <i className="fas fa-check mt-2 text-xs text-primary" />
                                                <span>
                                                    শিক্ষার্থীদের পরীক্ষার
                                                    নির্ধারিত সময়ের অন্তত ৩০
                                                    মিনিট আগে বিদ্যালয়ে উপস্থিত
                                                    হতে হবে।
                                                </span>
                                            </li>

                                            <li className="flex gap-2">
                                                <i className="fas fa-check mt-2 text-xs text-primary" />
                                                <span>
                                                    পরীক্ষার হলে প্রয়োজনীয়
                                                    শিক্ষা উপকরণ সঙ্গে আনতে হবে।
                                                </span>
                                            </li>

                                            <li className="flex gap-2">
                                                <i className="fas fa-check mt-2 text-xs text-primary" />
                                                <span>
                                                    কোনো পরিবর্তন হলে বিদ্যালয়ের
                                                    নোটিশের মাধ্যমে জানানো হবে।
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-card p-6 text-center sm:p-8 md:p-10">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <i className="fas fa-graduation-cap text-xl" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                            আরও একাডেমিক তথ্য
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                            পাঠ্যবই, পাঠ্যসূচি, ক্লাস রুটিন এবং অন্যান্য
                            একাডেমিক তথ্য দেখতে নিচের পেজগুলোতে যান।
                        </p>

                        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/book-list"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                <i className="fas fa-book" />
                                বইয়ের তালিকা
                            </Link>

                            <Link
                                href="/syllabus"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                                <i className="fas fa-book-open" />
                                পাঠ্যসূচি
                            </Link>

                            <Link
                                href="/class-routine"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                                <i className="fas fa-calendar-check" />
                                ক্লাস রুটিন
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
