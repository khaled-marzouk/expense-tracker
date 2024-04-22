"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/sidenav";
import DashBoardHeader from "./_components/DashBoardHeader";
import { Budgets } from "../../../utils/schema.jsx";
import { db } from "../../../utils/dbConfig.jsx";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

function DashboardLayout({ children }) {
	const route = useRouter();
	const { user } = useUser();
	useEffect(() => {
		user && checkUserBudget();
	}, [user]);
	const checkUserBudget = async () => {
		const result = await db
			.select()
			.from(Budgets)
			.where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
		console.log(result);
		if (result?.length === 0) {
			// route.replace("dashboard/budgets");
		}
	};
	return (
		<div>
			<div className="fixed md:w-64 hidden md:block">
				<SideNav />
			</div>
			<div className="md:ml-64">
				<DashBoardHeader />
				{children}
			</div>
		</div>
	);
}

export default DashboardLayout;
