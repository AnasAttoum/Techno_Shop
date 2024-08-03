import { useContext } from "react"
import { Context,ThemeContextType } from "@/context/ThemeProvider"

export default function DarkModeToggle() {

    const { mode, toggle } = useContext(Context) as ThemeContextType

    return (
        <div className="flex justify-between items-center gap-1 rounded-xl relative"
            style={{ border: '1px solid var(--primary)', cursor: 'pointer',width:'46.8px' }}
            onClick={toggle}>
            <div style={{ fontSize: '15px' }}>🔆</div>
            <div style={{ fontSize: '15px' }}>🌙</div>
            <div className="absolute rounded-full" style={
                mode === 'light' ?
                    { backgroundColor: 'var(--primary)', width: '20px', height: '20px', margin: '1px', right: '0' }
                    :
                    { backgroundColor: 'var(--primary)', width: '20px', height: '20px', margin: '1px', left: '0' }
            }></div>
        </div >
    )
}
