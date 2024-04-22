"use client";
import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
	const menulist = [
		{
			id: 1,
			name: "Dashboard",
			icon: LayoutGrid,
			path: "/dashboard",
		},
		{
			id: 2,
			name: "Budgets",
			icon: PiggyBank,
			path: "/dashboard/budgets",
		},
		{
			id: 3,
			name: "Expenses",
			icon: ReceiptText,
			path: "/dashboard/expenses",
		},
		{
			id: 4,
			name: "Upgrade",
			icon: ShieldCheck,
			path: "/dashboard/upgrade",
		},
	];
	const path = usePathname();
	useEffect(() => {
		console.log(path);
	}, [path]);
	return (
		<div className="h-screen p-5 border shadow-sm">
			<Image src={"/logo.svg"} alt="logo" width={160} height={100} />
			<div className="mt-5">
				{menulist.map((menu, index) => (
					<Link href={menu.path}>
						<h2
							className={` mb-2 flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-blue-700 hover:bg-blue-100 ${
								path === menu.path && "text-blue-800 bg-blue-100"
							}`}
						>
							<menu.icon />
							{menu.name}
						</h2>
					</Link>
				))}
			</div>
			<div className="fixed gap-2 bottom-10 items-center">
				<UserButton />
				Profile
			</div>
		</div>
	);
};

export default SideNav;
