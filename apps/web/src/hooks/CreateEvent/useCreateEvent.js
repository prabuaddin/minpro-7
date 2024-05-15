import { toast } from "react-toastify";
import { useCreateEventMutation } from "../../api/CreateEvent/useCreateEventMutation";

export const useCreateEvent = () => {
    const { mutate: mutationCreateEvent} = 
        useCreateEventMutation({
            onSuccess: (res) => {
                console.log(res)
                toast.success('Success!')
            },
            onError: (err) => {
                console.log(err)
                toast.error('Error!')
            }
        })
    return {
        mutationCreateEvent
    }
}