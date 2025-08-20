import { LandingLayout } from '@/layouts/landing-layout';
import { HeroSection } from '@/pages/landing/partials/welcome/hero';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function WelcomeIndex() {
    return (
        <>
            <Head title="">
                <meta name="description" content="E-Lapor Kabupaten Donggala" />
            </Head>
            <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-white to-aprimary">
                <HeroSection />
            </div>
            <section className="bg-slate-50 py-16 sm:py-20" id="why_section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-extrabold sm:text-4xl">Apa yang Bisa Dilaporkan?</h2>
                            <p className="mt-3 text-slate-600">
                                Semua kejadian yang merugikan masyarakat dapat Anda laporkan: pelayanan publik, lingkungan, keamanan, hingga keluhan
                                sehari-hari.
                            </p>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Pelayanan Publik</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Keamanan & Ketertiban</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Lingkungan</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Infrastruktur</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Sosial & Kesehatan</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Pungutan Liar</span>
                                <span className="rounded-full border bg-white px-4 py-2 text-sm">Lainnya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

WelcomeIndex.layout = (page: ReactNode) => <LandingLayout children={page} />;
