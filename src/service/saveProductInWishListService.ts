import { db } from '@/config/firebaseconfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const SaveProductInWishListService = async ({
  product,
  userId
}: any) => {
  const userRef = doc(db, 'users', userId)
  const userSnap = await getDoc(userRef)
  const userData = userSnap.data() ?? {}
  const _wishlist = userData?.wishlist ?? []
  const productExists = _wishlist?.find(({ id }: any) => id === product.id)

  if (productExists) {
    const updatedList = _wishlist.filter(({ id }: any) => id !== product.id)

    setDoc(
      doc(db, 'users', userId),
      {
        wishlist: updatedList
      },
      { merge: true }
    )

    return console.warn('Já está no wishlist', updatedList, _wishlist)
  }

  const wishListUpdated = [..._wishlist, product]

  return setDoc(
    doc(db, 'users', userId),
    {
      wishlist: wishListUpdated
    },
    { merge: true }
  )
}
