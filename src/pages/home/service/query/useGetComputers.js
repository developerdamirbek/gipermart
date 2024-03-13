import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetcomputers = () => {
  return useQuery({
    queryKey:["computers"],
    queryFn: () => request.get("/computers").then((res) => res.data)
  })
}
