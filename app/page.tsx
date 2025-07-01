'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Link from 'next/link'

export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl">
          Meet Your AI Companion
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Unlock the power of intelligent conversations. Our AI chat bot is here to assist you with information, ideas, and engaging discussions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="px-8 py-4 text-lg">
            <Link href="/chat">Start Chatting Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
            <Link href="/cool-page">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
