import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

interface MetadataProps {
    title?: string;
    description?: string;
    imgSrc?: string;
    children?: ReactNode;
}

export function Metadata({ title, description, imgSrc = '/assets/img/donggala-512x.png', children }: MetadataProps) {
    const { app } = usePage<{ app: SharedData['app'] }>().props;

    const shared = {
        url: app.url.full,
        title,
        description,
        image: app.url.base + imgSrc,
    };

    const metas = {
        og: { type: 'website', ...shared },
        twitter: { card: 'summary_large_image', ...shared },
    };

    return (
        <Head title={title}>
            {/* Main */}
            <meta name="description" content={description} />
            {children}

            {/* Facebook and Twitter(X) */}
            {Object.entries(metas).map(([prefix, values]) =>
                Object.entries(values).map(([key, value]) => <meta key={`${prefix}-${key}`} property={`${prefix}:${key}`} content={value} />),
            )}
        </Head>
    );
}
