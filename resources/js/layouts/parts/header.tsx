import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

import myLogo from '../../assets/brand/logo.png';
import XIcon from '../../assets/svg/x_twitter.png';

interface HeaderProps {
    scrollFromTop?: boolean;
}

function Header({ scrollFromTop = false }: HeaderProps) {
    const { url } = usePage<any>();

    const decodedURL = decodeURIComponent(url);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    const isActive = (value: string) => {
        return decodedURL.includes(value);
    };

    const navLinkClass = (active: boolean = false) =>
        `flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-primary ${
            active ? 'font-semibold text-primary' : 'text-foreground'
        }`;

    const iconClass = 'text-[13px]';

    const dropdownItemClass =
        'flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap text-foreground transition-colors hover:bg-primary/10 hover:text-primary';

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
    };

    const toggleMobileDropdown = (menu: string) => {
        setMobileDropdown((current) => (current === menu ? null : menu));
    };

    return (
        <div>
            {/* =====================================================
                TOP HEADER
            ===================================================== */}
            <header className="w-full bg-background">
                <div className="container mx-auto px-4">
                    {/* =================================================
                        CONTACT + SOCIAL
                    ================================================= */}
                    <div className="hidden flex-col items-center justify-between gap-3 py-2 text-sm md:flex md:flex-row">
                        {/* Contact */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                            <span className="font-medium text-primary">
                                Contact:
                            </span>

                            <a
                                href="mailto:dcschoolinfo@cccul.com"
                                className="inline-flex items-center gap-1.5 text-foreground/80 transition hover:text-primary hover:underline"
                            >
                                <Mail className="h-4 w-4 text-primary" />

                                <span>dcschoolinfo@cccul.com</span>
                            </a>

                            <a
                                href="tel:01309139032"
                                className="inline-flex items-center gap-1.5 text-foreground/80 transition hover:text-primary hover:underline"
                            >
                                <Phone className="h-4 w-4 text-primary" />

                                <span>০১৩০৯১৩৯০৩২</span>
                            </a>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063611891381"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-80"
                            >
                                <i className="fab fa-facebook-f text-sm" />
                            </a>

                            <a
                                href="https://x.com/dcnewsbd"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition hover:-translate-y-0.5 hover:opacity-80"
                            >
                                <i className="fab fa-x-twitter text-sm" />
                            </a>

                            <a
                                href="https://www.youtube.com/@dctvbd"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition hover:-translate-y-0.5 hover:opacity-80"
                            >
                                <i className="fab fa-youtube text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* =================================================
                        MAIN LOGO
                    ================================================= */}
                    <div className="flex items-center justify-center gap-2 py-3 text-foreground/85">
                        <div className="font-bangla-heading text-2xl font-extrabold lg:text-4xl">
                            ঢাকা ক্রেডিট
                        </div>
                        <Link href="/" onClick={closeMobileMenu}>
                            <img
                                className="h-16 w-auto object-contain sm:h-20 md:h-28 dark:invert"
                                src={myLogo}
                                alt="ঢাকা ক্রেডিট ইউনিয়ন স্কুল"
                            />
                        </Link>
                        <div className="font-bangla-heading text-2xl font-extrabold lg:text-4xl">
                            ইউনিয়ন স্কুল
                        </div>
                    </div>
                </div>
            </header>

            {/* =====================================================
                NAVIGATION
            ===================================================== */}
            <nav
                className={`left-0 z-50 w-full border-y border-dashed border-border bg-card shadow-sm transition-all duration-200 ${
                    scrollFromTop ? 'fixed top-0' : 'relative'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex min-h-14 items-center">
                        <div className="flex w-full items-center gap-3">
                            {/* =================================================
                                MOBILE HEADER
                            ================================================= */}
                            <div className="flex h-14 w-full items-center justify-between md:hidden">
                                {/* Mobile Logo */}
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className="flex min-w-0 items-center"
                                >
                                    <img
                                        src={myLogo}
                                        alt="ঢাকা ক্রেডিট ইউনিয়ন স্কুল"
                                        className="h-10 w-auto max-w-[180px] object-contain dark:invert"
                                    />
                                </Link>

                                {/* Hamburger */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setMobileMenuOpen(!mobileMenuOpen)
                                    }
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-primary/10 hover:text-primary"
                                    aria-label={
                                        mobileMenuOpen
                                            ? 'মেনু বন্ধ করুন'
                                            : 'মেনু খুলুন'
                                    }
                                    aria-expanded={mobileMenuOpen}
                                >
                                    {mobileMenuOpen ? (
                                        <X className="h-5 w-5" />
                                    ) : (
                                        <Menu className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {/* =================================================
                                DESKTOP NAVIGATION
                            ================================================= */}
                            <ul
                                className={`hidden h-14 flex-1 items-center gap-3 md:flex lg:gap-4 xl:gap-5 ${
                                    scrollFromTop
                                        ? 'justify-end'
                                        : 'justify-center'
                                }`}
                            >
                                {/* HOME */}
                                <li>
                                    <Link
                                        href="/"
                                        className={navLinkClass(
                                            decodedURL === '/' ||
                                                isActive('home'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-home ${iconClass}`}
                                        />

                                        <span>হোম</span>
                                    </Link>
                                </li>

                                {/* =================================================
                                    ABOUT
                                ================================================= */}
                                <li className="group relative flex h-full items-center">
                                    <button
                                        type="button"
                                        className={navLinkClass(
                                            isActive('about') ||
                                                isActive('history') ||
                                                isActive('gallery'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-info-circle ${iconClass}`}
                                        />

                                        <span>আমাদের সম্পর্কে</span>

                                        <ChevronDown className="ml-0.5 h-3 w-3" />
                                    </button>

                                    <div className="absolute top-full left-0 z-50 hidden min-w-56 overflow-hidden rounded-xl border border-dashed border-border bg-card shadow-lg group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/history"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-history w-4 text-center text-xs text-primary" />
                                                    <span>ইতিহাস</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/gallery"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-images w-4 text-center text-xs text-primary" />

                                                    <span>
                                                        স্টুডেন্টস্ গ্যালারি
                                                    </span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/institution-teaching-permission"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-images w-4 text-center text-xs text-primary" />

                                                    <span>
                                                        প্রতিষ্টানের পাঠদানের
                                                        অনুমতি
                                                    </span>
                                                </Link>
                                            </li>

                                            <li></li>
                                        </ul>
                                    </div>
                                </li>

                                {/* =================================================
                                    FACILITIES
                                ================================================= */}
                                <li className="group relative flex h-full items-center">
                                    <button
                                        type="button"
                                        className={navLinkClass(
                                            isActive('science-lab') ||
                                                isActive('computer-lab') ||
                                                isActive('library') ||
                                                isActive('clubs') ||
                                                isActive('cctv') ||
                                                isActive('multimedia') ||
                                                isActive('counseling') ||
                                                isActive('study-tour') ||
                                                isActive('indoor-games'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-building ${iconClass}`}
                                        />

                                        <span>সুবিধাসমূহ</span>

                                        <ChevronDown className="ml-0.5 h-3 w-3" />
                                    </button>

                                    <div className="absolute top-full left-0 z-50 hidden min-w-56 overflow-hidden rounded-xl border border-dashed border-border bg-card shadow-lg group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/science-lab"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-flask w-4 text-center text-xs text-green-600" />
                                                    <span>বিজ্ঞানাগার</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/computer-lab"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-desktop w-4 text-center text-xs text-primary" />
                                                    <span>কম্পিউটার ল্যাব</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/library"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-book w-4 text-center text-xs text-orange-500" />
                                                    <span>লাইব্রেরি</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/clubs"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-users w-4 text-center text-xs text-primary" />
                                                    <span>ক্লাব</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/cctv"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-video w-4 text-center text-xs text-orange-500" />
                                                    <span>সিসিটিভি</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/multimedia"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-photo-video w-4 text-center text-xs text-primary" />
                                                    <span>মাল্টিমিডিয়া</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/counseling"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-comments w-4 text-center text-xs text-green-600" />
                                                    <span>কাউন্সেলিং</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/study-tour"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-bus w-4 text-center text-xs text-orange-500" />
                                                    <span>শিক্ষা সফর</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/indoor-games"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-gamepad w-4 text-center text-xs text-green-600" />
                                                    <span>ইনডোর গেম</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/* =================================================
                                    ADMISSION
                                ================================================= */}
                                <li className="group relative flex h-full items-center">
                                    <button
                                        type="button"
                                        className={navLinkClass(
                                            isActive('admission-info') ||
                                                isActive('admission-forms') ||
                                                isActive('admission-results'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-user-plus ${iconClass}`}
                                        />

                                        <span>ভর্তি সম্পর্কিত</span>

                                        <ChevronDown className="ml-0.5 h-3 w-3" />
                                    </button>

                                    <div className="absolute top-full left-0 z-50 hidden min-w-56 overflow-hidden rounded-xl border border-dashed border-border bg-card shadow-lg group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/admission-info"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-info-circle w-4 text-center text-xs text-primary" />
                                                    <span>ভর্তি তথ্য</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/admission-forms"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-file-alt w-4 text-center text-xs text-orange-500" />
                                                    <span>ভর্তি ফর্ম</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/admission-results"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-poll w-4 text-center text-xs text-green-600" />
                                                    <span>ভর্তির ফলাফল</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/* =================================================
                                    ACADEMIC
                                ================================================= */}
                                <li className="group relative flex h-full items-center">
                                    <button
                                        type="button"
                                        className={navLinkClass(
                                            isActive('book-list') ||
                                                isActive(
                                                    'examination-schedule',
                                                ) ||
                                                isActive('syllabus') ||
                                                isActive('class-routine') ||
                                                isActive(
                                                    'class-test-routine',
                                                ) ||
                                                isActive('notices') ||
                                                isActive('events'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-graduation-cap ${iconClass}`}
                                        />

                                        <span>একাডেমিক</span>

                                        <ChevronDown className="ml-0.5 h-3 w-3" />
                                    </button>

                                    <div className="absolute top-full left-0 z-50 hidden min-w-56 overflow-hidden rounded-xl border border-dashed border-border bg-card shadow-lg group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/book-list"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-book w-4 text-center text-xs text-orange-500" />

                                                    <span>বই এর তালিকা</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/examination-schedule"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-calendar-alt w-4 text-center text-xs text-primary" />

                                                    <span>
                                                        পরীক্ষার সময়সূচী
                                                    </span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/syllabus"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-book-open w-4 text-center text-xs text-green-600" />

                                                    <span>পাঠ্যসূচি</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/class-routine"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-calendar-check w-4 text-center text-xs text-primary" />

                                                    <span>ক্লাস রুটিন</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/class-test-routine"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-clipboard-list w-4 text-center text-xs text-orange-500" />

                                                    <span>
                                                        ক্লাস টেস্ট রুটিন
                                                    </span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/notices"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-bell w-4 text-center text-xs text-yellow-500" />

                                                    <span>বিজ্ঞপ্তি</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/events"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-calendar-alt w-4 text-center text-xs text-primary" />
                                                    <span>ইভেন্টস</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/students"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-user-graduate w-4 text-center text-xs text-green-600" />
                                                    <span>শিক্ষার্থী</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/* =================================================
                                    OFFICIAL
                                ================================================= */}
                                <li className="group relative flex h-full items-center">
                                    <button
                                        type="button"
                                        className={navLinkClass(
                                            isActive('governing-body') ||
                                                isActive('teachers') ||
                                                isActive('staffs'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-landmark ${iconClass}`}
                                        />

                                        <span>অফিসিয়াল</span>

                                        <ChevronDown className="ml-0.5 h-3 w-3" />
                                    </button>

                                    <div className="absolute top-full left-0 z-50 hidden min-w-56 overflow-hidden rounded-xl border border-dashed border-border bg-card shadow-lg group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/governing-body"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-users-cog w-4 text-center text-xs text-primary" />

                                                    <span>ম্যানেজিং কমিটি</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/teachers"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-chalkboard-teacher w-4 text-center text-xs text-green-600" />

                                                    <span>শিক্ষকমন্ডলী</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/staffs"
                                                    className={
                                                        dropdownItemClass
                                                    }
                                                >
                                                    <i className="fas fa-user-tie w-4 text-center text-xs text-orange-500" />

                                                    <span>
                                                        অন্যান্য কর্মীবৃন্দ
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/* CONTACT */}
                                <li>
                                    <Link
                                        href="/contact"
                                        className={navLinkClass(
                                            isActive('contact'),
                                        )}
                                    >
                                        <i
                                            className={`fas fa-phone-alt ${iconClass}`}
                                        />

                                        <span>যোগাযোগ</span>
                                    </Link>
                                </li>
                            </ul>

                            {/* =================================================
                                STICKY DESKTOP LOGO
                            ================================================= */}
                            {scrollFromTop && (
                                <div className="hidden shrink-0 md:block">
                                    <Link href="/">
                                        <img
                                            className="h-12 w-auto object-contain dark:invert"
                                            src={myLogo}
                                            alt="ঢাকা ক্রেডিট ইউনিয়ন স্কুল"
                                        />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* =====================================================
                        MOBILE MENU
                    ===================================================== */}
                    {mobileMenuOpen && (
                        <div className="border-t border-dashed border-border py-2 md:hidden">
                            <div className="max-h-[calc(100vh-120px)] overflow-y-auto pb-3">
                                {/* HOME */}
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                                        decodedURL === '/'
                                            ? 'font-semibold text-primary'
                                            : 'text-foreground'
                                    }`}
                                >
                                    <i className="fas fa-home w-5 text-center text-primary" />

                                    <span>হোম</span>
                                </Link>

                                {/* =================================================
                                    MOBILE ABOUT
                                ================================================= */}
                                <div className="border-b border-border/50">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileDropdown('about')
                                        }
                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                                            isActive('history') ||
                                            isActive('vision') ||
                                            isActive('moto') ||
                                            isActive('gallery')
                                                ? 'font-semibold text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <i className="fas fa-info-circle w-5 text-center text-primary" />

                                            <span>আমাদের সম্পর্কে</span>
                                        </span>

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${
                                                mobileDropdown === 'about'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {mobileDropdown === 'about' && (
                                        <div className="mb-2 ml-4 rounded-lg bg-primary/5 py-1">
                                            <Link
                                                href="/history"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:text-primary"
                                            >
                                                <i className="fas fa-history w-5 text-center text-primary" />
                                                <span>ইতিহাস</span>
                                            </Link>

                                            <Link
                                                href="/vision"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:text-primary"
                                            >
                                                <i className="fas fa-bullseye w-5 text-center text-primary" />

                                                <span>লক্ষ্য এবং উদ্দেশ্য</span>
                                            </Link>

                                            <Link
                                                href="/moto"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:text-primary"
                                            >
                                                <i className="fas fa-heart w-5 text-center text-primary" />

                                                <span>মূল্যবোধ</span>
                                            </Link>

                                            <Link
                                                href="/gallery"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:text-primary"
                                            >
                                                <i className="fas fa-images w-5 text-center text-primary" />

                                                <span>
                                                    স্টুডেন্টস্ গ্যালারি
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* =================================================
                                    MOBILE FACILITIES
                                ================================================= */}
                                <div className="border-b border-border/50">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileDropdown('facilities')
                                        }
                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                                            isActive('science-lab') ||
                                            isActive('computer-lab') ||
                                            isActive('library') ||
                                            isActive('clubs') ||
                                            isActive('cctv') ||
                                            isActive('multimedia') ||
                                            isActive('counseling') ||
                                            isActive('study-tour') ||
                                            isActive('indoor-games')
                                                ? 'font-semibold text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <i className="fas fa-building w-5 text-center text-primary" />

                                            <span>সুবিধাসমূহ</span>
                                        </span>

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${
                                                mobileDropdown === 'facilities'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {mobileDropdown === 'facilities' && (
                                        <div className="mb-2 ml-4 rounded-lg bg-primary/5 py-1">
                                            <Link
                                                href="/science-lab"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-flask w-5 text-center text-green-600" />
                                                <span>বিজ্ঞানাগার</span>
                                            </Link>

                                            <Link
                                                href="/computer-lab"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-desktop w-5 text-center text-primary" />
                                                <span>কম্পিউটার ল্যাব</span>
                                            </Link>

                                            <Link
                                                href="/library"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-book w-5 text-center text-orange-500" />
                                                <span>লাইব্রেরি</span>
                                            </Link>

                                            <Link
                                                href="/clubs"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-users w-5 text-center text-primary" />
                                                <span>ক্লাব</span>
                                            </Link>

                                            <Link
                                                href="/cctv"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-video w-5 text-center text-orange-500" />
                                                <span>সিসিটিভি</span>
                                            </Link>

                                            <Link
                                                href="/multimedia"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-photo-video w-5 text-center text-primary" />
                                                <span>মাল্টিমিডিয়া</span>
                                            </Link>

                                            <Link
                                                href="/counseling"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-comments w-5 text-center text-green-600" />
                                                <span>কাউন্সেলিং</span>
                                            </Link>

                                            <Link
                                                href="/study-tour"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-bus w-5 text-center text-orange-500" />
                                                <span>শিক্ষা সফর</span>
                                            </Link>

                                            <Link
                                                href="/indoor-games"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-gamepad w-5 text-center text-green-600" />
                                                <span>ইনডোর গেম</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* =================================================
                                    MOBILE ADMISSION
                                ================================================= */}
                                <div className="border-b border-border/50">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileDropdown('admission')
                                        }
                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary ${
                                            isActive('admission-info') ||
                                            isActive('admission-forms') ||
                                            isActive('admission-results')
                                                ? 'font-semibold text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <i className="fas fa-user-plus w-5 text-center text-primary" />

                                            <span>ভর্তি সম্পর্কিত</span>
                                        </span>

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                mobileDropdown === 'admission'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {mobileDropdown === 'admission' && (
                                        <div className="mb-2 ml-4 rounded-lg bg-primary/5 py-1">
                                            <Link
                                                href="/admission-info"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-info-circle w-5 text-center text-primary" />
                                                <span>ভর্তি তথ্য</span>
                                            </Link>

                                            <Link
                                                href="/admission-forms"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-file-alt w-5 text-center text-orange-500" />
                                                <span>ভর্তি ফর্ম</span>
                                            </Link>

                                            <Link
                                                href="/admission-results"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-poll w-5 text-center text-green-600" />
                                                <span>ভর্তির ফলাফল</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* =================================================
                                    MOBILE ACADEMIC
                                ================================================= */}
                                <div className="border-b border-border/50">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileDropdown('academic')
                                        }
                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary ${
                                            isActive('book-list') ||
                                            isActive('examination-schedule') ||
                                            isActive('syllabus') ||
                                            isActive('class-routine') ||
                                            isActive('class-test-routine') ||
                                            isActive('notices') ||
                                            isActive('events')
                                                ? 'font-semibold text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <i className="fas fa-graduation-cap w-5 text-center text-primary" />

                                            <span>একাডেমিক</span>
                                        </span>

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                mobileDropdown === 'academic'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {mobileDropdown === 'academic' && (
                                        <div className="mb-2 ml-4 rounded-lg bg-primary/5 py-1">
                                            <Link
                                                href="/book-list"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-book w-5 text-center text-orange-500" />
                                                <span>বই এর তালিকা</span>
                                            </Link>

                                            <Link
                                                href="/examination-schedule"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-calendar-alt w-5 text-center text-primary" />
                                                <span>পরীক্ষার সময়সূচী</span>
                                            </Link>

                                            <Link
                                                href="/syllabus"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-book-open w-5 text-center text-green-600" />
                                                <span>পাঠ্যসূচি</span>
                                            </Link>

                                            <Link
                                                href="/class-routine"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-calendar-check w-5 text-center text-primary" />
                                                <span>ক্লাস রুটিন</span>
                                            </Link>

                                            <Link
                                                href="/class-test-routine"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-clipboard-list w-5 text-center text-orange-500" />
                                                <span>ক্লাস টেস্ট রুটিন</span>
                                            </Link>

                                            <Link
                                                href="/notices"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-bell w-5 text-center text-yellow-500" />
                                                <span>বিজ্ঞপ্তি</span>
                                            </Link>

                                            <Link
                                                href="/events"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-bell w-5 text-center text-yellow-500" />
                                                <span>ইভেন্টস</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* =================================================
                                    MOBILE OFFICIAL
                                ================================================= */}
                                <div className="border-b border-border/50">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileDropdown('official')
                                        }
                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary ${
                                            isActive('governing-body') ||
                                            isActive('teachers') ||
                                            isActive('staffs')
                                                ? 'font-semibold text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <i className="fas fa-landmark w-5 text-center text-primary" />

                                            <span>অফিসিয়াল</span>
                                        </span>

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                mobileDropdown === 'official'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {mobileDropdown === 'official' && (
                                        <div className="mb-2 ml-4 rounded-lg bg-primary/5 py-1">
                                            <Link
                                                href="/governing-body"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-users-cog w-5 text-center text-primary" />

                                                <span>ম্যানেজিং কমিটি</span>
                                            </Link>

                                            <Link
                                                href="/teachers"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-chalkboard-teacher w-5 text-center text-green-600" />

                                                <span>শিক্ষকমন্ডলী</span>
                                            </Link>

                                            <Link
                                                href="/staffs"
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary"
                                            >
                                                <i className="fas fa-user-tie w-5 text-center text-orange-500" />

                                                <span>অন্যান্য কর্মীবৃন্দ</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* =================================================
                                    MOBILE CONTACT
                                ================================================= */}
                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary ${
                                        isActive('contact')
                                            ? 'font-semibold text-primary'
                                            : 'text-foreground'
                                    }`}
                                >
                                    <i className="fas fa-phone-alt w-5 text-center text-green-600" />

                                    <span>যোগাযোগ</span>
                                </Link>

                                {/* =================================================
                                    MOBILE CONTACT INFO
                                ================================================= */}
                                <div className="mt-3 border-t border-dashed border-border px-4 pt-4">
                                    <div className="flex flex-col gap-3 text-xs text-foreground/70">
                                        <a
                                            href="mailto:dcschoolinfo@cccul.com"
                                            className="flex items-center gap-2 hover:text-primary"
                                        >
                                            <Mail className="h-4 w-4 text-primary" />

                                            <span>dcschoolinfo@cccul.com</span>
                                        </a>

                                        <a
                                            href="tel:01309139032"
                                            className="flex items-center gap-2 hover:text-primary"
                                        >
                                            <Phone className="h-4 w-4 text-primary" />

                                            <span>০১৩০৯১৩৯০৩২</span>
                                        </a>

                                        {/* Social */}
                                        <div className="mt-1 flex items-center gap-2">
                                            <a
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-80"
                                                href="https://www.facebook.com/profile.php?id=100063611891381"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>

                                            <a
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-80"
                                                href="https://x.com/dcnewsbd"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="X"
                                            >
                                                <img
                                                    src={XIcon}
                                                    alt=""
                                                    className="w-3.5 invert"
                                                />
                                            </a>

                                            <a
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:opacity-80"
                                                href="https://www.youtube.com/@dctvbd"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="YouTube"
                                            >
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Header;
