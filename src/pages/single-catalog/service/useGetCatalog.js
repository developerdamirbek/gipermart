import { useQuery } from '@tanstack/react-query'
import { request } from '../../../config/request'

export const useGetCatalog = ({datakey}) => {
  return useQuery({
    queryKey:["catalog"],
    queryFn: () => request.get(`/${datakey}`).then((res) => res.data)
  })
}
