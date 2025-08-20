import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AppLogoIcon } from '@/components/app-logo-icon';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function HeroSection() {
    return (
        <section className="relative mx-auto w-full max-w-7xl lg:p-8 xl:px-10 xl:py-6 2xl:px-0">
            <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <AppLogoIcon className="fill-slate-900 xl:-mt-16 xl:w-4/5 2xl:w-full" exclamationMarkColor="#FF0000" />
                    <p className="-mt-4 max-w-2xl text-xl leading-[35px] tracking-[0.5px] text-slate-950">
                        Setiap laporan Anda adalah langkah penting untuk menciptakan lingkungan yang lebih aman, adil, dan nyaman bagi semua. Jangan
                        ragu untuk bersuara, karena suara Anda adalah kekuatan untuk perubahan.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button
                            asChild
                            className="h-12 rounded-xl text-base font-medium tracking-wider transition-all duration-300 xl:h-16 xl:text-lg"
                            variant="gradient"
                            size="lg"
                        >
                            <Link href="#">Yuk Lapor!</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="none"
                            className="h-12 rounded-xl border border-asecondary bg-transparent text-base font-medium tracking-wider text-asecondary transition duration-150 hover:border-aprimary hover:text-aprimary xl:h-16 xl:text-lg"
                        >
                            Cek Laporan
                        </Button>
                    </div>

                    <p className="mt-4 text-sm text-slate-700 2xl:text-base">
                        Identitas pelapor dijaga. Setiap laporan diproses sesuai prosedur yang berlaku.
                    </p>
                </div>
                <div className="lg:col-span-5">
                    <ImageSlider />
                </div>
            </div>
        </section>
    );
}

export function ImageSlider() {
    const IMG_LIST: { id: string; src: string; alt: string }[] = [
        // {
        //     id: 'Sw-001',
        //     src: 'donggala-512x.png',
        //     alt: 'Logo Pemerintah Kabupaten Donggala',
        // },
        {
            id: 'Sw-002',
            src: 'bupati.png?v=1',
            alt: 'Foto Bupati Donggala',
        },
        {
            id: 'Sw-003',
            src: 'wakil-bupati.png?v=1',
            alt: 'Foto Wakil Bupati Donggala',
        },
    ];
    return (
        <div className="mx-auto h-full w-full">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="overflow-hidden rounded-2xl select-none"
            >
                {IMG_LIST.map((img) => (
                    <SwiperSlide key={img.id}>
                        <img src={`/assets/img/${img.src}`} alt={img.alt} loading="lazy" className="h-auto w-full object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
