import { useEffect, useState, useRef } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import paragraphOrnament from "../../Assets/Images/ornParag.png"
import kulki from "../../Assets/Images/kontaktRamkaKulki.png"
import Galery from "../../Components/Galery/Galery"
import axios from "axios"
import { objectToArrayWithId } from "../../helpers/objects"
import PuffLoader from "react-spinners/PuffLoader"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"

import { StyledOrnamentDown } from "../../Components/PageTitle/PageTitle.styles"
import { StyledScrollTo, StyledTextOrnament } from "../../GlobalStyles.styles"
import { StyledContainer, StyledArticle, StyledPost, StyledDate, StyledTitle, StyledLoading, StyledThumbnail, StyledPlay } from "./Aktualnosci.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"
import HeroTitle from "../../Components/HeroTitle/HeroTitle"

const HEADER_TITLE = "Co słychać w królestwie tańca orientalnego?"

export default function Aktualnosci() {
   const [data, setData] = useState(false)
   const [posts, setPosts] = useState([])
   const [limit, setLimit] = useState(100)

   const [loading, setLoading] = useState(false)
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef(null)
   const scrollRef = useRef(null)

   const query = `{
      allPosts(first: ${limit}) {
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
      _allPostsMeta {
         count
      }
   }`

   const fetchData = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: query,
         },{
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`
            }
         })

         setData(res.data.data)
         setPosts(res.data.data.allPosts)
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
      
      fetchData()
      setLimit(limit + 10)
   }, [])

   useEffect(() => {
      if(data){
         if(data.allPosts.length < data._allPostsMeta.count){
            setLimit(limit + 100)
            fetchData()
         }      
      } 
   }, [posts])

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
                  titleH2={`Posty (${posts.length}):`}
                  displayOrns={true}
               />

               <section>
                  {posts.map(post => {
                     const lastIndex = posts.length - 1;
                     const imgTable = objectToArrayWithId(post.assets)
                     const newTable = []
                     post.description.value.document.children.map(item => {
                        item.children.map(item => newTable.push(item.value))
                     })

                     return (
                        <div key={post.id}>
                           <StyledArticle isFirst={post === posts[0]}>
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
                                       <a href={post.video.url} target="_blank" rel="noopener noreferrer">{post.video.url}</a>
                                    </>
                                 ) : null} 

                                 <StyledTextOrnament src={paragraphOrnament} alt="" style={{ margin: 0 }} />  

                              </StyledPost>
                           </StyledArticle>

                           {post !== posts[lastIndex] ? (
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