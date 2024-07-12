import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cepApi = createApi({
  reducerPath: 'cepApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://viacep.com.br/ws/'
  }),
  endpoints: (builder) => ({
    getAdress: builder.query<Endereco, string>({
      query: (cep) => `${cep}/json/`
    })
  })
})

export const { useGetAdressQuery } = cepApi
export default cepApi
