"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../../../../components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "../../../../../components/ui/button";

function CreateBudget() {
	const [emojiIcon, setEmojiIcon] = useState("😊");
	const [openPicker, setOpenPicker] = useState(false);
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<div className="rounded-md bg-slate-100 p-10 items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md ">
						<h2 className="text-3xl">+</h2>
						<h2>Create New Budget</h2>
					</div>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create New Budget</DialogTitle>
						<DialogDescription>
							<div className="mt-5">
								<Button
									size="lg"
									className="text-lg"
									onClick={() => setOpenPicker(!openPicker)}
									variant="outline"
								>
									{emojiIcon}
								</Button>
							</div>
							<div className="absolute">
								<EmojiPicker
									open={openPicker}
									onEmojiClick={(e) => {
										setEmojiIcon(e.emoji);
										setOpenPicker(false);
									}}
								/>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default CreateBudget;
