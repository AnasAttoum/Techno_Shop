import styles from '@/styles/title.module.css'
import { Kurale } from 'next/font/google';

const kurale = Kurale({ subsets: ["latin"], weight: ['400'] });

export default function Title({ title }: { title: string }) {
    return (
        <div className={`text-center mt-24 ${styles.title} ${kurale.className}`}><span>{title}</span></div>
    )
}