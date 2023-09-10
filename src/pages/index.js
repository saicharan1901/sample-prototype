import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  )
}
