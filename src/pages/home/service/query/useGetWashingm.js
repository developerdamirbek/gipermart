import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetWashingm = () => {
  return useQuery({
    queryKey:["washingM"],
    queryFn: () => request.get("/washingM").then((res) => res.data)
  })
}
