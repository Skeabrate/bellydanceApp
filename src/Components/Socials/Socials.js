export default function Socials({ socialsData, classList, classItem, classLink, classSocial }){
   return (
      <ul className={classList}>
         {socialsData.map((item) => {
            return (
               <li key={item.id} data-aos={item.fade} className={classItem}>
                  <a href={item.link} target="_blank" rel="noreferrer" className={classLink}>
                     <img alt="" className={classSocial} src={item.social} />
                     <p>{item.type}</p>
                  </a>
               </li>
            )
         })}
      </ul>
   )
}