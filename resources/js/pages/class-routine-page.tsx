import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface RoutineItem {
    id: number;
    day: string;
    dayShort: string;
    period: string;
    time: string;
    subject: string;
    teacher: string;
    room: string;
}

const routine: RoutineItem[] = [
    {
        id: 1,
        day: 'শনিবার',
        dayShort: 'শনি',
        period: '১ম',
        time: 'সকাল ৮:০০ - ৮:৪৫',
        subject: 'বাংলা',
        teacher: 'বাংলা শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 2,
        day: 'শনিবার',
        dayShort: 'শনি',
        period: '২য়',
        time: 'সকাল ৮:৪৫ - ৯:৩০',
        subject: 'গণিত',
        teacher: 'গণিত শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 3,
        day: 'শনিবার',
        dayShort: 'শনি',
        period: '৩য়',
        time: 'সকাল ৯:৩০ - ১০:১৫',
        subject: 'ইংরেজি',
        teacher: 'ইংরেজি শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 4,
        day: 'শনিবার',
        dayShort: 'শনি',
        period: '৪র্থ',
        time: 'সকাল ১০:১৫ - ১১:০০',
        subject: 'বিজ্ঞান',
        teacher: 'বিজ্ঞান শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 5,
        day: 'রবিবার',
        dayShort: 'রবি',
        period: '১ম',
        time: 'সকাল ৮:০০ - ৮:৪৫',
        subject: 'ইংরেজি',
        teacher: 'ইংরেজি শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 6,
        day: 'রবিবার',
        dayShort: 'রবি',
        period: '২য়',
        time: 'সকাল ৮:৪৫ - ৯:৩০',
        subject: 'বাংলা',
        teacher: 'বাংলা শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 7,
        day: 'রবিবার',
        dayShort: 'রবি',
        period: '৩য়',
        time: 'সকাল ৯:৩০ - ১০:১৫',
        subject: 'আইসিটি',
        teacher: 'আইসিটি শিক্ষক',
        room: 'কম্পিউটার ল্যাব',
    },
    {
        id: 8,
        day: 'রবিবার',
        dayShort: 'রবি',
        period: '৪র্থ',
        time: 'সকাল ১০:১৫ - ১১:০০',
        subject: 'গণিত',
        teacher: 'গণিত শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 9,
        day: 'সোমবার',
        dayShort: 'সোম',
        period: '১ম',
        time: 'সকাল ৮:০০ - ৮:৪৫',
        subject: 'গণিত',
        teacher: 'গণিত শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 10,
        day: 'সোমবার',
        dayShort: 'সোম',
        period: '২য়',
        time: 'সকাল ৮:৪৫ - ৯:৩০',
        subject: 'বিজ্ঞান',
        teacher: 'বিজ্ঞান শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 11,
        day: 'সোমবার',
        dayShort: 'সোম',
        period: '৩য়',
        time: 'সকাল ৯:৩০ - ১০:১৫',
        subject: 'বাংলা',
        teacher: 'বাংলা শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 12,
        day: 'সোমবার',
        dayShort: 'সোম',
        period: '৪র্থ',
        time: 'সকাল ১০:১৫ - ১১:০০',
        subject: 'শারীরিক শিক্ষা',
        teacher: 'শারীরিক শিক্ষা শিক্ষক',
        room: 'মাঠ',
    },
    {
        id: 13,
        day: 'মঙ্গলবার',
        dayShort: 'মঙ্গল',
        period: '১ম',
        time: 'সকাল ৮:০০ - ৮:৪৫',
        subject: 'বিজ্ঞান',
        teacher: 'বিজ্ঞান শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 14,
        day: 'মঙ্গলবার',
        dayShort: 'মঙ্গল',
        period: '২য়',
        time: 'সকাল ৮:৪৫ - ৯:৩০',
        subject: 'ইংরেজি',
        teacher: 'ইংরেজি শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 15,
        day: 'মঙ্গলবার',
        dayShort: 'মঙ্গল',
        period: '৩য়',
        time: 'সকাল ৯:৩০ - ১০:১৫',
        subject: 'ধর্ম ও নৈতিক শিক্ষা',
        teacher: 'শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 16,
        day: 'মঙ্গলবার',
        dayShort: 'মঙ্গল',
        period: '৪র্থ',
        time: 'সকাল ১০:১৫ - ১১:০০',
        subject: 'আইসিটি',
        teacher: 'আইসিটি শিক্ষক',
        room: 'কম্পিউটার ল্যাব',
    },
    {
        id: 17,
        day: 'বুধবার',
        dayShort: 'বুধ',
        period: '১ম',
        time: 'সকাল ৮:০০ - ৮:৪৫',
        subject: 'বাংলা',
        teacher: 'বাংলা শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 18,
        day: 'বুধবার',
        dayShort: 'বুধ',
        period: '২য়',
        time: 'সকাল ৮:৪৫ - ৯:৩০',
        subject: 'গণিত',
        teacher: 'গণিত শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 19,
        day: 'বুধবার',
        dayShort: 'বুধ',
        period: '৩য়',
        time: 'সকাল ৯:৩০ - ১০:১৫',
        subject: 'ইংরেজি',
        teacher: 'ইংরেজি শিক্ষক',
        room: 'কক্ষ-১০১',
    },
    {
        id: 20,
        day: 'বুধবার',
        dayShort: 'বুধ',
        period: '৪র্থ',
        time: 'সকাল ১০:১৫ - ১১:০০',
        subject: 'চারু ও কারুকলা',
        teacher: 'শিক্ষক',
        room: 'কক্ষ-১০১',
    },
];

const classes = [
    '৬ষ্ঠ শ্রেণি',
    '৭ম শ্রেণি',
    '৮ম শ্রেণি',
    '৯ম শ্রেণি',
    '১০ম শ্রেণি',
];

const days = ['সকল দিন', 'শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার'];

export default function ClassRoutine() {
    return (
        <>
            <Head title="ক্লাস রুটিন" />

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
                            label: 'ক্লাস রুটিন',
                        },
                    ]}
                    categoryIcon="fas fa-calendar-check"
                    category="একাডেমিক"
                    title="ক্লাস রুটিন"
                    subtitle={`শিক্ষার্থীদের নিয়মিত ক্লাস, বিষয়, সময় ও কক্ষের বিস্তারিত সময়সূচী।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            দৈনিক পাঠদান
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            নিয়মিত ক্লাসের সময়সূচী
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
                            প্রতিটি শ্রেণির শিক্ষার্থীদের নিয়মিত পাঠদান,
                            ব্যবহারিক শিক্ষা এবং সহশিক্ষা কার্যক্রম সুষ্ঠুভাবে
                            পরিচালনার জন্য নির্ধারিত ক্লাস রুটিন অনুসরণ করা হয়।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    FILTERS
                ====================================================== */}
                <section className="container mx-auto px-4 pb-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="class"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        শ্রেণি
                                    </label>

                                    <select
                                        id="class"
                                        defaultValue="৬ষ্ঠ শ্রেণি"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    >
                                        {classes.map((className) => (
                                            <option key={className}>
                                                {className}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="day"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        দিন
                                    </label>

                                    <select
                                        id="day"
                                        defaultValue="সকল দিন"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    >
                                        {days.map((day) => (
                                            <option key={day}>{day}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ROUTINE TABLE
                ====================================================== */}
                <section className="container mx-auto px-4 pb-14 sm:pb-16 md:pb-20">
                    <div className="mx-auto max-w-6xl">
                        {/* Desktop */}
                        <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="px-5 py-4 text-left font-semibold">
                                                দিন
                                            </th>

                                            <th className="px-5 py-4 text-left font-semibold">
                                                পিরিয়ড
                                            </th>

                                            <th className="px-5 py-4 text-left font-semibold">
                                                সময়
                                            </th>

                                            <th className="px-5 py-4 text-left font-semibold">
                                                বিষয়
                                            </th>

                                            <th className="px-5 py-4 text-left font-semibold">
                                                শিক্ষক
                                            </th>

                                            <th className="px-5 py-4 text-left font-semibold">
                                                কক্ষ
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-border">
                                        {routine.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="transition-colors hover:bg-primary/5"
                                            >
                                                <td className="px-5 py-4">
                                                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                        {item.day}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4 font-semibold">
                                                    {item.period}
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap text-foreground/70">
                                                    {item.time}
                                                </td>

                                                <td className="px-5 py-4 font-semibold">
                                                    {item.subject}
                                                </td>

                                                <td className="px-5 py-4 text-foreground/70">
                                                    {item.teacher}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary">
                                                        <i className="fas fa-door-open" />
                                                        {item.room}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =================================================
                            MOBILE
                        ================================================== */}
                        <div className="space-y-4 md:hidden">
                            {routine.map((item) => (
                                <article
                                    key={item.id}
                                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-3 border-b border-border bg-primary/5 px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                                <i className="fas fa-calendar-day" />
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-bold">
                                                    {item.day}
                                                </h3>

                                                <span className="text-xs text-foreground/60">
                                                    {item.period} পিরিয়ড
                                                </span>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                                            {item.subject}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-px bg-border">
                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                সময়
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {item.time}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                পিরিয়ড
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {item.period}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                শিক্ষক
                                            </span>

                                            <span className="mt-1 block text-sm font-semibold">
                                                {item.teacher}
                                            </span>
                                        </div>

                                        <div className="bg-card p-4">
                                            <span className="block text-xs text-foreground/50">
                                                কক্ষ
                                            </span>

                                            <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold">
                                                <i className="fas fa-door-open text-xs text-secondary" />
                                                {item.room}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    IMPORTANT INFORMATION
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
                                                    শিক্ষার্থীদের নির্ধারিত
                                                    ক্লাস শুরুর অন্তত ১০ মিনিট
                                                    আগে বিদ্যালয়ে উপস্থিত হতে
                                                    হবে।
                                                </span>
                                            </li>

                                            <li className="flex gap-2">
                                                <i className="fas fa-check mt-2 text-xs text-primary" />

                                                <span>
                                                    ব্যবহারিক ক্লাসের জন্য
                                                    নির্ধারিত ল্যাব বা কক্ষে
                                                    সময়মতো উপস্থিত হতে হবে।
                                                </span>
                                            </li>

                                            <li className="flex gap-2">
                                                <i className="fas fa-check mt-2 text-xs text-primary" />

                                                <span>
                                                    বিশেষ প্রয়োজন বা পরিবর্তনের
                                                    ক্ষেত্রে বিদ্যালয়ের নোটিশ
                                                    অনুসরণ করতে হবে।
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
                    ACADEMIC CTA
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
                            পরীক্ষার সময়সূচী, বইয়ের তালিকা এবং পাঠ্যসূচি
                            সম্পর্কিত তথ্য দেখতে নিচের পেজগুলোতে যান।
                        </p>

                        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/examination-schedule"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                <i className="fas fa-calendar-alt" />
                                পরীক্ষার সময়সূচী
                            </Link>

                            <Link
                                href="/book-list"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
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
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
