import useUser from '@/hook/useUser'

export const WisthListModel = () => {
  const { userData } = useUser()

  return {
    wishlist: userData?.wishlist
  }
}
