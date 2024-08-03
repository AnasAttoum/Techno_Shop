import Title from "@/components/Title";
import Image from "next/image";
import styles from '@/styles/whyChooseUs.module.css'

export default function WhyChooseUs() {
    return (
        <>
            <Title title='Why Choose Us' />

            <div className={`flex justify-between gap-5 ${styles.container}`} style={{ marginTop: '50px' }}>
                <div className="flex flex-wrap gap-5" style={{ width: '50%' }}>
                    <div className="flex flex-col items-center" style={{ width: '47%',border:'1px dashed var(--dots)',borderRadius:'50px' }}>
                        <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="#6C63FF" d="M4 16h12v2H4zm-2-5h10v2H2z" /><path fill="#6C63FF" d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A4 4 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z" /></svg>
                        <div className="font-bold">Fast & Free Shipping</div>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '47%',border:'1px solid var(--dots)',borderRadius:'50px' }}>
                        <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="none" stroke="#6C63FF" d="M5.5 21a2 2 0 1 0 4 0m3 0a2 2 0 1 0 4 0M7 7.5h15.5v.25l-.239.283A16 16 0 0 0 18.5 18.34v.16h-13v-1.88c0-2.08-.066-4.158-.386-6.212C4.56 6.852 3.337 1.5 1 1.5" /></svg>
                        <div className="font-bold">Easy To Shop</div>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '47%',border:'1px solid var(--dots)',borderRadius:'50px'  }}>
                        <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="#6C63FF" d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93c0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95M11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.2 8.2 0 0 1 11 4zM4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.19-1.42.75-2.77 1.63-3.9zM6 8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2zm6 0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8zM2 13c.2 1.95.97 3.8 2.22 5.32l1.42-1.42A8.2 8.2 0 0 1 4 13zm5.11 5.37l-1.43 1.42A10.04 10.04 0 0 0 11 22v-2a8.06 8.06 0 0 1-3.89-1.63" /></svg>
                        <div className="font-bold">24/7 Support</div>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '47%',border:'1px dashed var(--dots)',borderRadius:'50px' }}>
                        <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="none" stroke="#6C63FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.527 15.977h3.24c1.278-.021 3.233.652 3.233 3.08C22 21.577 19.588 22 18.766 22H7.946C5.438 22 2 21.491 2 17.17V8.002h20v4.517m-6.473 3.457a.8.8 0 0 1 .273-.58l1.702-1.42m-1.975 2a.8.8 0 0 0 .275.623l1.7 1.383M2.006 7.991l.921-2.3c.748-1.789 1.122-2.683 1.88-3.186S6.537 2 8.48 2h7.02c1.944 0 2.916 0 3.674.504c.758.503 1.131 1.397 1.88 3.185L22 7.995m-10.037.006v-6m-2 10h4" color="#6C63FF" /></svg>
                        <div className="font-bold">Free Returns</div>
                    </div>
                </div>

                <div className={`relative ${styles.imageContainer}`} style={{width:'50%',height:'400px'}}>
                    <Image src={'/techno_shop.svg'} alt="Techno Shop" fill={true} style={{ zIndex: '2' }}></Image>
                    <div className={styles.image}></div>
                </div>
            </div>
        </>
    )
}