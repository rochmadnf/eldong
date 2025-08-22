import { Metadata } from '@/components/metadata';
import { LandingLayout } from '@/layouts/landing-layout';
import { ReactNode } from 'react';
import { HeroSection } from './partials/welcome/hero';

export default function WelcomeIndex() {
    return (
        <>
            <Metadata
                title="Selamat Datang"
                description="E-Lapor Bupati! adalah platform layanan digital untuk menyampaikan keluhan maupun aspirasi kepada Pemerintah Daerah Kabupaten Donggala dengan akses mudah, cepat dan aman."
            ></Metadata>
            <HeroSection />
        </>
    );
}

WelcomeIndex.layout = (page: ReactNode) => <LandingLayout children={page} />;
