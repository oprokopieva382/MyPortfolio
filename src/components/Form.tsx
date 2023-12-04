import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { sendEmail } from "../utils/emailHandler";
import { ToastContainer } from "react-toastify";
import {
  ButtonBox,
  FormBox,
  FormButton,
  FormFieldsBox,
  FormTitle,
} from "../style/Contact";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "Email field is required",
    })
    .refine((value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value), {
      message: "Invalid email address",
    }),
  message: z.string().min(1, { message: "Massage is required" }),
});

export type ExpenseFormData = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <Container component="main" maxWidth="sm">
      <FormBox>
        <FormTitle>Let's talk</FormTitle>
        <FormFieldsBox>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
              sendEmail(data);
              reset();
            })}
          >
            <TextField
              fullWidth
              label="name"
              variant="outlined"
              margin="normal"
              id="name"
              {...register("name")}
            />
            <p>
              {errors.name && (
                <Typography color="error">{errors.name.message}</Typography>
              )}
            </p>
            <TextField
              fullWidth
              label="email"
              variant="outlined"
              margin="normal"
              id="email"
              {...register("email")}
            />
            <p>
              {errors.email && (
                <Typography color="error">{errors.email.message}</Typography>
              )}
            </p>

            <TextField
              fullWidth
              label="message"
              variant="outlined"
              margin="normal"
              id="message"
              multiline
              rows={6}
              {...register("message")}
            />
            <p>
              {errors.message && (
                <Typography color="error">{errors.message.message}</Typography>
              )}
            </p>
            <ButtonBox>
              <FormButton
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
              >
                SEND
              </FormButton>
            </ButtonBox>
          </Box>
        </FormFieldsBox>
      </FormBox>
      <ToastContainer />
    </Container>
  );
};
