import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import PageHeader from '../components/page-header';

type Book = {
    id: number;
    title: string;
    subject: string;
    className: string;
    publisher: string;
    edition: string;
    color: 'primary' | 'secondary' | 'green' | 'orange';
};

const books: Book[] = [
    {
        id: 1,
        title: 'বাংলা',
        subject: 'বাংলা',
        className: '৬ষ্ঠ শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'primary',
    },
    {
        id: 2,
        title: 'English For Today',
        subject: 'ইংরেজি',
        className: '৬ষ্ঠ শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'secondary',
    },
    {
        id: 3,
        title: 'গণিত',
        subject: 'গণিত',
        className: '৬ষ্ঠ শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'green',
    },
    {
        id: 4,
        title: 'বিজ্ঞান',
        subject: 'বিজ্ঞান',
        className: '৬ষ্ঠ শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'orange',
    },
    {
        id: 5,
        title: 'বাংলা',
        subject: 'বাংলা',
        className: '৭ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'primary',
    },
    {
        id: 6,
        title: 'English For Today',
        subject: 'ইংরেজি',
        className: '৭ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'secondary',
    },
    {
        id: 7,
        title: 'গণিত',
        subject: 'গণিত',
        className: '৭ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'green',
    },
    {
        id: 8,
        title: 'বিজ্ঞান',
        subject: 'বিজ্ঞান',
        className: '৭ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'orange',
    },
    {
        id: 9,
        title: 'বাংলা',
        subject: 'বাংলা',
        className: '৮ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'primary',
    },
    {
        id: 10,
        title: 'English For Today',
        subject: 'ইংরেজি',
        className: '৮ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'secondary',
    },
    {
        id: 11,
        title: 'গণিত',
        subject: 'গণিত',
        className: '৮ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'green',
    },
    {
        id: 12,
        title: 'বিজ্ঞান',
        subject: 'বিজ্ঞান',
        className: '৮ম শ্রেণি',
        publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
        edition: '২০২৬',
        color: 'orange',
    },
];

const colorClasses = {
    primary: {
        icon: 'bg-primary/10 text-primary',
        badge: 'bg-primary/10 text-primary',
        button: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    secondary: {
        icon: 'bg-secondary/10 text-secondary',
        badge: 'bg-secondary/10 text-secondary',
        button: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    },
    green: {
        icon: 'bg-green-500/10 text-green-600',
        badge: 'bg-green-500/10 text-green-600',
        button: 'bg-green-600 text-white hover:bg-green-700',
    },
    orange: {
        icon: 'bg-orange-500/10 text-orange-600',
        badge: 'bg-orange-500/10 text-orange-600',
        button: 'bg-orange-500 text-white hover:bg-orange-600',
    },
};

export default function BookList() {
    const [selectedClass, setSelectedClass] = useState('সকল শ্রেণি');
    const [selectedSubject, setSelectedSubject] = useState('সকল বিষয়');

    const classes = [
        'সকল শ্রেণি',
        ...Array.from(new Set(books.map((book) => book.className))),
    ];

    const subjects = [
        'সকল বিষয়',
        ...Array.from(new Set(books.map((book) => book.subject))),
    ];

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const classMatch =
                selectedClass === 'সকল শ্রেণি' ||
                book.className === selectedClass;

            const subjectMatch =
                selectedSubject === 'সকল বিষয়' ||
                book.subject === selectedSubject;

            return classMatch && subjectMatch;
        });
    }, [selectedClass, selectedSubject]);

    return (
        <>
            <Head title="বই এর তালিকা" />

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
                            label: 'বই এর তালিকা',
                        },
                    ]}
                    categoryIcon="fas fa-book"
                    category="একাডেমিক"
                    title="বই এর তালিকা"
                    subtitle={`শ্রেণি ও বিষয়ভিত্তিক পাঠ্যবইয়ের তালিকা এবং প্রয়োজনীয় তথ্য।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            পাঠ্যবই
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            শ্রেণিভিত্তিক বইয়ের তালিকা
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            শিক্ষার্থীদের নিয়মিত পাঠদান ও অধ্যয়নকে সহজ করার জন্য
                            শ্রেণি ও বিষয় অনুযায়ী প্রয়োজনীয় পাঠ্যবইয়ের তালিকা
                            এখানে দেওয়া হয়েছে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    FILTER
                ====================================================== */}
                <section className="container mx-auto px-4 pb-10">
                    <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Class */}
                            <div>
                                <label
                                    htmlFor="class"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    শ্রেণি নির্বাচন করুন
                                </label>

                                <div className="relative">
                                    <i className="fas fa-graduation-cap pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-primary" />

                                    <select
                                        id="class"
                                        value={selectedClass}
                                        onChange={(e) =>
                                            setSelectedClass(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-xl border border-border bg-background py-3 pr-10 pl-11 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    >
                                        {classes.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    <i className="fas fa-chevron-down pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs text-foreground/50" />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    বিষয় নির্বাচন করুন
                                </label>

                                <div className="relative">
                                    <i className="fas fa-book-open pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-secondary" />

                                    <select
                                        id="subject"
                                        value={selectedSubject}
                                        onChange={(e) =>
                                            setSelectedSubject(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-xl border border-border bg-background py-3 pr-10 pl-11 text-sm transition outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    >
                                        {subjects.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    <i className="fas fa-chevron-down pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs text-foreground/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    BOOK COUNT
                ====================================================== */}
                <section className="container mx-auto px-4 pb-6">
                    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
                        <div>
                            <h2 className="text-xl font-bold sm:text-2xl">
                                পাঠ্যবইসমূহ
                            </h2>

                            <p className="mt-1 text-xs text-foreground/60 sm:text-sm">
                                মোট {filteredBooks.length}টি বই পাওয়া গেছে
                            </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
                            <i className="fas fa-books text-sm" />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    BOOK GRID
                ====================================================== */}
                <section className="container mx-auto px-4 pb-14 sm:pb-16 md:pb-20">
                    <div className="mx-auto max-w-6xl">
                        {filteredBooks.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredBooks.map((book) => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted text-foreground/50">
                                    <i className="fas fa-book-open text-2xl" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    কোনো বই পাওয়া যায়নি
                                </h3>

                                <p className="mt-2 text-sm text-foreground/60">
                                    অন্য শ্রেণি অথবা বিষয় নির্বাচন করে আবার
                                    চেষ্টা করুন।
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedClass('সকল শ্রেণি');
                                        setSelectedSubject('সকল বিষয়');
                                    }}
                                    className="mt-5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                >
                                    সকল বই দেখুন
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* =====================================================
                    INFORMATION SECTION
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-5 md:grid-cols-3">
                                <InfoCard
                                    icon="fas fa-book"
                                    title="পাঠ্যবই"
                                    description="জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ডের নির্ধারিত পাঠ্যবই অনুসরণ করা হয়।"
                                    color="primary"
                                />

                                <InfoCard
                                    icon="fas fa-calendar-alt"
                                    title="শিক্ষাবর্ষ"
                                    description="প্রতিটি শিক্ষাবর্ষ অনুযায়ী প্রয়োজনীয় বইয়ের তালিকা নিয়মিত হালনাগাদ করা হবে।"
                                    color="secondary"
                                />

                                <InfoCard
                                    icon="fas fa-user-graduate"
                                    title="শিক্ষার্থীদের জন্য"
                                    description="শিক্ষার্থীরা সহজেই শ্রেণি ও বিষয় অনুযায়ী প্রয়োজনীয় বইয়ের তথ্য খুঁজে পেতে পারবে।"
                                    color="green"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

/* =====================================================
    BOOK CARD
====================================================== */

interface BookCardProps {
    book: Book;
}

function BookCard({ book }: BookCardProps) {
    const colors = colorClasses[book.color];

    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            {/* Book Cover */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-muted/40">
                <div
                    className={`flex h-28 w-24 items-center justify-center rounded-lg shadow-lg ${colors.icon}`}
                >
                    <i className="fas fa-book text-4xl" />
                </div>

                <div className="absolute top-4 right-4">
                    <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${colors.badge}`}
                    >
                        {book.edition}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
                >
                    {book.className}
                </span>

                <h3 className="mt-3 text-lg font-bold transition-colors group-hover:text-primary">
                    {book.title}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-foreground/65">
                    <div className="flex items-start gap-2">
                        <i className="fas fa-book-open mt-0.5 w-4 text-center text-primary" />

                        <span>{book.subject}</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <i className="fas fa-building mt-0.5 w-4 text-center text-secondary" />

                        <span>{book.publisher}</span>
                    </div>
                </div>

                <button
                    type="button"
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${colors.button}`}
                >
                    <i className="fas fa-eye text-xs" />
                    বইয়ের বিস্তারিত
                </button>
            </div>
        </article>
    );
}

/* =====================================================
    INFO CARD
====================================================== */

interface InfoCardProps {
    icon: string;
    title: string;
    description: string;
    color: 'primary' | 'secondary' | 'green';
}

function InfoCard({ icon, title, description, color }: InfoCardProps) {
    const classes = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        green: 'bg-green-500/10 text-green-600',
    };

    return (
        <div className="rounded-2xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${classes[color]}`}
            >
                <i className={`${icon} text-xl`} />
            </div>

            <h3 className="mt-5 text-lg font-bold">{title}</h3>

            <p className="mt-3 text-sm leading-7 text-foreground/70">
                {description}
            </p>
        </div>
    );
}
