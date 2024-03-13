import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetSport = () => {
  return useQuery({
    queryKey:["sport"],
    queryFn: () => request.get("/sport").then((res) => res.data)
  })
}
