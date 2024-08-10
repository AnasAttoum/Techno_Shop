export default function layout({children,logIn}:{children:React.ReactNode,logIn:React.ReactNode}) {
    return (
      <div>
          <div>{children}</div>
          <div>{logIn}</div>
      </div>
    )
  }
  
