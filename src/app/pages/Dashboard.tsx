"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Country } from "@/app/components/molecules/CountrySelector";
import DashboardLayout from "@/app/components/templates/DashboardLayout";
import {
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
} from "@/app/services/graphql/countries/query";

const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedMeasure, setSelectedMeasure] =
    useState<string>("life_expectancy");
  const [countryName, setCountryName] = useState<string>("");

  // Fetch countries
  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
  } = useQuery(GET_COUNTRIES);

  // Extract countries list
  const countries: Country[] =
    countriesData?.item.map((country: any) => ({
      id: country.id,
      name: country.name,
      iso2: country.iso2?.[0]?.value || "",
    })) || [];

  // Set default selected country and name when countries are loaded
  useEffect(() => {
    if (countries.length > 0 && !selectedCountry) {
      setSelectedCountry(countries[0].id);
      setCountryName(countries[0].name);
    }
  }, [countries, selectedCountry]);

  // Fetch country data
  console.log(selectedCountry, selectedMeasure);
  const {
    data: countryData,
    loading: countryDataLoading,
    error: countryDataError,
  } = useQuery(GET_COUNTRY_DATA, {
    variables: { country: selectedCountry, measure: selectedMeasure },
    skip: !selectedCountry || !selectedMeasure,
  });

  // Process chart data
  const chartData =
    countryData?.cube_cube_M6Lh5is0FtqUhZ
      ?.map((item: any) => ({
        year: Number(item.year),
        value: Number(item.value),
      }))
      .sort((a: any, b: any) => a.year - b.year) || [];

  // Update country name when selected country changes
  useEffect(() => {
    const selected = countries.find((c) => c.id === selectedCountry);
    if (selected) {
      setCountryName(selected.name);
    }
  }, [selectedCountry, countries]);

  const handleCountryChange = (countryId: string) => {
    setSelectedCountry(countryId);
  };

  const handleMeasureChange = (measureId: string) => {
    setSelectedMeasure(measureId);
  };

  return (
    <DashboardLayout
      title="Global Insights Dashboard"
      countries={countries}
      isCountriesLoading={countriesLoading}
      selectedCountry={selectedCountry}
      onSelectCountry={handleCountryChange}
      selectedMeasure={selectedMeasure}
      onSelectMeasure={handleMeasureChange}
      chartData={chartData}
      isDataLoading={countryDataLoading}
      dataError={countryDataError?.message || null}
      countryName={countryName}
    />
  );
};

export default Dashboard;
