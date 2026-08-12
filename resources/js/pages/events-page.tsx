import { Head, Link } from '@inertiajs/react';
import PageHeader from '../components/page-header';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    isUpcoming: boolean;
}

const events: Event[] = [
    {
        id: 1,
        title: 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান',
        date: '২০ আগস্ট ২০২৬',
        time: 'সকাল ৯:০০টা',
        location: 'ঢাকা ক্রেডিট ইউনিয়ন স্কুল প্রাঙ্গণ',
        category: 'সাংস্কৃতিক অনুষ্ঠান',
        description:
            'ঢাকা ক্রেডিট ইউনিয়ন স্কুলের বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়েছে। সকল শিক্ষার্থী, শিক্ষক ও অভিভাবকদের অনুষ্ঠানে অংশগ্রহণের জন্য আন্তরিকভাবে আমন্ত্রণ জানানো হলো।',
        isUpcoming: true,
    },
    {
        id: 2,
        title: 'অভিভাবক সমাবেশ',
        date: '২৫ আগস্ট ২০২৬',
        time: 'সকাল ১০:০০টা',
        location: 'বিদ্যালয়ের অডিটোরিয়াম',
        category: 'অভিভাবক',
        description:
            'শিক্ষার্থীদের শিক্ষার মানোন্নয়ন, নিয়মিত উপস্থিতি এবং সার্বিক উন্নয়ন নিয়ে অভিভাবকদের সঙ্গে মতবিনিময়ের জন্য বিশেষ সমাবেশের আয়োজন করা হয়েছে।',
        isUpcoming: true,
    },
    {
        id: 3,
        title: 'বিজ্ঞান মেলা ২০২৬',
        date: '৫ সেপ্টেম্বর ২০২৬',
        time: 'সকাল ৯:৩০টা',
        location: 'বিদ্যালয় ক্যাম্পাস',
        category: 'বিজ্ঞান',
        description:
            'শিক্ষার্থীদের বিজ্ঞানমনস্কতা ও সৃজনশীলতা বিকাশের লক্ষ্যে বিজ্ঞান মেলার আয়োজন করা হয়েছে। বিভিন্ন শ্রেণির শিক্ষার্থীরা তাদের উদ্ভাবনী প্রকল্প উপস্থাপন করবে।',
        isUpcoming: true,
    },
    {
        id: 4,
        title: 'শিক্ষা সফর',
        date: '১৫ সেপ্টেম্বর ২০২৬',
        time: 'সকাল ৭:০০টা',
        location: 'বিদ্যালয় প্রাঙ্গণ থেকে যাত্রা',
        category: 'শিক্ষা সফর',
        description:
            'শিক্ষার্থীদের বাস্তবভিত্তিক জ্ঞান ও অভিজ্ঞতা অর্জনের লক্ষ্যে শিক্ষা সফরের আয়োজন করা হয়েছে।',
        isUpcoming: true,
    },
    {
        id: 5,
        title: 'বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান',
        date: '১০ জুলাই ২০২৬',
        time: 'সকাল ১০:০০টা',
        location: 'বিদ্যালয় অডিটোরিয়াম',
        category: 'পুরস্কার',
        description:
            'শিক্ষার্থীদের একাডেমিক ও সহশিক্ষা কার্যক্রমের সাফল্যকে স্বীকৃতি দেওয়ার জন্য বার্ষিক পুরস্কার বিতরণী অনুষ্ঠানের আয়োজন করা হয়েছিল।',
        isUpcoming: false,
    },
    {
        id: 6,
        title: 'স্বাধীনতা দিবস উদযাপন',
        date: '২৬ মার্চ ২০২৬',
        time: 'সকাল ৮:০০টা',
        location: 'বিদ্যালয় প্রাঙ্গণ',
        category: 'জাতীয় দিবস',
        description:
            'মহান স্বাধীনতা ও জাতীয় দিবস উপলক্ষে বিদ্যালয়ে বিভিন্ন কর্মসূচির আয়োজন করা হয়েছিল।',
        isUpcoming: false,
    },
];

export default function Events() {
    const upcomingEvents = events.filter((event) => event.isUpcoming);
    const previousEvents = events.filter((event) => !event.isUpcoming);

    return (
        <>
            <Head title="ইভেন্ট" />

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
                            label: 'ইভেন্ট',
                        },
                    ]}
                    categoryIcon="fas fa-calendar-alt"
                    category="একাডেমিক"
                    title="ইভেন্ট"
                    subtitle={`বিদ্যালয়ের বিভিন্ন শিক্ষা, সাংস্কৃতিক, ক্রীড়া ও সামাজিক কার্যক্রমের তথ্য।`}
                />

                {/* =====================================================
                    UPCOMING EVENTS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <span className="text-sm font-semibold text-primary">
                                    সামনে যা আসছে
                                </span>

                                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                                    আসন্ন ইভেন্ট
                                </h2>
                            </div>

                            <div className="hidden h-px flex-1 bg-border sm:ml-8 sm:block" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PREVIOUS EVENTS
                ====================================================== */}
                {previousEvents.length > 0 && (
                    <section className="border-t border-border bg-card">
                        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                            <div className="mx-auto max-w-6xl">
                                <div className="mb-8">
                                    <span className="text-sm font-semibold text-secondary">
                                        সম্পন্ন কার্যক্রম
                                    </span>

                                    <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                                        পূর্ববর্তী ইভেন্ট
                                    </h2>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {previousEvents.map((event) => (
                                        <EventCard
                                            key={event.id}
                                            event={event}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-primary p-6 text-center text-primary-foreground shadow-lg sm:p-8 md:p-10">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/15">
                            <i className="fas fa-calendar-check text-xl" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                            বিদ্যালয়ের কার্যক্রমে অংশ নিন
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
                            শিক্ষার্থীদের সার্বিক বিকাশে শিক্ষা, সংস্কৃতি,
                            খেলাধুলা ও বিভিন্ন সহশিক্ষা কার্যক্রম গুরুত্বপূর্ণ
                            ভূমিকা পালন করে।
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <i className="fas fa-phone-alt" />
                            যোগাযোগ করুন
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

/* =====================================================
    EVENT CARD
====================================================== */

interface EventCardProps {
    event: Event;
}

function EventCard({ event }: EventCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Event Header */}
            <div className="relative flex h-32 items-center justify-center overflow-hidden bg-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

                {/* Calendar */}
                <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-background shadow-md">
                    <i className="fas fa-calendar-alt text-xl text-primary" />

                    <span className="mt-1 text-[11px] font-semibold text-foreground/60">
                        {event.date.split(' ')[1] || '২০২৬'}
                    </span>
                </div>

                {/* Status */}
                <span
                    className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        event.isUpcoming
                            ? 'bg-green-500/10 text-green-600'
                            : 'bg-muted text-foreground/60'
                    }`}
                >
                    {event.isUpcoming ? 'আসন্ন' : 'সম্পন্ন'}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {event.category}
                </span>

                <h3 className="mt-4 text-lg leading-7 font-bold transition-colors group-hover:text-primary sm:text-xl">
                    {event.title}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-foreground/65">
                    <div className="flex items-start gap-3">
                        <i className="fas fa-calendar-day mt-1 w-4 text-center text-primary" />
                        <span>{event.date}</span>
                    </div>

                    <div className="flex items-start gap-3">
                        <i className="fas fa-clock mt-1 w-4 text-center text-secondary" />
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3">
                        <i className="fas fa-map-marker-alt mt-1 w-4 text-center text-orange-500" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-foreground/70">
                    {event.description}
                </p>

                <Link
                    href={`/events/${event.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                    বিস্তারিত দেখুন
                    <i className="fas fa-arrow-right text-xs" />
                </Link>
            </div>
        </article>
    );
}
