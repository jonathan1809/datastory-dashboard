import {
  Box,
  Text,
  Select,
  Portal,
  createListCollection,
} from "@chakra-ui/react";
import { Label } from "recharts";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  disabled?: boolean;
}

const SelectInput = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
}: SelectInputProps) => {
  const collection = createListCollection({
    items: [
      ...options.map((option) => ({
        value: option.value,
        label: option.label,
      })),
    ],
  });

  return (
    <Box width="100%">
      <Select.Root
        collection={collection}
        size={"md"}
        disabled={disabled}
        value={[value]}
        onValueChange={({ value }) => {
          if (value && value.length > 0) {
            onChange(value[0]);
          }
        }}
      >
        <Select.HiddenSelect />
        {label && <Select.Label>{label}</Select.Label>}
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content>
              {options.map((option) => (
                <Select.Item item={option} key={option.value}>
                  {option.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
};

export default SelectInput;
