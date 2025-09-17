"use client";

import { Home, Dumbbell, Target, BarChart3, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-zinc-900 text-white flex justify-around py-3 border-t border-zinc-800">
      <Link href="/"><Home /></Link>
      <Link href="/treinos"><Dumbbell /></Link>
      <Link href="/metas"><Target /></Link>
      <Link href="/stats"><BarChart3 /></Link>
      <Link href="/perfil"><User /></Link>
    </nav>
  );
}
