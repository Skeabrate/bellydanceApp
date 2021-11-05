import { StyledList, StyledListItem, StyledLink, StyledImg } from "./Socials.styles"

export default function Socials({ socialsData }){
   return (
      <StyledList>
         {socialsData.map((item) => {
            return (
               <StyledListItem key={item.id} data-aos={item.fade}>
                  <StyledLink href={item.link} target="_blank" rel="noopener noreferrer" title={item.type}>
                     <StyledImg alt="" src={item.social} />
                     <p>{item.type}</p>
                  </StyledLink>
               </StyledListItem>
            )
         })}
      </StyledList>
   )
}