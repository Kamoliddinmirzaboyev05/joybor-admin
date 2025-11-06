"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CardDemo() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleCheck = () => {
    if (password === "" || login === "") {
      toast.error("Login va password maydonlari bo'sh bo'lishi mumkin emas!");
    } else if (password.length < 4 || login.length < 4) {
      toast.error(
        "Login va password maydonlari 4 ta belgidan kam bo'lishi mumkin emas!"
      );
    } else {
      if (login === "admin" && password === "admin") {
        toast.success("Tizimga muvaffaqiyatli kirdingiz!");
        localStorage.setItem("token", "kirdi");
        router.push("/");

      } else {
        toast.error("Login yoki parol xato!");
      }
    }
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="rounded-full shadow-md border w-fit m-auto p-2 ">
          <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
        </div>
        <CardTitle className=" text-center text-xl font-bold dark:text-foreground">Xush kelibsiz Admin</CardTitle>
        <p className="text-gray-500 text-center text-sm">Platformaga kirish uchun login va parolingizni kiriting</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleCheck();
        }}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Login</Label>
              <Input
                value={login}
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
                id="email"
                type="text"
                placeholder="Login"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Parol</Label>
              </div>
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                placeholder="Parol"
                type="password"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-4"
          >
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">

      </CardFooter>
    </Card>
  );
}
