import AuthLayout from "@/layouts/auth";
import { Head } from "@inertiajs/react";

export default function LoginPage(){
    return (
        <AuthLayout title="Log in" description="Silakan masukkan kredensial untuk melanjutkan.">
            <Head>
                <title>Log in</title>
                <meta name="description" content="Halaman Log in aplikasi." />
            </Head>

            <h1 className="text-2xl text-blue-500">This is login page</h1>
        </AuthLayout>
    )
}