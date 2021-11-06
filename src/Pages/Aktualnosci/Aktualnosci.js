import { useEffect, useState, useRef } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import kulki from "../../Assets/Images/kontaktRamkaKulki.png"
import Galery from "../../Components/Galery/Galery"
import axios from "axios"
import { objectToArrayWithId } from "../../helpers/objects"
import PuffLoader from "react-spinners/PuffLoader"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import playBtn from "../../Assets/Images/play.png"

import { StyledOrnamentDown } from "../../Components/PageTitle/PageTitle.styles"
import { StyledScrollTo, StyledTextOrnament } from "../../GlobalStyles.styles"
import { StyledContainer, StyledArticle, StyledPost, StyledDate, StyledTitle, StyledLoading, StyledThumbnail, StyledPlay } from "./Aktualnosci.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"
import HeroTitle from "../../Components/HeroTitle/HeroTitle"

const HEADER_TITLE = "Co słychać w królestwie tańca orientalnego?"

export default function Aktualnosci() {
   const [postData, setPostData] = useState([])
   const [loading, setLoading] = useState(false)
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef(null)
   const scrollRef = useRef(null)

   const fetchPosts = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: `
            {
               allPosts {
                 id
                 date
                 title
                 description{
                   value
                 }
                 assets{
                   url
                 }
                 video{
                   url
                   thumbnailUrl
                 }
               }
             }`
         },{
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`
            }
         })
         setPostData(res.data.data.allPosts)
      } catch (ex) {
         console.log(ex.response)
      }
      setLoading(true)
   }

   useEffect(() => {
      document.title = "Aktualności - Leyla Bellydance"
      Aos.init({ duration: 500, debounceDelay: 200 })
   
      var image = document.createElement('img')
      image.src = imgLoad(headerBackgroundRef.current) 
      image.onload = function() {
         setShowContent(true)
      }
      fetchPosts()
   }, [])

   return (
      <>
         {!showContent ? <LoadingScreen /> : null }
         <StyledContainer ref={headerBackgroundRef}>
            <StyledScrollTo ref={scrollRef}/>
            <HeroTitle label={HEADER_TITLE} isDarker/>
            <ScrollButton scrollRef={scrollRef.current}/>
         </StyledContainer>

         {loading ? (
            <>
               <PageTitle
                  title={HEADER_TITLE}
                  titleH2={`Posty (${postData.length}):`}
                  displayOrns={true}
               />

               <section>
                  {postData.map(post => {
                     const lastIndex = postData.length - 1;
                     const imgTable = objectToArrayWithId(post.assets)
                     const newTable = []
                     post.description.value.document.children.map(item => {
                        item.children.map(item => newTable.push(item.value))
                     })

                     return (
                        <div key={post.id}>
                           <StyledArticle isFirst={post === postData[0]}>
                              <StyledPost>
                                 <StyledDate>{post.date}</StyledDate>

                                 <header>
                                    <StyledTitle>{post.title}</StyledTitle>
                                 </header>

                                 {newTable.map(post => (
                                    <div style={{textAlign: 'center'}} key={post}>{post}</div>
                                 ))}

                                 <Galery imagesData={imgTable} />

                                 {post.video ? (
                                    <>
                                       <StyledTitle>A oto filmik 😊</StyledTitle>
                                       <a href={post.video.url} target="_blank" rel="noopener noreferrer">
                                          <StyledThumbnail>
                                             <img src={post.video.thumbnailUrl} alt="thumbnail"/>
                                             <StyledPlay>
                                                <img src={playBtn} alt="playBtn"/>
                                             </StyledPlay>
                                          </StyledThumbnail>
                                       </a>
                                    </>
                                 ) : null} 

                                 <StyledTextOrnament src={paragraphOrnament} alt="" style={{ margin: 0 }} />  

                              </StyledPost>
                           </StyledArticle>

                           {post !== postData[lastIndex] ? (
                              <div style={{ textAlign: 'center' }}>
                                 <StyledOrnamentDown alt="" style={{marginTop: '0'}} src={kulki} />
                              </div>
                           ) : null}
                        </div>
                     )
                  })}
               </section>
            </>
         ) : (
            <StyledLoading>
               <PuffLoader size={100} color="rgb(255, 187, 0)" />
            </StyledLoading>
         )}
      </>
   )
}