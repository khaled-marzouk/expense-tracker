import React from "react";
import Image from "next/image";

function Header() {
	return (
		<div className="p-5 flex justify-between items-center border shadow-sm">
			<Image src={"./logo.svg"} alt="logo" width={160} height={100} />
			<button>Get Started</button>
		</div>
	);
}

export default Header;
