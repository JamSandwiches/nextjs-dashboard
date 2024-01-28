import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';

export default function Layout({ children }: { children: ReactHTML.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidde">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}