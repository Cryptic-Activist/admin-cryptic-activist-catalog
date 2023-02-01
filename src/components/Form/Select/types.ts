export type SelectProps = {
  id: string;
  label?: string;
  register: any;
  name: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  min?: number;
  max?: number;
  required?: boolean;
};
