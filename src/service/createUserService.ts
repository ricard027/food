export interface IUser {
  username: string
  firstName: string
  lastName: string
  email: string
}

interface IResponse {
  username: string
  spoonacularPassword: string
  hash: string
}
export interface IcreaetUser {
  exec: (requestData: IUser) => Promise<IResponse>
}
export class CreateUser implements IcreaetUser {
  async exec(requestData: IUser): Promise<IResponse> {
    const data = await fetch(
      `https://api.spoonacular.com/users/connect?&apiKey=${process.env.NEXT_API_KEY}`,
      {
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json'
        },

        method: 'POST'
      }
    )

    return data.json()
  }
}
