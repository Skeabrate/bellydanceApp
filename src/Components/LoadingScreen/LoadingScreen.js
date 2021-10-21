import PuffLoader from "react-spinners/PuffLoader"

export default function LoadingScreen() { 
   return (
      <div style={{
         backgroundColor: 'rgb(252, 244, 229)',
         top: 0,
         left: 0,
         width: '100vw', 
         height: '100vh', 
         position: 'fixed', 
         zIndex: 999,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
       }}>
         <PuffLoader size={100} color="rgb(255, 187, 0)" />
           
       </div>
   )
}