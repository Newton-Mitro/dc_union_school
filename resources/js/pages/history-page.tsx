import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface HistorySection {
    number: string;
    title: string;
    subtitle: string;
    icon: string;
    color: 'primary' | 'secondary';
    description: string;
}

const historySections: HistorySection[] = [
    {
        number: '০১',
        title: 'একটি স্বপ্নের সূচনা',
        subtitle: 'প্রতিষ্ঠার সূচনা',
        icon: 'fas fa-school',
        color: 'primary',
        description:
            'একটি আদর্শ শিক্ষা প্রতিষ্ঠান গড়ে তোলার লক্ষ্য থেকেই ঢাকা ক্রেডিট ইউনিয়ন স্কুলের পথচলার সূচনা। শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানের পাশাপাশি তাদের নৈতিক, সামাজিক ও মানবিক মূল্যবোধের বিকাশকে শুরু থেকেই গুরুত্ব দেওয়া হয়েছে।',
    },
    {
        number: '০২',
        title: 'শিক্ষা কার্যক্রমের বিস্তার',
        subtitle: 'শিক্ষা কার্যক্রম',
        icon: 'fas fa-book-open',
        color: 'secondary',
        description:
            'সময়ের সঙ্গে সঙ্গে বিদ্যালয়ের শিক্ষা কার্যক্রম আরও বিস্তৃত হয়েছে। আধুনিক শিক্ষাব্যবস্থা, পাঠ্যক্রমভিত্তিক কার্যক্রম এবং সহশিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের বহুমুখী প্রতিভা বিকাশের সুযোগ তৈরি করা হয়েছে।',
    },
    {
        number: '০৩',
        title: 'আধুনিক শিক্ষার সঙ্গে অভিযোজন',
        subtitle: 'আধুনিকায়ন',
        icon: 'fas fa-laptop',
        color: 'primary',
        description:
            'বর্তমান সময়ের চাহিদার সঙ্গে সামঞ্জস্য রেখে বিদ্যালয়ে বিজ্ঞান, প্রযুক্তি, কম্পিউটার শিক্ষা, মাল্টিমিডিয়া শিক্ষাদান এবং বিভিন্ন আধুনিক শিক্ষাসুবিধা যুক্ত করা হয়েছে।',
    },
    {
        number: '০৪',
        title: 'ভবিষ্যতের পথে',
        subtitle: 'বর্তমান',
        icon: 'fas fa-users',
        color: 'secondary',
        description:
            'আজও ঢাকা ক্রেডিট ইউনিয়ন স্কুল শিক্ষার্থীদের জ্ঞান, নৈতিকতা, সৃজনশীলতা ও মানবিক মূল্যবোধের সমন্বয়ে গড়ে তোলার লক্ষ্যে কাজ করে যাচ্ছে। ভবিষ্যতেও একটি আধুনিক, মানবিক ও আত্মনির্ভরশীল সমাজ গঠনে অবদান রাখাই আমাদের প্রত্যয়।',
    },
];

export default function History() {
    return (
        <>
            <Head title="ইতিহাস" />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'আমাদের সম্পর্কে',
                        },
                        {
                            label: 'আমাদের ইতিহাস',
                        },
                    ]}
                    categoryIcon="fas fa-images"
                    category="আমাদের সম্পর্কে"
                    title="আমাদের ইতিহাস"
                    subtitle={`ঢাকা ক্রেডিট ইউনিয়ন স্কুলের প্রতিষ্ঠা, বিকাশ এবং শিক্ষা কার্যক্রমের দীর্ঘ পথচলা।`}
                />

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-semibold text-primary">
                            আমাদের পথচলা
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                            শিক্ষা ও মানবিক মূল্যবোধের দীর্ঘ পথচলা
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary" />

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base">
                            একটি শিক্ষা প্রতিষ্ঠান শুধু পাঠ্যবইয়ের জ্ঞান প্রদান
                            করে না; বরং একজন শিক্ষার্থীর চিন্তা, চরিত্র,
                            মূল্যবোধ ও ভবিষ্যৎ গঠনে গুরুত্বপূর্ণ ভূমিকা রাখে। এই
                            আদর্শকে সামনে রেখে ঢাকা ক্রেডিট ইউনিয়ন স্কুল তার
                            শিক্ষা কার্যক্রম পরিচালনা করে আসছে।
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    HISTORY CARDS
                ====================================================== */}
                <section className="bg-muted/20">
                    <div className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                        <div className="mx-auto max-w-6xl">
                            {/* Section heading */}
                            <div className="mb-10 text-center sm:mb-14">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    <i className="fas fa-landmark" />
                                    গুরুত্বপূর্ণ অধ্যায়
                                </span>

                                <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                                    আমাদের বিকাশের ধাপসমূহ
                                </h2>
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {historySections.map((item) => (
                                    <article
                                        key={item.number}
                                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                                    >
                                        {/* Decorative number */}
                                        <span className="pointer-events-none absolute -top-5 -right-2 text-8xl font-black text-primary/5">
                                            {item.number}
                                        </span>

                                        <div className="relative">
                                            {/* Icon + number */}
                                            <div className="flex items-center justify-between">
                                                <div
                                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                                                        item.color === 'primary'
                                                            ? 'bg-primary/10 text-primary'
                                                            : 'bg-secondary/10 text-secondary'
                                                    }`}
                                                >
                                                    <i
                                                        className={`${item.icon} text-xl`}
                                                    />
                                                </div>

                                                <span className="text-3xl font-black text-foreground/10">
                                                    {item.number}
                                                </span>
                                            </div>

                                            {/* Subtitle */}
                                            <div className="mt-6">
                                                <span
                                                    className={`text-xs font-bold tracking-wider uppercase ${
                                                        item.color === 'primary'
                                                            ? 'text-primary'
                                                            : 'text-secondary'
                                                    }`}
                                                >
                                                    {item.subtitle}
                                                </span>

                                                <h3 className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Divider */}
                                            <div
                                                className={`mt-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${
                                                    item.color === 'primary'
                                                        ? 'bg-primary'
                                                        : 'bg-secondary'
                                                }`}
                                            />

                                            {/* Description */}
                                            <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    VALUES
                ====================================================== */}
                <section className="container mx-auto px-4 py-14 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Knowledge */}
                            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <i className="fas fa-book-open text-xl" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    জ্ঞান
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/70">
                                    আধুনিক ও যুগোপযোগী শিক্ষার মাধ্যমে
                                    শিক্ষার্থীদের জ্ঞান ও দক্ষতা বৃদ্ধি করা।
                                </p>
                            </div>

                            {/* Morality */}
                            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                    <i className="fas fa-heart text-xl" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    নৈতিকতা
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/70">
                                    সততা, দায়িত্ববোধ ও নৈতিক মূল্যবোধসম্পন্ন
                                    মানুষ হিসেবে শিক্ষার্থীদের গড়ে তোলা।
                                </p>
                            </div>

                            {/* Humanity */}
                            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <i className="fas fa-hands-helping text-xl" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">
                                    মানবিকতা
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-foreground/70">
                                    মানবিক মূল্যবোধ, সহমর্মিতা ও সামাজিক
                                    দায়িত্ববোধের বিকাশ ঘটানো।
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-12 sm:py-16">
                        <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-border bg-background p-6 text-center sm:p-8 md:p-10">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <i className="fas fa-graduation-cap text-xl" />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                ভবিষ্যতের পথে আমাদের প্রত্যয়
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/75 sm:text-base">
                                যুগোপযোগী শিক্ষার মাধ্যমে জ্ঞানী, দক্ষ,
                                নৈতিকতাসম্পন্ন ও মানবিক প্রজন্ম গড়ে তোলা এবং
                                আত্মনির্ভরশীল দেশ গঠনে ভূমিকা রাখাই আমাদের
                                লক্ষ্য।
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/vision"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    <i className="fas fa-bullseye" />
                                    লক্ষ্য ও উদ্দেশ্য
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
