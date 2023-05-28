import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="maintenance-page">
    <h1>Website Under Maintenance</h1>
    <p>We apologize for the inconvenience. Our website is currently undergoing scheduled maintenance. Please check back later.</p>
  </div>
  )
}
