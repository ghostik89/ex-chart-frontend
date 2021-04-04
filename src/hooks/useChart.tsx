import axios from 'axios'
import useSWR from "swr";

const fetcher = (url:string) => axios.get(url).then((res: { data: any; }) => res.data)

export const useChart = () => {
    const {data, error} = useSWR('http://localhost:5000/api/chart/all', fetcher)

    return{
        chart: data,
        isLoading: !error && !data,
        isError: error
    }
}