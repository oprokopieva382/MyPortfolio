import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";

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
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            color: "#555555",
          }}
        >
          Let's talk
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
          sx={{
            mt: 3,
            width: "100%",
            alignItems: "center",
          }}
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              sx={{
                mt: 3,
                backgroundColor: "rgba(156, 204, 101, 0.6)",
                "&:hover": {
                  backgroundColor: "rgba(156, 204, 101, 0.2)",
                },
                padding: "8px 18px",
              }}
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
