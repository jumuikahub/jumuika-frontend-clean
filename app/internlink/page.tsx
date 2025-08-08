import React from "react"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "InternLink | Jumuika Hub KE",
  description: "Register as an intern and submit your weekly progress reports",
}

export default function InternLinkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">InternLink Access</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Register as an intern and start submitting your weekly reports directly to your line manager. This tool is optimized for students under internship programs.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20register%20as%20an%20intern%20via%20Jumuika%20Hub%20KE."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-4 py-2"
          >
            Register via WhatsApp
          </a>
        </div>
        <div className="mt-10">
          <Card>
            <CardContent className="p-6 text-left">
              <h2 className="text-xl font-semibold mb-2">Weekly Report Instructions</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Reports must be submitted every Friday before 5 PM.</li>
                <li>Each report should include your achievements, challenges, and lessons learned.</li>
                <li>Reports will be reviewed by your line manager.</li>
                <li>In case of any issues, contact support via WhatsApp.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
