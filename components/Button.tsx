import styles from '@/styles/button.module.css'

export default function Button({title,func}:{title:string,func:()=>void}) {
  return (
    <div className={styles.addBtn} onClick={func}>{title}</div>
  )
}