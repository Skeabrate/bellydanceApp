import style from "./NotFound.module.css"

export default function NotFound() {
   return (
      <div className={style.container}>
         <h1 style={{fontSize: '10rem'}}>404</h1>
         <h2 style={{paddingBottom: '20px'}}>Not Found</h2>
         <h2>The resource requested could not be found on this server!</h2>
      </div>
   )
}