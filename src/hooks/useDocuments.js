import {useEffect, useState} from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
   const [document, setDocument] = useState(null)
   const [error, setError] = useState(null)

   //realtime data for document
   useEffect(() => {
      const ref = projectFirestore.collection(collection).doc(id)

      // onSnapshot reference is used to get realtime updates for a document
      const unsubscribe = ref.onSnapshot((snapshot) => {
         if (snapshot.data()) {
         // here we get the objects.data
         setDocument({...snapshot.data(), id: snapshot.id})
         setError(null)
      } else {
            setError("This document doesn't exist!")
         }
      }, (err) => {
         console.log(err.message)
         setError('failed to get document')
      })

      // cleanup function to unsubscribe from this function when you leave the page/unmounts
      return () => unsubscribe()

   }, [collection, id])

   return { document, error }
};