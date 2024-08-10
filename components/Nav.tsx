'use client'

import Link from "next/link";

import { links } from "@/CONSTANTS/data";
import { usePathname } from "next/navigation";
import { Kurale } from "next/font/google";
import Image from "next/image";
import Icon from '/public/techno_shop.svg'
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";

import styles from '@/styles/nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { logOut } from "@/lib/slices/userSlice";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const kurale = Kurale({ subsets: ["latin"], weight: ['400'] });

export default function Nav() {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: 'var(--primary)'
    },
  }));

  const pathname = usePathname()
  const [responsive, setResponsive] = useState(false)
  useEffect(() => {
    setResponsive(false)
  }, [pathname])

  const isLogIn = useSelector((state: RootState) => state.persistedReducer.user.userName) !== ''
  const sumProduct = useSelector((state: RootState) => state.persistedReducer.cart).length
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center h-20">

      <Link href='/' className={`flex gap-1 text-xl ${kurale.className}`}>
        <Image src={Icon} alt="Techno Shop" />
        Techno Shop
      </Link>

      <div className={`flex items-center gap-5 ${styles.list}`}>
        <DarkModeToggle />

        {links.map((link, index) => {
          const isActive = pathname.slice(1).includes(link.name.toLowerCase()) || (pathname.slice(1) === '' && link.name.toLowerCase() === 'home')
          return <Link key={index} href={link.url} className={isActive ? 'text-blue-500' : ''}>{link.name}</Link>
        })}
        {
          !isLogIn ?
            <Link href={'/joinUs'} className={` px-1 rounded ${styles.logIn}`} style={{ backgroundColor: 'var(--primary)', color: 'white', transition: 'all .3s' }}>Log In</Link>
            : (<>
              <Link href={'/cart'}>
                <IconButton aria-label="cart" sx={pathname.slice(1).includes('cart')?{ color: 'var(--primary)', marginRight: '10px' }:{ color: '#555', marginRight: '10px' }}>
                  <StyledBadge badgeContent={sumProduct} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              <Link href={'/joinUs'} onClick={() => dispatch(logOut())} className={`${styles.logOut} px-1 rounded`} style={{ backgroundColor: '#ef4444', color: 'white', transition: 'all .3s' }}>Log Out</Link>
            </>)
        }


      </div>

      <svg className={styles.hamburger} onClick={() => setResponsive(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="none" stroke="#6C63FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M5 8h22M5 16h22M5 24h22" /></svg>
      {
        responsive &&
        <div className={`flex flex-col items-center text-center absolute right-0 top-20 ${styles.listOnMobile}`}>
          {links.map((link, index) => {
            const isActive = pathname.slice(1).includes(link.name.toLowerCase()) || (pathname.slice(1) === '' && link.name.toLowerCase() === 'home')
            return <Link key={index} href={link.url} className={isActive ? 'text-blue-500' : ''}>{link.name}</Link>
          })}

          {
            !isLogIn ?
              <Link href={'/joinUs'} className={` px-1 rounded ${styles.logIn}`} style={{ backgroundColor: 'var(--primary)', color: 'white', transition: 'all .3s' }}>Log In</Link>
              : (<>
                <Link href={'/cart'} >Cart</Link>
                <Link href={'/joinUs'} onClick={() => dispatch(logOut())} className={`${styles.logOut} px-1 rounded`} style={{ backgroundColor: '#ef4444', color: 'white', transition: 'all .3s' }}>Log Out</Link>
              </>)
          }

          <div className="p-5">
            <DarkModeToggle />
          </div>
        </div>
      }
    </div>
  )
}
