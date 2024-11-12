'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  EditIcon,
  TrashIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  PlusIcon,
  FileDownIcon,
  ChevronDownIcon,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type OrderItem = {
  mainSku: string;
  customerSku: string;
  // unit: string
  units: string[];
  price: number | null;
  orderAmount: number;
  productName: string;
  disabled?: boolean;
};

const mockedOrderItems: OrderItem[] = [
  {
    mainSku: 'INV001',
    customerSku: 'CUS005',
    units: ['ขวด', 'โหล'],
    price: 10,
    orderAmount: 10,
    productName: 'น้ำปลา',
    disabled: true,
  },
  {
    mainSku: 'INV002',
    customerSku: 'CUS006',
    units: ['ขวด', 'โหล'],
    price: 20,
    orderAmount: 25,
    productName: 'ซอสมะเขือเทศ',
    disabled: true,
  },
  {
    mainSku: 'INV003',
    customerSku: 'CUS008',
    units: ['ถุง'],
    price: 30,
    orderAmount: 8,
    productName: 'ผงชูรส',
    disabled: true,
  },
  {
    mainSku: 'INV004',
    customerSku: 'CUS010',
    units: ['ขวด', 'โหล'],
    price: 40,
    orderAmount: 30,
    productName: 'ซีอิ๊วขาว',
    disabled: true,
  },
  {
    mainSku: 'INV005',
    customerSku: 'CUS015',
    units: ['กิโลกรัม'],
    price: 50,
    orderAmount: 66,
    productName: 'พริกไทย',
    disabled: false,
  },
  {
    mainSku: 'INV006',
    customerSku: 'CUS020',
    units: ['ขวด', 'โหล'],
    price: null,
    orderAmount: 40,
    productName: 'ซอสภูเขาทอง',
    disabled: false,
  },
  {
    mainSku: 'INV007',
    customerSku: 'CUS033',
    units: ['ถุง', 'กิโลกรัม'],
    price: null,
    orderAmount: 100,
    productName: 'น้ำตาล',
    disabled: false,
  },
];

const formatNumber = (num: number) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return Number(num).toLocaleString('en', options);
};

const getTotalPrice = (orderItems: OrderItem[]) =>
  orderItems
    .map((invoice) => invoice.price && invoice.orderAmount * invoice.price)
    .reduce((a, b) => (b ? a! + b : a), 0);

export default function CreateOrder() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">
          ทำรายการสั่งซื้อ (Order)
        </h1>
        <h2 className="text-lg font-semibold text-gray-600">
          ยอดรวม {formatNumber(getTotalPrice(mockedOrderItems)!)} บาท
        </h2>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm py-4 md:px-4 lg:px-8">
        <div className="w-full grid gap-4 py-2">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-4" />
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={'outline'} className="w-full">
                    <PlusIcon className="h-4 w-4" />
                    เพิ่มรายการ
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1000px]">
                  <DialogHeader>
                    <DialogTitle>เพิ่มรายการ</DialogTitle>
                    <DialogDescription>
                      เลือกชื่อสินค้าจากรายการ หรือกรอกชื่อสินค้าใหม่
                    </DialogDescription>
                  </DialogHeader>

                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">
                        เลือกสินค้าจากรายการ
                      </TabsTrigger>
                      <TabsTrigger value="password">
                        กรอกชื่อสินค้าใหม่
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        {/* <CardHeader>
                          <CardTitle>เลือกสินค้าจากรายการ</CardTitle>
                          <CardDescription>
                            พิมพ์ชื่อหรือรหัสของสินค้าเพื่อค้นหา
                          </CardDescription>
                        </CardHeader> */}
                        <CardContent className="space-y-2 mt-6">
                          <div className="space-y-1">
                            <Label htmlFor="name">
                              ค้นหาชื่อหรือรหัสสินค้า
                            </Label>
                            <Input id="name" onChange={() => {}} />
                          </div>
                          <Card className="w-full h-[200px] flex items-center justify-center">
                            <Label className="text-gray-400">
                              ส่วนแสดงรายการสินค้า แบ่งตามหมวดหมู่
                            </Label>
                          </Card>
                          <Pagination>
                            <PaginationContent>
                              <PaginationItem>
                                <PaginationPrevious href="#" />
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink href="#" isActive>
                                  2
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationNext href="#" />
                              </PaginationItem>
                            </PaginationContent>
                          </Pagination>
                        </CardContent>
                        {/* <CardFooter>
                          <Button>Save changes</Button>
                        </CardFooter> */}
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                      <Card>
                        <CardHeader>
                          {/* <CardTitle>กรอกชื่อสินค้าใหม่</CardTitle> */}
                          <CardDescription>
                            กรณีไม่พบสินค้าในรายการ
                            ให้กรอกชื่อสินค้าที่ต้องการสั่งซื้อที่นี่
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1">
                            <Label htmlFor="current">ชื่อสินค้า</Label>
                            <Input
                              id="current"
                              type="password"
                              onChange={() => {}}
                            />
                          </div>
                        </CardContent>
                        {/* <CardFooter>
                          <Button>Save password</Button>
                        </CardFooter> */}
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">เพิ่มในรายการสั่งซื้อ</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <span className="sr-only">Open menu</span>
                    <FileDownIcon className="h-4 w-4" />
                    นำเข้าจากไฟล์
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <FileSpreadsheetIcon className="mr-2 h-4 w-4" />
                    <span>Excel</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileTextIcon className="mr-2 h-4 w-4" />
                    <span>CSV</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-md">รหัสสินค้า</TableHead>
                <TableHead className="w-[100px]">รหัสกลาง</TableHead>
                <TableHead>ชื่อสินค้า</TableHead>
                <TableHead className="w-[75px]">หน่วย</TableHead>
                <TableHead className="w-[100px] text-right">
                  ราคา/หน่วย
                </TableHead>
                <TableHead className="w-[100px] text-right">จำนวน</TableHead>
                <TableHead className="w-[100px] text-right">ราคา</TableHead>
                <TableHead className="w-[75px] text-right">จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockedOrderItems.map((product) => (
                <TableRow key={product.mainSku} className="hover:bg-muted">
                  {/* รหัสสินค้า */}
                  <TableCell className="">
                    <Input
                      onChange={() => {}}
                      className="text-left bg-white"
                      placeholder="รหัสสินค้า"
                      value={product.customerSku}
                      disabled={product.disabled}
                    />
                  </TableCell>
                  {/* รหัสกลาง */}
                  <TableCell className="">{product.mainSku}</TableCell>
                  {/* ชื่อสินค้า */}
                  <TableCell>{product.productName}</TableCell>
                  {/* หน่วย */}
                  {/* <TableCell>{invoice.unit}</TableCell> */}
                  <TableCell className="">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="เลือกหน่วย" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>หน่วย</SelectLabel> */}
                          {product.units.map((unit) => (
                            <SelectItem key={unit} value={unit}>
                              {unit}
                            </SelectItem>
                          ))}
                          <SelectItem value="no-unit" className="text-red-500">
                            ไม่มีหน่วยที่ต้องการ
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  {/* ราคา/หน่วย */}
                  <TableCell
                    className={`text-right ${
                      product.price === null && 'text-red-500'
                    }`}
                  >
                    {product.price === null
                      ? 'ยังไม่มีราคา'
                      : formatNumber(product.price)}
                  </TableCell>
                  {/* จำนวนสั่งซื้อ */}
                  <TableCell className="text-right">
                    <Input
                      onChange={() => {}}
                      type="number"
                      className="text-right bg-white"
                      placeholder="จำนวน"
                      value={product.orderAmount}
                    />
                  </TableCell>
                  {/* ราคา (line total) */}
                  <TableCell
                    className={`text-right ${
                      product.price === null && 'text-red-500'
                    }`}
                  >
                    {product.price === null
                      ? 'ยังไม่มีราคา'
                      : formatNumber(product.orderAmount * product.price)}
                  </TableCell>
                  {/* Edit, delete */}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <span className="sr-only">Open menu</span>
                          <ChevronDownIcon className="h-4 w-4" />
                        </Button>
                        {/* <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <EllipsisVertical className="h-4 w-4" />
                        </Button> */}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <EditIcon className="mr-2 h-4 w-4" />
                          <span>แก้ไข</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrashIcon className="mr-2 h-4 w-4" />
                          <span>ลบ</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="py-4 font-bold" colSpan={6}>
                  รวมราคาทั้งหมด
                </TableCell>
                <TableCell className="text-right font-bold">
                  {formatNumber(getTotalPrice(mockedOrderItems)!)}
                </TableCell>
                <TableCell>&nbsp;</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <Button type="submit" className="mt-4">
            บันทึก
          </Button>
        </div>

        {/* <div className="grid gap-4">
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="receipt-code">เลขที่ใบเสร็จ</Label>
                <Input
                  id="receipt-code"
                  placeholder="เลขที่ใบเสร็จ"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">วันที่</Label>
                <Input
                  id="date"
                  placeholder="วันที่"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="customer-code">รหัสลูกค้า</Label>
                <Input
                  id="customer-code"
                  placeholder="รหัสลูกค้า"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tax-id">เลขประจำตัวผู้เสียภาษี</Label>
                <Input
                  id="tax-id"
                  placeholder="เลขประจำตัวผู้เสียภาษี"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2 mb-4">
              <Label htmlFor="customer-name">ชื่อลูกค้า</Label>
              <Input
                id="customer-name"
                placeholder="ชื่อลูกค้า"
                required
              />
            </div>

            <div className="grid grid-cols-4 gap-x-4 gap-y-2 mb-4">
              <div className="col-span-2 grid gap-2">
                <Label htmlFor="item-name">รายการ</Label>
                <Input
                  id="item-name"
                  placeholder="รายการ"
                  required
                />
              </div>
              <div className="col-span-1 grid gap-2">
                <Label htmlFor="quantity">จำนวน</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="จำนวน"
                  required
                />
              </div>
              <div className="col-span-1 grid gap-2">
                <Label htmlFor="unit-price">ราคาต่อหน่วย</Label>
                <Input
                  id="unit-price"
                  type="number"
                  placeholder="ราคาต่อหน่วย"
                  required
                />
              </div>
            </div>
        <Button type="submit" className="mt-4">
          บันทึก
        </Button>
      </form>
    </div > */}
      </div>
    </>
  );
}
