import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetAll = (search = '') => {
  return useQuery({
    queryKey:["all", search],
    queryFn: () => request.get("/all",{ params: {title_like: search}}).then((res) => res.data)
  })
}
