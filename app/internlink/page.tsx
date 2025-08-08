// app/internlink/page.tsx
import Link from 'next/link'

export const metadata = {
  title: 'InternLink Registration',
  description: 'Student onboarding and weekly reporting portal for internship programs.',
}

export default function InternLink() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold">InternLink Registration</h1>
      <p className="text-base max-w-xl mx-auto">
        Secure onboarding and weekly reporting for students under internship programs. Use the buttons below to complete onboarding and access your dashboard.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Link
          href="https://wa.me/254104250912?text=I%20want%20to%20register%20as%20an%20intern"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm font-semibold"
        >
          Start Registration via WhatsApp
        </Link>
        <Link
          href="/manager"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-semibold"
        >
          Supervisor Dashboard
        </Link>
      </div>
    </div>
  )
}
