import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as XLSX from "xlsx";

export default function FormComponent() {
  const [employeeData, setEmployeeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    idNumber: "",
    dateOfBirth: "",
    gender: "",
    position: "",
    status: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const saveToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([employeeData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employee_data.xlsx");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-800 text-white p-4">
        {/* Sidebar content */}
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-600 mb-2"></div>
          <div>Hồng Hải</div>
          <div className="text-sm text-gray-400">Chào mừng bạn trở lại</div>
        </div>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            POS Bán Hàng
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Bảng điều khiển
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Quản lý nhân viên
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Quản lý khách hàng
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Quản lý sản phẩm
          </Button>         
          <Button variant="ghost" className="w-full justify-start mb-2">
            Báo cáo doanh thu
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Lịch công tác
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            Cài đặt hệ thống
          </Button>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <Card>
          <CardHeader>
            <CardTitle>Tạo mới nhân viên</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={employeeData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Địa chỉ email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={employeeData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={employeeData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Địa chỉ thường trú</Label>
                  <Input
                    id="address"
                    name="address"
                    value={employeeData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="idNumber">Số CMND</Label>
                  <Input
                    id="idNumber"
                    name="idNumber"
                    value={employeeData.idNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Ngày sinh</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={employeeData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Giới tính</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giới tính" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="position">Chức vụ</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("position", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn chức vụ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Quản lý</SelectItem>
                      <SelectItem value="staff">Nhân viên</SelectItem>
                      <SelectItem value="intern">Thực tập sinh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Tình trạng làm việc</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("status", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tình trạng" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Đang làm việc</SelectItem>
                      <SelectItem value="inactive">Nghỉ việc</SelectItem>
                      <SelectItem value="onLeave">Đang nghỉ phép</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button onClick={saveToExcel} type="button">
                  Lưu lại
                </Button>
                <Button variant="outline">Hủy bỏ</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
