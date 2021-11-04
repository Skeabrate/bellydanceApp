import React, {useState, useEffect} from 'react';
import { imgLoad } from '../../helpers/imgLoad';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const ImageLoader = ({backgroundRef}) => {
   const [showContent, setShowContent] = useState(false)

   useEffect(() => {
      if(backgroundRef){
         var image = document.createElement('img')
         image.src = imgLoad(backgroundRef) 
         image.onload = function() {
            setShowContent(true)
         }
      } else return null
   }, [backgroundRef])

   return (
      <>
         {!showContent ? <LoadingScreen /> : null }
      </>
   );
};

export default ImageLoader;