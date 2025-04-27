
import React from 'react';
import SelectInput from '../atoms/SelectInput';

export interface Measure {
  id: string;
  name: string;
}

const AVAILABLE_MEASURES: Measure[] = [
  { id: 'life_expectancy', name: 'Life Expectancy' },
  { id: 'population', name: 'Population' },
  { id: 'net_migration_rate', name: 'Net Migration Rate' },
];

interface MeasureSelectorProps {
  selectedMeasure: string;
  onSelectMeasure: (measureId: string) => void;
  isLoading?: boolean;
}

const MeasureSelector = ({
  selectedMeasure,
  onSelectMeasure,
  isLoading = false,
}: MeasureSelectorProps) => {
  const measureOptions = AVAILABLE_MEASURES.map((measure) => ({
    value: measure.id,
    label: measure.name,
  }));

  return (
    <SelectInput
      options={measureOptions}
      value={selectedMeasure}
      onChange={onSelectMeasure}
      placeholder="Select a measure"
      label="Measure"
      disabled={isLoading}
    />
  );
};

export { AVAILABLE_MEASURES };
export default MeasureSelector;
