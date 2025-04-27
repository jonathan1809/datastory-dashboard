
import React from 'react';
import HeadingText from '../atoms/HeadingText';
import CountrySelector, { Country } from '../molecules/CountrySelector';
import MeasureSelector from '../molecules/MeasureSelector';
import DataChart from '../organisms/DataChart';

interface DashboardLayoutProps {
  title: string;
  countries: Country[];
  isCountriesLoading: boolean;
  selectedCountry: string;
  onSelectCountry: (countryId: string) => void;
  selectedMeasure: string;
  onSelectMeasure: (measureId: string) => void;
  chartData: { year: number; value: number }[];
  isDataLoading: boolean;
  dataError: string | null;
  countryName: string;
}

const DashboardLayout = ({
  title,
  countries,
  isCountriesLoading,
  selectedCountry,
  onSelectCountry,
  selectedMeasure,
  onSelectMeasure,
  chartData,
  isDataLoading,
  dataError,
  countryName,
}: DashboardLayoutProps) => {
  return (
    <div className="dashboard-container">
      <HeadingText level={1}>{title}</HeadingText>
      
      <div className="selector-container">
        <CountrySelector
          countries={countries}
          selectedCountry={selectedCountry}
          onSelectCountry={onSelectCountry}
          isLoading={isCountriesLoading}
        />
        
        <MeasureSelector
          selectedMeasure={selectedMeasure}
          onSelectMeasure={onSelectMeasure}
          isLoading={isCountriesLoading}
        />
      </div>
      
      <DataChart
        data={chartData}
        isLoading={isDataLoading}
        error={dataError}
        countryName={countryName}
        measureId={selectedMeasure}
      />
    </div>
  );
};

export default DashboardLayout;
