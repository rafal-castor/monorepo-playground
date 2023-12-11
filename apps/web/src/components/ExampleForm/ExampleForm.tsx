import { useForm } from "react-hook-form";
import {
  colors,
  exampleFormDefaultValues,
  ExampleFormInputs,
  exampleFormSchema,
} from "sdk";

const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleFormInputs>({
    mode: "onBlur",
    defaultValues: exampleFormDefaultValues,
    resolver: exampleFormSchema,
  });

  return (
    <form
      onSubmit={handleSubmit((d) => console.log(d))}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        backgroundColor: colors.primary["50"],
      }}
    >
      <div>
        <span>email: </span>
        <input {...register("email")} />
        {errors.email && <p style={{ margin: 0 }}>{errors.email.message}</p>}
      </div>
      <br />
      <div>
        <span>age: </span>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p style={{ margin: 0 }}>{errors.age.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};

export { ExampleForm };
