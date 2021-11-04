import { useEffect, useState, useRef } from "react"
import "./Aktualnosci.css"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import kulki from "../../Assets/Images/kontaktRamkaKulki.png"
import Galery from "../../Components/Galery/Galery"
import axios from "../../axios"
import { objectToArrayWithId } from "../../helpers/objects"
import PuffLoader from "react-spinners/PuffLoader"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"

export default function Aktualnosci() {
   const [postData, setPostData] = useState()
   const [loading, setLoading] = useState(false)
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef()

   const fetchPosts = async () => {
      try{
         const res = await axios.get('/Posts.json')
         const newPost = objectToArrayWithId(res.data)
         newPost.reverse()
         setPostData(newPost)
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
         <div className="headerAktualnosci" ref={headerBackgroundRef}></div>

         {loading ? (
            <>
               <PageTitle
                  title="Co słychać w królestwie tańca orientalnego?"
                  titleH2={`Posty (${postData.length}):`}
                  displayOrns={true}
               />

               <section>
                  <div className="aktualnosciSection">
                     {postData.map(post => {
                        const lastIndex = postData.length - 1;
                        const imgTable = objectToArrayWithId(post.images)

                        return (
                           <div key={post.title}>
                              <article className={`aktualnosciArticle ${post === postData[0] ? 'aktualnosciArticleFirst' : null}`}>
                                 <div className="aktualnosciPost">
                                    <div className="aktualnosciDate">{post.date}</div>

                                    <header>
                                       <h1 className="aktualnosciPostTitle">{post.title}</h1>
                                    </header>

                                    <div>
                                       {post.desc.map(opis => (
                                          <p key={opis}>{opis}</p>
                                       ))}
                                    </div>


                                    <Galery imagesData={imgTable} />

                                    {post.video ? (
                                       <video className="aktualnosciVideo" controls>
                                          <source src={post.video.src} type="video/mp4" />
                                       </video>
                                    ) : null}

                                    <img src={paragraphOrnament} className="paragraphOrnament" alt="" style={{ margin: 0 }} />



                                 </div>
                              </article>

                              {post !== postData[lastIndex] ? (
                                 <div style={{ textAlign: 'center' }}>
                                    <img alt="" className="pageTitleOrnamentDown" src={kulki} />
                                 </div>
                              ) : null}
                           </div>
                        )
                     })}
                  </div>
               </section>
            </>
         ) : (
            <div className="loadingContainer">
               <PuffLoader size={100} color="rgb(255, 187, 0)" />
            </div>
         )}
      </>
   )
}