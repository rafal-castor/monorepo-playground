import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  ExampleFormInputs,
  exampleFormSchema,
  exampleFormDefaultValues,
  colors,
} from "sdk";

const ExampleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleFormInputs>({
    mode: "onBlur",
    defaultValues: exampleFormDefaultValues,
    resolver: exampleFormSchema,
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          </View>
        )}
        name="email"
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              placeholder="age"
              onBlur={onBlur}
              onChangeText={(textValue) => onChange(Number(textValue))}
              value={value.toString()}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}
        name="age"
      />
      {errors.age && <Text>{errors.age.message}</Text>}

      <Button title="Submit" onPress={handleSubmit((d) => console.log(d))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary["50"],
  },
  inputContainer: {
    flexDirection: "column",
  },
  label: {
    fontSize: 14,
    color: "#a8a8a8",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "#a8a8a8",
  },
});

export { ExampleForm };
