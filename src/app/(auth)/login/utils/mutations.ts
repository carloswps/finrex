import {useMutation} from "@tanstack/react-query";
import {addPost} from "@/api/api";

export const useAddData = () => {
    return useMutation({
        mutationFn: addPost
    })
}