// import { axiosInstance } from "../../lib/axiosInstance";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateEventMutation = ({ onSuccess, onError}) => {
  const { mutate } = useMutation({
    mutationFn: async(fd) => {
      return await axios.post("http://localhost:8000/event-organizer/event", fd)
    },
    onSuccess,
    onError
  })

  return {
    mutate
  }
}