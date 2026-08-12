<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'home-page')->name('home');
Route::get('/contact', function () {
    return Inertia::render('contact-page');
})->name('contact');

Route::get('/about', function () {
    return Inertia::render('about-page');
})->name('about');

Route::get('/science-lab', function () {
    return Inertia::render('science-lab-page');
})->name('science-lab');

Route::get('/computer-lab', function () {
    return Inertia::render('computer-lab-page');
})->name('computer-lab');

Route::get('/clubs', function () {
    return Inertia::render('clubs-page');
})->name('clubs');

Route::get('/library', function () {
    return Inertia::render('library-page');
})->name('library');

Route::get('/cctv', function () {
    return Inertia::render('cctv-page');
})->name('cctv');

Route::get('/multimedia', function () {
    return Inertia::render('multimedia-page');
})->name('multimedia');

Route::get('/counseling', function () {
    return Inertia::render('counseling-page');
})->name('counseling');

Route::get('/study-tour', function () {
    return Inertia::render('study-tour-page');
})->name('study-tour');

Route::get('/indoor-games', function () {
    return Inertia::render('indoor-games-page');
})->name('indoor-games');

Route::get('/admission-info', function () {
    return Inertia::render('admission-info-page');
})->name('admission-info');

Route::get('/governing-body', function () {
    return Inertia::render('governing-body-page');
})->name('governing-body');

Route::get('/teachers', function () {
    return Inertia::render('teachers-page');
})->name('teachers');

Route::get('/students', function () {
    return Inertia::render('students-page');
})->name('students');

Route::get('/staffs', function () {
    return Inertia::render('staffs-page');
})->name('staffs');

Route::get('/book-list', function () {
    return Inertia::render('book-list-page');
})->name('book-list');

Route::get('/examination-schedule', function () {
    return Inertia::render('examination-schedule-page');
})->name('examination-schedule');

Route::get('/class-routine', function () {
    return Inertia::render('class-routine-page');
})->name('class-routine');

Route::get('/notices', function () {
    return Inertia::render('notices-page');
})->name('notices');

Route::get('/notices/{id}', function ($id) {
    $notice = [
        'id' => (int) $id,
        'title' => 'বার্ষিক পরীক্ষার সময়সূচী প্রকাশ',
        'date' => '১০ আগস্ট ২০২৬',
        'category' => 'পরীক্ষা',
        'description' => 'ঢাকা ক্রেডিট ইউনিয়ন স্কুলের বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা হয়েছে। সকল শিক্ষার্থীকে নির্ধারিত সময়সূচী অনুযায়ী পরীক্ষায় অংশগ্রহণের জন্য নির্দেশ দেওয়া হলো।',
        'isNew' => true,
        'file' => 'file'
    ];

    return Inertia::render('single-notice-page', [
        'notice' => $notice,
    ]);
})->name('single-notice');

Route::get('/events', function () {
    return Inertia::render('events-page');
})->name('events');

Route::get('/events/{id}', function ($id) {
    $event = [
        'id' => (int) $id,
        'title' => 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান',
        'date' => '২০ আগস্ট ২০২৬',
        'time' => 'সকাল ৯:০০টা',
        'location' => 'ঢাকা ক্রেডিট ইউনিয়ন স্কুল প্রাঙ্গণ',
        'category' => 'সাংস্কৃতিক অনুষ্ঠান',
        'description' => 'ঢাকা ক্রেডিট ইউনিয়ন স্কুলের বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়েছে। সকল শিক্ষার্থী, শিক্ষক ও অভিভাবকদের অনুষ্ঠানে অংশগ্রহণের জন্য আন্তরিকভাবে আমন্ত্রণ জানানো হলো।',
        'isUpcoming' => true,
    ];

    return Inertia::render('single-event-page', [
        'event' => $event,
    ]);
})->name('single-event');

Route::get('/gallery', function () {
    return Inertia::render('gallery-page');
})->name('gallery');

Route::get('/history', function () {
    return Inertia::render('history-page');
})->name('history');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
