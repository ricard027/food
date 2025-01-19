interface IGetProductsByAreaService {
  area?: string
}

export const GetProductsByAreaService = async ({
  area
}: IGetProductsByAreaService) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/filter.php?a=${area}`
    )
    return response.json()
  } catch (error) {
    console.error(error, 'Erro ao tentar obter os dados da api')
  }
}
