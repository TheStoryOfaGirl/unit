import { Button, Input, Textarea } from "@components";
import { usePostFormMutation } from "@utils";
import { useForm } from "react-hook-form";
import { FormValues } from "types";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { mutate, isPending, isSuccess } = usePostFormMutation();

  const loading = isSubmitting || isPending;

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };
  return (
    <>
      {isSuccess && (
        <p className="text-left font-light text-white text-xl m-0 mb-2">
          Форма успешно отправлена
        </p>
      )}
      <form
        className="flex flex-col gap-4 w-min"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Имя*"
          helperText={errors.name?.message}
          disabled={loading}
          isError={!!errors.name}
          {...register("name", {
            required: { value: true, message: "Поле обязательно к заполнению" },
          })}
        />
        <Input
          placeholder="Телега или вк*"
          isError={!!errors.name}
          helperText={errors.link?.message}
          {...register("link", {
            required: { value: true, message: "Поле обязательно к заполнению" },
          })}
        />
        <Textarea {...register("links_text")} placeholder="Ссылки на проекты" />
        <Textarea
          isError={!!errors.reason}
          helperText={errors.reason?.message}
          placeholder="Почему*"
          {...register("reason", {
            required: { value: true, message: "Поле обязательно к заполнению" },
          })}
        />
        <Button text="Я не робот, Отправить заявку" />
      </form>
    </>
  );
};
