import { LandingLayout } from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import { HeroSection } from './partials/welcome/hero';

export default function WelcomeIndex() {
    return (
        <>
            <Head title="Selamat Datang">
                <meta
                    name="description"
                    content="E-Lapor Bupati! adalah platform layanan digital untuk menyampaikan keluhan maupun aspirasi kepada Pemerintah Daerah Kabupaten Donggala dengan akses mudah, cepat dan aman."
                />
            </Head>
            <HeroSection />
        </>
    );
}

WelcomeIndex.layout = (page: ReactNode) => <LandingLayout children={page} />;
