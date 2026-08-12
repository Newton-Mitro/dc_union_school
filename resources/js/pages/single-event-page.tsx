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

interface Props {
    event: Event;
}

export default function SingleEvent({ event }: Props) {
    return (
        <>
            <Head title={event.title} />

            <main className="min-h-screen bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'ইভেন্ট',
                            href: '/events',
                        },
                        {
                            label: 'বিস্তারিত',
                        },
                    ]}
                    category={event.category}
                    categoryIcon="fas fa-calendar-alt"
                    title={event.title}
                    status={{
                        label: event.isUpcoming
                            ? 'আসন্ন ইভেন্ট'
                            : 'ইভেন্ট সম্পন্ন হয়েছে',
                        active: event.isUpcoming,
                    }}
                />

                {/* =====================================================
                    EVENT DETAILS
                ====================================================== */}
                <section className="container mx-auto px-4 py-10 sm:py-14 md:py-20">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
                            {/* =================================================
                                MAIN CONTENT
                            ================================================== */}
                            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
                                {/* Section Label */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <i className="fas fa-calendar-check" />
                                    </div>

                                    <div>
                                        <span className="text-xs font-semibold text-primary">
                                            ইভেন্ট সম্পর্কে
                                        </span>

                                        <h2 className="text-lg font-bold sm:text-xl">
                                            বিস্তারিত তথ্য
                                        </h2>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="my-6 h-px bg-border" />

                                {/* Description */}
                                <div className="text-sm leading-8 text-foreground/75 sm:text-base">
                                    <p>{event.description}</p>
                                </div>

                                {/* Additional Information */}
                                <div className="mt-8 rounded-xl border border-dashed border-border bg-background p-5 sm:p-6">
                                    <h3 className="text-base font-bold">
                                        ইভেন্টের গুরুত্ব
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                                        বিদ্যালয়ের বিভিন্ন শিক্ষা, সাংস্কৃতিক,
                                        ক্রীড়া ও সামাজিক কার্যক্রম শিক্ষার্থীদের
                                        জ্ঞান, সৃজনশীলতা, নেতৃত্বের দক্ষতা এবং
                                        মানবিক মূল্যবোধ বিকাশে গুরুত্বপূর্ণ
                                        ভূমিকা পালন করে।
                                    </p>
                                </div>
                            </article>

                            {/* =================================================
                                EVENT INFORMATION
                            ================================================== */}
                            <aside className="space-y-5 lg:sticky lg:top-24">
                                {/* Event Info Card */}
                                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                                    <div className="bg-primary px-5 py-4 text-primary-foreground">
                                        <h2 className="flex items-center gap-2 text-base font-bold">
                                            <i className="fas fa-info-circle" />
                                            ইভেন্টের তথ্য
                                        </h2>
                                    </div>

                                    <div className="divide-y divide-border">
                                        {/* Date */}
                                        <EventInfo
                                            icon="fas fa-calendar-day"
                                            label="তারিখ"
                                            value={event.date}
                                            color="text-primary"
                                        />

                                        {/* Time */}
                                        <EventInfo
                                            icon="fas fa-clock"
                                            label="সময়"
                                            value={event.time}
                                            color="text-secondary"
                                        />

                                        {/* Location */}
                                        <EventInfo
                                            icon="fas fa-map-marker-alt"
                                            label="স্থান"
                                            value={event.location}
                                            color="text-orange-500"
                                        />

                                        {/* Category */}
                                        <EventInfo
                                            icon="fas fa-tag"
                                            label="ধরণ"
                                            value={event.category}
                                            color="text-green-600"
                                        />
                                    </div>
                                </div>

                                {/* Status Card */}
                                <div
                                    className={`rounded-2xl border p-5 ${
                                        event.isUpcoming
                                            ? 'border-green-500/20 bg-green-500/5'
                                            : 'border-border bg-card'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                                                event.isUpcoming
                                                    ? 'bg-green-500/10 text-green-600'
                                                    : 'bg-muted text-foreground/60'
                                            }`}
                                        >
                                            <i
                                                className={`fas ${
                                                    event.isUpcoming
                                                        ? 'fa-calendar-check'
                                                        : 'fa-check-circle'
                                                }`}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold">
                                                {event.isUpcoming
                                                    ? 'ইভেন্টটি আসন্ন'
                                                    : 'ইভেন্টটি সম্পন্ন হয়েছে'}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-foreground/60">
                                                {event.isUpcoming
                                                    ? 'নির্ধারিত তারিখ ও সময়ে ইভেন্টটি অনুষ্ঠিত হবে।'
                                                    : 'ইভেন্টটি ইতোমধ্যে অনুষ্ঠিত হয়েছে।'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    NAVIGATION
                ====================================================== */}
                <section className="border-t border-border bg-card">
                    <div className="container mx-auto px-4 py-8">
                        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 sm:flex-row">
                            <Link
                                href="/events"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                                <i className="fas fa-arrow-left" />
                                সকল ইভেন্ট
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                <i className="fas fa-phone-alt" />
                                যোগাযোগ করুন
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

/* =====================================================
    EVENT INFO
====================================================== */

interface EventInfoProps {
    icon: string;
    label: string;
    value: string;
    color: string;
}

function EventInfo({ icon, label, value, color }: EventInfoProps) {
    return (
        <div className="flex gap-4 p-5">
            <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted ${color}`}
            >
                <i className={icon} />
            </div>

            <div className="min-w-0">
                <p className="text-xs font-medium text-foreground/50">
                    {label}
                </p>

                <p className="mt-1 text-sm leading-6 font-semibold">{value}</p>
            </div>
        </div>
    );
}
