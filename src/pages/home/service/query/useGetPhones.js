import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetPhones = () => {
  return useQuery({
    queryKey:["phone"],
    queryFn: () => request.get("/phones").then((res) => res.data)
  })
}
