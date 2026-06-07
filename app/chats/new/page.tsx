import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Start a New Chat',
  description: 'Create a new v0 chat session connected to your project.',
  robots: {
    index: false,
    follow: false,
  },
}

type NewChatPageProps = {
  searchParams?: Promise<{
    projectId?: string
  }>
}

export default async function NewChatPage({ searchParams }: NewChatPageProps) {
  const params = await searchParams
  const projectId = params?.projectId

  if (projectId) {
    redirect(`/projects/${projectId}/chats/new`)
  }

  return (
    <div className="min-h-dvh bg-[#f8f2e7] px-6 py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#d8cdbf] bg-white p-8 text-center shadow-lg shadow-primary/10">
        <h1 className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl">Select a Project First</h1>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          To begin a new chat, open an existing project or create a new one. Each chat stays linked to a project so your
          prompts, designs, and deploys remain organized.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-[#0f2b1e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#123828]"
          >
            View My Projects
          </Link>
          <Link
            href="/projects/new"
            className="rounded-full border border-[#0f2b1e]/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0f2b1e] transition hover:bg-[#0f2b1e]/10"
          >
            Create Project
          </Link>
        </div>
      </div>
    </div>
  )
}

