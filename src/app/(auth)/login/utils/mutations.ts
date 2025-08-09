import {useMutation} from "@tanstack/react-query";
import {addPost, addRevenueValues} from "@/api/api";

export const useAddData = () => {
    return useMutation({
        mutationFn: addPost
    })
}

export const useRevenueValues = () => {
    return useMutation({
        mutationFn: addRevenueValues
    })
}