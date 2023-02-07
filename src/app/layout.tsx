'use client'

import { Montserrat } from '@next/font/google'

import Footer from '@/layout/Footer'
import { LoginForm, RegisterForm } from '@/layout/Modals'
import NavigationBar from '@/layout/NavigationBar'
import SideBar from '@/layout/SideBar'

import { useAdmin, useNavigationBar } from '@/hooks'

import { isLoggedIn } from '@/utils/checks/admin'
import './global.css'
import layout from './layout.module.scss'

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { navigationBar } = useNavigationBar()
  const { admin } = useAdmin()
  const hasLoggedIn = isLoggedIn(admin.data)

  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        {navigationBar.modals.login && !hasLoggedIn && <LoginForm />}
        {navigationBar.modals.register && !hasLoggedIn && <RegisterForm />}
        <NavigationBar />
        <main className={layout.main}>
          <SideBar />
          <div className={layout.container}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
