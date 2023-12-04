import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const FormBox = styled(Box)`
  margin-top: 3;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FormTitle = styled(Typography)`
  color:#555555;
  font-size: 180%;
`;

export const FormFieldsBox = styled(Box)`
  margin-top: 3;
  width: 100%;
  align-items: center;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled(Button)`
  margin-top: 3;
  background-color: rgba(156, 204, 101, 0.6);
  padding: 8px 18px;

  &:hover {
    background-color: rgba(156, 204, 101, 0.2);
  }
`;