import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import MainPage from './MainPage'

export default async function NotesPage() {
  const session = await getServerSession(authOptions)

  return <MainPage session={session} />
}
