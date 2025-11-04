"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
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
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Login</Label>
              <Input
                value={login}
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
                id="email"
                type="email"
                placeholder="Login"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          onClick={() => {
            handleCheck();
          }}
          className="w-full"
        >
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
