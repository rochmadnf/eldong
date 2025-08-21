import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-aprimary/50 to-aprimary/90 px-4">
            <h1 className="text-4xl leading-11 font-bold tracking-tight text-slate-950">Lapor setiap kejadian dengan mudah, cepat dan aman.</h1>
            <h3 className="mt-5 text-sm/6 font-medium text-slate-800">
                <strong>E-Lapor Bupati!</strong> adalah platform layanan digital yang diperuntukkan bagi masyarakat CGA untuk menyampaikan keluhan
                maupun aspirasi secara langsung kepada pimpinan dengan akses yang mudah, cepat, dan aman melalui situs web atau aplikasi{' '}
                <em>mobile</em>.
            </h3>

            <div className="z-1 mt-8 grid w-full grid-cols-1 gap-y-4 md:grid-cols-3">
                <Button className="col-span-1 font-bold tracking-wide md:col-span-2" variant="pink" size="xl">
                    Yuk Lapor!
                </Button>
                <Button className="col-span-1" variant="secondary" size="xl">
                    Cek Laporan
                </Button>
            </div>

            <InteractiveGridPattern
                className={cn('[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]', 'inset-x-0 h-[120%] skew-y-12')}
                squaresClassName="stroke-red-900/20 hover:fill-red-900/30"
            />
        </div>
    );
}
