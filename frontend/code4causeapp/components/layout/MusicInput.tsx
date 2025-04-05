"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

async function fetchMusicData(musicLink: string) {
  const response = await fetch(`https://api.cynanite.com/analyze`, {
    method: "POST", // Assuming POST request (change if required)
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: musicLink }), // Send the music URL to the API
  });

  if (!response.ok) {
    throw new Error("Failed to fetch music data");
  }

  const data = await response.json();
  return data;
}

export function MusicInput() {
  const [musicLink, setMusicLink] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMusicLink(event.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Input Music Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Input Music Link</DialogTitle>
          <DialogDescription>
            Put the YouTube link of your music here. Click check when you're
            done!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Link
            </Label>
            <Input
              id="name"
              value={musicLink}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Rate My Tune</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
