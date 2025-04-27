
import React from 'react';
import SelectInput from '../atoms/SelectInput';

export interface Country {
  id: string;
  name: string;
  iso2: string;
}

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: string;
  onSelectCountry: (countryId: string) => void;
  isLoading?: boolean;
}

const CountrySelector = ({
  countries,
  selectedCountry,
  onSelectCountry,
  isLoading = false,
}: CountrySelectorProps) => {
  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  return (
    <SelectInput
      options={countryOptions}
      value={selectedCountry}
      onChange={onSelectCountry}
      placeholder="Select a country"
      label="Country"
      disabled={isLoading || countryOptions.length === 0}
    />
  );
};

export default CountrySelector;
