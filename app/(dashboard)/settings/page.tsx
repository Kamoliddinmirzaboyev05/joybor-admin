"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Settings as SettingsIcon, 
  Building2, 
  Users, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  Bell,
  Shield,
  Database,
  Camera,
  MapPin,
  User,
  Key
} from "lucide-react";
import { motion } from "motion/react";

interface Room {
  id: number;
  number: string;
  floor: number;
  capacity: number;
  occupied: number;
  price: number;
  status: "Faol" | "Ta&apos;mirlash" | "Band";
  facilities: string[];
}

interface DormitoryInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  director: string;
  totalRooms: number;
  totalCapacity: number;
  currentOccupancy: number;
}

interface SystemSettings {
  paymentDeadline: number;
  latePaymentFee: number;
  securityDeposit: number;
  wifiPassword: string;
  checkInTime: string;
  checkOutTime: string;
  visitorHours: string;
  emergencyContact: string;
}

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Dormitory Information State
  const [dormitoryInfo, setDormitoryInfo] = useState<DormitoryInfo>({
    name: "Toshkent Davlat Universiteti Yotoqxonasi",
    address: "Toshkent sh., Yunusobod tumani, Universitet ko&apos;chasi 4-uy",
    phone: "+998 71 123-45-67",
    email: "dormitory@tdu.uz",
    director: "Karimov Karim Karimovich",
    totalRooms: 150,
    totalCapacity: 600,
    currentOccupancy: 485
  });

  // System Settings State
  const [systemSettings, setSystemSettings] = useState<SystemSettings>({
    paymentDeadline: 5,
    latePaymentFee: 50000,
    securityDeposit: 200000,
    wifiPassword: "TDU_Dormitory_2024",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    visitorHours: "09:00 - 21:00",
    emergencyContact: "+998 71 911-22-33"
  });

  // New Room Form State
  const [newRoom, setNewRoom] = useState({
    number: "",
    floor: "",
    capacity: "",
    price: "",
    facilities: [] as string[]
  });

  // Sample rooms data
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      number: "101",
      floor: 1,
      capacity: 4,
      occupied: 4,
      price: 500000,
      status: "Band",
      facilities: ["Wi-Fi", "Konditsioner", "Muzlatgich"]
    },
    {
      id: 2,
      number: "102",
      floor: 1,
      capacity: 4,
      occupied: 3,
      price: 500000,
      status: "Faol",
      facilities: ["Wi-Fi", "Konditsioner"]
    },
    {
      id: 3,
      number: "201",
      floor: 2,
      capacity: 2,
      occupied: 2,
      price: 750000,
      status: "Band",
      facilities: ["Wi-Fi", "Konditsioner", "Muzlatgich", "Televizor"]
    },
    {
      id: 4,
      number: "202",
      floor: 2,
      capacity: 2,
      occupied: 0,
      price: 750000,
      status: "Ta&apos;mirlash",
      facilities: ["Wi-Fi", "Konditsioner"]
    }
  ]);

  const facilityOptions = [
    "Wi-Fi", "Konditsioner", "Muzlatgich", "Televizor", 
    "Kir yuvish mashinasi", "Mikroto&apos;lqinli pech", "Shkaf", "Stol"
  ];

  const handleSaveDormitoryInfo = () => {
    // Here you would save to backend
    console.log("Saving dormitory info:", dormitoryInfo);
    setIsEditing(false);
  };

  const handleSaveSystemSettings = () => {
    // Here you would save to backend
    console.log("Saving system settings:", systemSettings);
  };

  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    const room: Room = {
      id: rooms.length + 1,
      number: newRoom.number,
      floor: parseInt(newRoom.floor),
      capacity: parseInt(newRoom.capacity),
      occupied: 0,
      price: parseInt(newRoom.price),
      status: "Faol",
      facilities: newRoom.facilities
    };
    setRooms([...rooms, room]);
    setNewRoom({ number: "", floor: "", capacity: "", price: "", facilities: [] });
    setIsRoomModalOpen(false);
  };

  const handleEditRoom = (room: Room) => {
    setEditingRoom(room);
    setNewRoom({
      number: room.number,
      floor: room.floor.toString(),
      capacity: room.capacity.toString(),
      price: room.price.toString(),
      facilities: room.facilities
    });
    setIsRoomModalOpen(true);
  };

  const handleUpdateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRoom) return;
    
    const updatedRoom: Room = {
      ...editingRoom,
      number: newRoom.number,
      floor: parseInt(newRoom.floor),
      capacity: parseInt(newRoom.capacity),
      price: parseInt(newRoom.price),
      facilities: newRoom.facilities
    };
    
    setRooms(rooms.map(room => room.id === editingRoom.id ? updatedRoom : room));
    setEditingRoom(null);
    setNewRoom({ number: "", floor: "", capacity: "", price: "", facilities: [] });
    setIsRoomModalOpen(false);
  };

  const handleDeleteRoom = (roomId: number) => {
    if (confirm("Xonani o&apos;chirishni tasdiqlaysizmi?")) {
      setRooms(rooms.filter(room => room.id !== roomId));
    }
  };

  const getStatusBadge = (status: Room["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "Faol":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      case "Band":
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
      case "Ta&apos;mirlash":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      default:
        return baseClasses;
    }
  };

  const toggleFacility = (facility: string) => {
    setNewRoom(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  return (
    <div className="mt-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="pageTitle">
          <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
            <SettingsIcon className="w-8 h-8" />
            Sozlamalar
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Yotoqxona boshqaruvi va tizim sozlamalari
          </p>
        </div>

        {/* Settings Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Umumiy
              </TabsTrigger>
              <TabsTrigger value="rooms" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Xonalar
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Tizim
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Xavfsizlik
              </TabsTrigger>
            </TabsList>

            {/* General Settings Tab */}
            <TabsContent value="general" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Yotoqxona ma&apos;lumotlari
                  </h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    {isEditing ? "Bekor qilish" : "Tahrirlash"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Yotoqxona nomi</Label>
                    <Input
                      id="name"
                      value={dormitoryInfo.name}
                      onChange={(e) => setDormitoryInfo({...dormitoryInfo, name: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="director">Direktor</Label>
                    <Input
                      id="director"
                      value={dormitoryInfo.director}
                      onChange={(e) => setDormitoryInfo({...dormitoryInfo, director: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="address">Manzil</Label>
                    <Input
                      id="address"
                      value={dormitoryInfo.address}
                      onChange={(e) => setDormitoryInfo({...dormitoryInfo, address: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      value={dormitoryInfo.phone}
                      onChange={(e) => setDormitoryInfo({...dormitoryInfo, phone: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={dormitoryInfo.email}
                      onChange={(e) => setDormitoryInfo({...dormitoryInfo, email: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Jami xonalar</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{dormitoryInfo.totalRooms}</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Sig&apos;im</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{dormitoryInfo.totalCapacity}</p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Hozirgi band</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">{dormitoryInfo.currentOccupancy}</p>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end mt-6">
                    <Button onClick={handleSaveDormitoryInfo} className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Saqlash
                    </Button>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            {/* Rooms Management Tab */}
            <TabsContent value="rooms" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Xonalar boshqaruvi
                  </h2>
                  
                  <Dialog open={isRoomModalOpen} onOpenChange={setIsRoomModalOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Xona qo&apos;shish
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>
                          {editingRoom ? "Xonani tahrirlash" : "Yangi xona qo&apos;shish"}
                        </DialogTitle>
                        <DialogDescription>
                          Xona ma&apos;lumotlarini kiriting
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form onSubmit={editingRoom ? handleUpdateRoom : handleAddRoom} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="room_number">Xona raqami</Label>
                            <Input
                              id="room_number"
                              value={newRoom.number}
                              onChange={(e) => setNewRoom({...newRoom, number: e.target.value})}
                              placeholder="101"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="floor">Qavat</Label>
                            <Input
                              id="floor"
                              type="number"
                              value={newRoom.floor}
                              onChange={(e) => setNewRoom({...newRoom, floor: e.target.value})}
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="capacity">Sig&apos;im</Label>
                            <Input
                              id="capacity"
                              type="number"
                              value={newRoom.capacity}
                              onChange={(e) => setNewRoom({...newRoom, capacity: e.target.value})}
                              placeholder="4"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="price">Narx (so&apos;m)</Label>
                            <Input
                              id="price"
                              type="number"
                              value={newRoom.price}
                              onChange={(e) => setNewRoom({...newRoom, price: e.target.value})}
                              placeholder="500000"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label>Imkoniyatlar</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {facilityOptions.map(facility => (
                              <label key={facility} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={newRoom.facilities.includes(facility)}
                                  onChange={() => toggleFacility(facility)}
                                  className="rounded"
                                />
                                <span className="text-sm">{facility}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsRoomModalOpen(false);
                              setEditingRoom(null);
                              setNewRoom({ number: "", floor: "", capacity: "", price: "", facilities: [] });
                            }}
                          >
                            Bekor qilish
                          </Button>
                          <Button type="submit">
                            {editingRoom ? "Yangilash" : "Qo&apos;shish"}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-muted/50">
                      <TableHead>Xona</TableHead>
                      <TableHead>Qavat</TableHead>
                      <TableHead>Sig&apos;im</TableHead>
                      <TableHead>Band</TableHead>
                      <TableHead>Narx</TableHead>
                      <TableHead>Holat</TableHead>
                      <TableHead>Imkoniyatlar</TableHead>
                      <TableHead className="text-center">Amallar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rooms.map((room) => (
                      <TableRow key={room.id}>
                        <TableCell className="font-medium">{room.number}</TableCell>
                        <TableCell>{room.floor}</TableCell>
                        <TableCell>{room.capacity}</TableCell>
                        <TableCell>{room.occupied}</TableCell>
                        <TableCell className="font-medium text-green-600">
                          {room.price.toLocaleString()} so&apos;m
                        </TableCell>
                        <TableCell>
                          <span className={getStatusBadge(room.status)}>
                            {room.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {room.facilities.slice(0, 2).map(facility => (
                              <span key={facility} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                                {facility}
                              </span>
                            ))}
                            {room.facilities.length > 2 && (
                              <span className="text-xs text-gray-500">+{room.facilities.length - 2}</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditRoom(room)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteRoom(room.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="system" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
              >
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
                  <Database className="w-5 h-5" />
                  Tizim sozlamalari
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="paymentDeadline">To&apos;lov muddati (kun)</Label>
                    <Input
                      id="paymentDeadline"
                      type="number"
                      value={systemSettings.paymentDeadline}
                      onChange={(e) => setSystemSettings({...systemSettings, paymentDeadline: parseInt(e.target.value)})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="latePaymentFee">Kechikish jarimi (so&apos;m)</Label>
                    <Input
                      id="latePaymentFee"
                      type="number"
                      value={systemSettings.latePaymentFee}
                      onChange={(e) => setSystemSettings({...systemSettings, latePaymentFee: parseInt(e.target.value)})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="securityDeposit">Kafolat puli (so&apos;m)</Label>
                    <Input
                      id="securityDeposit"
                      type="number"
                      value={systemSettings.securityDeposit}
                      onChange={(e) => setSystemSettings({...systemSettings, securityDeposit: parseInt(e.target.value)})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="wifiPassword">Wi-Fi parol</Label>
                    <Input
                      id="wifiPassword"
                      value={systemSettings.wifiPassword}
                      onChange={(e) => setSystemSettings({...systemSettings, wifiPassword: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="checkInTime">Kirish vaqti</Label>
                    <Input
                      id="checkInTime"
                      type="time"
                      value={systemSettings.checkInTime}
                      onChange={(e) => setSystemSettings({...systemSettings, checkInTime: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="checkOutTime">Chiqish vaqti</Label>
                    <Input
                      id="checkOutTime"
                      type="time"
                      value={systemSettings.checkOutTime}
                      onChange={(e) => setSystemSettings({...systemSettings, checkOutTime: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="visitorHours">Mehmon vaqti</Label>
                    <Input
                      id="visitorHours"
                      value={systemSettings.visitorHours}
                      onChange={(e) => setSystemSettings({...systemSettings, visitorHours: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="emergencyContact">Favqulodda aloqa</Label>
                    <Input
                      id="emergencyContact"
                      value={systemSettings.emergencyContact}
                      onChange={(e) => setSystemSettings({...systemSettings, emergencyContact: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveSystemSettings} className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Sozlamalarni saqlash
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            {/* Security Settings Tab */}
            <TabsContent value="security" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Access Control */}
                <div className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Key className="w-5 h-5" />
                    Kirish nazorati
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Kartali kirish</p>
                        <p className="text-sm text-gray-600">ID karta orqali kirish</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Biometrik kirish</p>
                        <p className="text-sm text-gray-600">Barmoq izi orqali kirish</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>

                {/* Camera System */}
                <div className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Camera className="w-5 h-5" />
                    Kamera tizimi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Camera className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="font-medium">Kirish</p>
                      <p className="text-sm text-green-600">Faol</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Camera className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="font-medium">Koridor</p>
                      <p className="text-sm text-green-600">Faol</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Camera className="w-8 h-8 mx-auto mb-2 text-red-600" />
                      <p className="font-medium">Hovli</p>
                      <p className="text-sm text-red-600">Nofaol</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Settings */}
                <div className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Bell className="w-5 h-5" />
                    Favqulodda vaziyat
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Yong&apos;in signalizatsiyasi</p>
                        <p className="text-sm text-gray-600">Avtomatik yong&apos;in aniqlash</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Faol</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Favqulodda chiqish</p>
                        <p className="text-sm text-gray-600">Avtomatik eshik ochish</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Faol</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;