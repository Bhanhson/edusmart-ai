import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, GraduationCap, AlertTriangle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Good morning, Administrator</h2>
        <p className="text-zinc-500">Dưới đây là tổng quan tình hình học tập toàn trường hôm nay.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Học sinh toàn trường</CardTitle>
            <Users className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-zinc-500">+12% so với tháng trước</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Điểm trung bình (GPA)</CardTitle>
            <GraduationCap className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.82</div>
            <p className="text-xs text-zinc-500">+0.2 so với học kỳ trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ chuyên cần</CardTitle>
            <BookOpen className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.4%</div>
            <p className="text-xs text-zinc-500">Mức ổn định</p>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-600">Nguy cơ học tập</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">47</div>
            <p className="text-xs text-red-500">Cần sự can thiệp của AI/Giáo viên</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-xl border bg-indigo-50/50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-indigo-900 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm">✨</span>
          AI Insights & Early Warnings
        </h3>
        <ul className="space-y-3 text-sm text-indigo-800">
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
            Khối 12 có điểm trung bình giảm 3.2% so với học kỳ trước.
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
            Môn Toán là môn có tỷ lệ học sinh dưới mức đạt cao nhất (18%).
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
            Chuyên cần lớp 11A3 giảm mạnh trong 4 tuần gần đây, dự đoán ảnh hưởng kết quả cuối kỳ.
          </li>
        </ul>
      </div>
    </div>
  );
}