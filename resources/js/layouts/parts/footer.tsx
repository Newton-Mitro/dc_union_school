import { Link } from '@inertiajs/react';
import myLogo from '../../assets/brand/logo.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-border bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-10">
                {/* ============================================================
                    3 COLUMN FOOTER
                ============================================================= */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                    {/* ========================================================
                        COLUMN 1 — SCHOOL / LOGO
                    ======================================================== */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <Link
                            href="/"
                            aria-label="ঢাকা ক্রেডিট ইউনিয়ন স্কুল home"
                            className="inline-flex items-center"
                        >
                            <img
                                src={myLogo}
                                alt="ঢাকা ক্রেডিট ইউনিয়ন স্কুল logo"
                                className="h-20 w-auto object-contain dark:brightness-0 dark:invert"
                            />
                        </Link>

                        <h3 className="mt-3 text-lg font-bold">
                            ঢাকা ক্রেডিট ইউনিয়ন স্কুল
                        </h3>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-card-foreground/80">
                            যুগোপযোগী শিক্ষা আমাদের লক্ষ্য; আত্মনির্ভরশীল দেশ
                            আমাদের স্বপ্ন।
                        </p>

                        {/* Theme Accent */}
                        <div className="mt-4 flex items-center gap-1.5">
                            <span className="h-1.5 w-8 rounded-full bg-primary" />
                            <span className="h-1.5 w-5 rounded-full bg-accent" />
                            <span className="h-1.5 w-5 rounded-full bg-orange-500" />
                            <span className="h-1.5 w-8 rounded-full bg-green-600" />
                        </div>
                    </div>
                    {/* ========================================================
                        COLUMN 2 — IMPORTANT LINKS
                    ======================================================== */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-base font-bold">
                            গুরুত্বপূর্ণ লিংক
                        </h3>

                        <nav aria-label="গুরুত্বপূর্ণ লিংক">
                            <ul className="grid grid-cols-1 justify-items-center gap-3 text-sm sm:grid-cols-2 sm:justify-items-center md:grid-cols-1 md:justify-items-start">
                                {/* শিক্ষা বোর্ডের ফলাফল */}
                                <li>
                                    <a
                                        href="http://www.educationboardresults.gov.bd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center transition-colors hover:text-primary md:justify-start"
                                    >
                                        <i className="fas fa-external-link-alt mr-2 w-4 text-center text-xs text-primary" />
                                        <span>শিক্ষা বোর্ডের ফলাফল</span>
                                    </a>
                                </li>

                                {/* শিক্ষা মন্ত্রণালয় */}
                                <li>
                                    <a
                                        href="http://www.moedu.gov.bd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center transition-colors hover:text-primary md:justify-start"
                                    >
                                        <i className="fas fa-external-link-alt mr-2 w-4 text-center text-xs text-green-600" />
                                        <span>শিক্ষা মন্ত্রণালয়</span>
                                    </a>
                                </li>

                                {/* ঢাকা শিক্ষা বোর্ড */}
                                <li>
                                    <a
                                        href="https://dhakaeducationboard.gov.bd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center transition-colors hover:text-primary md:justify-start"
                                    >
                                        <i className="fas fa-external-link-alt mr-2 w-4 text-center text-xs text-orange-500" />
                                        <span>ঢাকা শিক্ষা বোর্ড</span>
                                    </a>
                                </li>

                                {/* প্রাথমিক শিক্ষা অধিদপ্তর */}
                                <li>
                                    <a
                                        href="http://www.dpe.gov.bd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center transition-colors hover:text-primary md:justify-start"
                                    >
                                        <i className="fas fa-external-link-alt mr-2 w-4 text-center text-xs text-secondary" />
                                        <span>প্রাথমিক শিক্ষা অধিদপ্তর</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* ========================================================
                        COLUMN 3 — CONTACT
                    ======================================================== */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-base font-bold">যোগাযোগ</h3>

                        <div className="flex flex-col gap-4 text-sm text-card-foreground/80">
                            {/* Address */}
                            <div className="flex items-start justify-center gap-3 md:justify-start">
                                <i className="fas fa-map-marker-alt mt-1 w-4 text-center text-orange-500" />

                                <span className="leading-6">
                                    ক-৩০/এ/২ জোয়ার সাহারা,
                                    <br />
                                    ভাটারা, ঢাকা-১২১২
                                </span>
                            </div>

                            {/* Email */}
                            <a
                                href="mailto:dcschoolinfo@cccul.com"
                                className="flex items-center justify-center gap-3 transition-colors hover:text-primary md:justify-start"
                            >
                                <i className="fas fa-envelope w-4 text-center text-primary" />
                                <span>dcschoolinfo@cccul.com</span>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:01309139032"
                                className="flex items-center justify-center gap-3 transition-colors hover:text-green-600 md:justify-start"
                            >
                                <i className="fas fa-phone w-4 text-center text-green-600" />
                                <span>০১৩০৯১৩৯০৩২</span>
                            </a>

                            {/* Social Media */}
                            <div className="mt-1 flex items-center justify-center gap-2 md:justify-start">
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
                    </div>
                </div>

                {/* ============================================================
                    DIVIDER
                ============================================================= */}
                <div className="my-8 h-px w-full bg-border" />

                {/* ============================================================
                    COPYRIGHT
                ============================================================= */}
                <div className="text-center">
                    <p className="text-xs sm:text-sm">
                        © {currentYear} ঢাকা ক্রেডিট ইউনিয়ন স্কুল. সর্বস্বত্ব
                        সংরক্ষিত.
                    </p>

                    {/* Developer */}
                    <p className="mt-2 text-xs text-card-foreground/70">
                        Developed by
                        <a
                            href="https://www.facebook.com/profile.php?id=61592730722204"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary transition hover:underline"
                        >
                            Quantum Labs
                        </a>
                        Team
                    </p>

                    {/* Webmaster */}
                    <div className="mt-3">
                        <Link
                            href="/login"
                            className="text-xs text-card-foreground/70 transition hover:font-semibold hover:text-primary hover:underline"
                        >
                            <i className="fas fa-lock mr-1 text-[10px]" />
                            Webmaster Login
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
