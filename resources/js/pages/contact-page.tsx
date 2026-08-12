import { Head, Link } from '@inertiajs/react';
import { Mail, MapPin, Phone, Clock, Facebook, Youtube } from 'lucide-react';
import PageHeader from '../components/page-header';

export default function Contact() {
    return (
        <>
            <Head title="যোগাযোগ" />

            <main className="bg-background text-foreground">
                <PageHeader
                    breadcrumbs={[
                        {
                            label: 'হোম',
                            href: '/',
                        },
                        {
                            label: 'যোগাযোগ',
                        },
                    ]}
                    categoryIcon="fas fa-phone"
                    category="ঢাকা ক্রেডিট ইউনিয়ন স্কুল"
                    title="যোগাযোগ করুন"
                    subtitle={`আমাদের সম্পর্কে জানতে, ভর্তি সংক্রান্ত তথ্য পেতে অথবা যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।`}
                />

                {/* =====================================================
                    CONTACT INFORMATION
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                        {/* Address */}
                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>

                            <h2 className="mt-4 text-lg font-bold">
                                আমাদের ঠিকানা
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-foreground/70">
                                ক-৩০/এ/২ জোয়ার সাহারা,
                                <br />
                                ভাটারা, ঢাকা-১২১২
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                                <Phone className="h-6 w-6" />
                            </div>

                            <h2 className="mt-4 text-lg font-bold">
                                ফোন নম্বর
                            </h2>

                            <a
                                href="tel:01309139032"
                                className="mt-3 inline-block text-sm text-foreground/70 transition hover:text-primary hover:underline"
                            >
                                ০১৩০৯১৩৯০৩২
                            </a>
                        </div>

                        {/* Email */}
                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
                                <Mail className="h-6 w-6" />
                            </div>

                            <h2 className="mt-4 text-lg font-bold">ই-মেইল</h2>

                            <a
                                href="mailto:dcschoolinfo@cccul.com"
                                className="mt-3 inline-block text-sm break-all text-foreground/70 transition hover:text-primary hover:underline"
                            >
                                dcschoolinfo@cccul.com
                            </a>
                        </div>

                        {/* Complaint Resolution */}
                        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                                <Phone className="h-6 w-6" />
                            </div>

                            <h2 className="mt-4 text-lg font-bold">
                                অভিযোগ নিষ্পত্তি
                            </h2>

                            <div className="mt-3 space-y-2 text-sm text-foreground/70">
                                <a
                                    href="tel:01309139032"
                                    className="block transition hover:text-primary hover:underline"
                                >
                                    ফোন: ০১৩০৯১৩৯০৩২
                                </a>

                                <a
                                    href="mailto:dcschoolinfo@cccul.com"
                                    className="block break-all transition hover:text-primary hover:underline"
                                >
                                    ই-মেইল: dcschoolinfo@cccul.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONTACT + MAP
                ====================================================== */}
                <section className="border-y border-border bg-card">
                    <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2">
                        {/* Contact Details */}
                        <div>
                            <span className="text-sm font-semibold text-primary">
                                যোগাযোগের তথ্য
                            </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                আমাদের সাথে যোগাযোগ করুন
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70 sm:text-base">
                                আপনার যেকোনো প্রশ্ন, পরামর্শ বা প্রয়োজনীয় তথ্যের
                                জন্য আমাদের সাথে যোগাযোগ করতে পারেন। আমরা আপনাকে
                                প্রয়োজনীয় তথ্য দিতে সর্বদা প্রস্তুত।
                            </p>

                            <div className="mt-8 space-y-5">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            ঠিকানা
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-foreground/70">
                                            ক-৩০/এ/২ জোয়ার সাহারা,
                                            <br />
                                            ভাটারা, ঢাকা-১২১২
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                                        <Phone className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">ফোন</h3>

                                        <a
                                            href="tel:01309139032"
                                            className="mt-1 block text-sm text-foreground/70 transition hover:text-primary"
                                        >
                                            ০১৩০৯১৩৯০৩২
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                                        <Mail className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="font-semibold">
                                            ই-মেইল
                                        </h3>

                                        <a
                                            href="mailto:dcschoolinfo@cccul.com"
                                            className="mt-1 block text-sm break-all text-foreground/70 transition hover:text-primary"
                                        >
                                            dcschoolinfo@cccul.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                        <Clock className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            অফিস সময়
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-foreground/70">
                                            রবি - বৃহস্পতি
                                            <br />
                                            সকাল ৯:০০টা - বিকাল ৪:০০টা
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="mt-8">
                                <h3 className="text-sm font-semibold">
                                    সামাজিক যোগাযোগ
                                </h3>

                                <div className="mt-3 flex items-center gap-2">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100063611891381"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:-translate-y-0.5 hover:opacity-80"
                                    >
                                        <Facebook className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@dctvbd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:-translate-y-0.5 hover:opacity-80"
                                    >
                                        <Youtube className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="min-h-[350px] overflow-hidden rounded-2xl border border-border bg-background shadow-sm sm:min-h-[450px]">
                            <iframe
                                title="ঢাকা ক্রেডিট ইউনিয়ন স্কুলের অবস্থান"
                                src="https://www.google.com/maps?q=ভাটারা, ঢাকা, বাংলাদেশ&output=embed"
                                className="h-full min-h-[350px] w-full border-0 sm:min-h-[450px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    QUICK LINKS
                ====================================================== */}
                <section className="container mx-auto px-4 py-12 sm:py-16">
                    <div className="rounded-2xl bg-primary/5 p-6 text-center sm:p-10">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            প্রয়োজনীয় তথ্য খুঁজছেন?
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/70">
                            ভর্তি, একাডেমিক কার্যক্রম এবং আমাদের প্রতিষ্ঠান
                            সম্পর্কে বিস্তারিত তথ্য নিচের লিংকগুলো থেকে দেখতে
                            পারেন।
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/admission-info"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                ভর্তি তথ্য
                            </Link>

                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-primary/10 hover:text-primary"
                            >
                                আমাদের সম্পর্কে
                            </Link>

                            <Link
                                href="/notices"
                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-primary/10 hover:text-primary"
                            >
                                বিজ্ঞপ্তি
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
