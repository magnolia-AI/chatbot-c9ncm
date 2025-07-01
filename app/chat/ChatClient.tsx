"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function ChatClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get a response from the bot.");
      }

      const data = await response.json();
      const botMessage: Message = { text: data.reply, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-[440px] h-[720px] grid grid-rows-[auto,1fr,auto]">
        <CardHeader>
          <CardTitle>Chat Bot</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" size="icon">
              <SendIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

