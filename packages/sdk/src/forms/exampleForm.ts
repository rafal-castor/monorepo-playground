import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  age: z.coerce.number({ required_error: "Age is required" }).gt(18).lt(50),
});

export type ExampleFormInputs = z.infer<typeof schema>;

export const exampleFormDefaultValues: ExampleFormInputs = {
  email: "",
  age: 10,
};

export const exampleFormSchema = zodResolver(schema);
