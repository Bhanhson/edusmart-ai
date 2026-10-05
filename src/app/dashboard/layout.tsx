import Link from "next/link";
import { Home, Users, BookOpen, BarChart, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50/50">
      {/* Sidebar bên trái */}
      <aside className="w-64 flex-col border-r bg-white flex hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b font-bold text-xl text-indigo-600">
          EduSmart AI
        </div>
        <nav className="flex-1 space-y-2 p-4">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-900 bg-zinc-100 transition-all font-medium">
            <Home className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="/dashboard/students" className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900">
            <Users className="h-4 w-4" /> Quản lý Học sinh
          </Link>
          <Link href="/dashboard/academics" className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900">
            <BookOpen className="h-4 w-4" /> Quản lý Điểm số
          </Link>
          <Link href="/dashboard/analytics" className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900">
            <BarChart className="h-4 w-4" /> AI Analytics
          </Link>
        </nav>
      </aside>

      {/* Khu vực nội dung chính */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between border-b bg-white px-6">
          <h1 className="text-lg font-semibold text-zinc-900">Overview</h1>
          <div className="flex items-center gap-4">
            <button className="text-zinc-500 hover:text-zinc-900 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
            </button>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        {/* Khu vực hiển thị nội dung từng trang */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}