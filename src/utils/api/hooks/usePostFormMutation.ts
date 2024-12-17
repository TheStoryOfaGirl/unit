import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FormValues } from "types";
import { sendForm } from "../requests/sendForm";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const usePostFormMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    FormValues,
    unknown
  >({
    mutationKey: ["forgot-password"],
    mutationFn: (formValues: FormValues) => sendForm(formValues),
  });
