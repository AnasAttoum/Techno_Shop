import { icons } from "@/CONSTANTS/data";
import Image from "next/image";
import styles from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <div className={`flex justify-between mt-20 mb-5 ${styles.container}`}>
      <div>© 2024 Techno Shop. All Rights Reserved.</div>
      <div className="flex gap-3">
        {icons.map(icon=>{
          return <Image key={icon.name} src={`/icons/${icon.url}`} alt={icon.name} width={25} height={25} className={styles.icon}/>
        })}
      </div>
    </div>
  )
}