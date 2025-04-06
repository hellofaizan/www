"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { waitlist } from "~/schemas";

type formValues = z.infer<typeof waitlist>;

export default function EmailForm() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, reset } = useForm<formValues>({
    resolver: zodResolver(waitlist),
    mode: "onChange",
  });

  const onSubmit = async (data: formValues) => {
    setDisabled(true);
    setLoading(true);

    const lastEmailTime = localStorage.getItem('lastEmailTime');
    const currentTime = Date.now();
    const timeDifference = currentTime - (lastEmailTime ? parseInt(lastEmailTime) : 0);
    const maxTimeDifference = 30000; // 30 seconds in milliseconds, allowing 2 emails per minute

    if (timeDifference < maxTimeDifference) {
      setLoading(false);
      toast("I have already received your email");
      return;
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "hellofaizan.me",
          content: `<@890232380265222215> ${data.email} wants to talk`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email, try again");
      }

      localStorage.setItem('lastEmailTime', currentTime.toString());
      setLoading(false);
      toast("Received your email, will message you back soon");
    } catch (error) {
      setLoading(false);
      toast("Failed to send this email, try again");
    }
  };

  return (
    <div className="mt-3 mb-2 w-full max-w-md rounded-md bg-white dark:bg-muted border border-muted-foreground/20 p-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex w-full items-center"
      >
        <input
          type="email"
          placeholder="faizancurious@gmail.com"
          className="w-full rounded-md bg-transparent px-4 py-1 focus:outline-none"
          {...register("email")}
          required
        />
        <Button
          disabled={disabled}
          type="submit"
          className="absolute right-1 h-8 rounded-md bg-gradient-to-b from-blue-600 to-blue-700 px-5 text-center text-xs uppercase text-white hover:bg-blue-700"
        >
          {loading && <Loader className="animate-spin" size={14} />}
          {!loading ? "Send" : ""}
        </Button>
      </form>
    </div>
  );
}
