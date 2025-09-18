import { FormControl, MenuItem, Typography } from "@mui/material";
import { InputLabel, Select } from "@mui/material";
import type { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<typeof Select>, "onChange"> & {
  label: string;
  value: string;
  helperText: string | undefined;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export const SelectMenu: FC<Props> = ({
  label,
  onChange,
  options,
  helperText,
  fullWidth,
  ...props
}) => (
  <FormControl>
    <InputLabel id={label}>{label}</InputLabel>
    <Select
      labelId={label}
      id={label + "id"}
      onChange={(event) => onChange(event.target.value as string)}
      {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    {helperText && (
      <Typography variant="12" sx={{ color: "error.main", mt: 1 }}>
        {helperText}
      </Typography>
    )}
  </FormControl>
);
