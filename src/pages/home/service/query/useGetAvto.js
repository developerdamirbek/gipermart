import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetAvto = () => {
  return useQuery({
    queryKey:["avto"],
    queryFn: () => request.get("/steeringWheel ").then((res) => res.data)
  })
}
