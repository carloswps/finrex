import {useMutation} from "@tanstack/react-query";
import {addProfileData} from "@/api/api";
import {ProfileFormValues} from "@/app/(realApp)/profile/schemas/profileSchema";

export const useProfileData = () => {
    return useMutation<any, Error, ProfileFormValues>({
        mutationKey: ['addProfileData'],
        mutationFn: addProfileData,
    })
}