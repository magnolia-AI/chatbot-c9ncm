'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Link from 'next/link'

export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl md:text-7xl">
          Meet Your <span className="text-blue-600 dark:text-blue-400">AI Companion</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock the power of intelligent conversations. Our AI chat bot is here to assist you with information, ideas, and engaging discussions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/chat">Start Chatting Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 transition-all duration-300">
            <Link href="/cool-page">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

