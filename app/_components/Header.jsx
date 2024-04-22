"use client";
import React from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
	const { user, isSignedIn } = useUser();
	return (
		<div className="p-5 flex justify-between items-center border shadow-sm">
			<Image src={"./logo.svg"} alt="logo" width={160} height={100} />

			{isSignedIn ? (
				<UserButton />
			) : (
				<Link href={"/sign-in"}>
					<button className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
						Get Started
					</button>
				</Link>
			)}
		</div>
	);
}

export default Header;
