export const GetProductDetailsService = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=${id}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'errorrr')
  }
}
