export type InputProps = {
  id: string;
  label?: string;
  register: any;
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
  type?: "text" | "password" | "date";
};
