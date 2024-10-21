interface IGetProductsByCategoryService {
  category?: string
}

export const GetProductsByCategoryService = async ({
  category
}: IGetProductsByCategoryService) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/filter.php?c=${category}`
    )
    return response.json()
  } catch (error) {
    console.error(error, 'Erro ao tentar obter os dados da api')
  }
}
