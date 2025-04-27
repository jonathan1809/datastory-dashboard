"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import LoadingSpinner from "../atoms/LoadingSpinner";
import ErrorDisplay from "../atoms/ErrorDisplay";
import HeadingText from "../atoms/HeadingText";
import { AVAILABLE_MEASURES } from "../molecules/MeasureSelector";

interface DataPoint {
  year: number;
  value: number;
}

interface DataChartProps {
  data: DataPoint[];
  isLoading: boolean;
  error: string | null;
  countryName: string;
  measureId: string;
}

const formatYAxis = (value: number, measureId: string) => {
  if (measureId === "population") {
    return value >= 1000000
      ? `${(value / 1000000).toFixed(1)}M`
      : value >= 1000
      ? `${(value / 1000).toFixed(1)}K`
      : value.toString();
  }
  return value.toFixed(1);
};

const formatTooltipValue = (value: number, measureId: string) => {
  if (measureId === "population") {
    return value.toLocaleString();
  }
  if (measureId === "net_migration_rate") {
    return value.toFixed(2);
  }
  return value.toFixed(1);
};

const DataChart = ({
  data,
  isLoading,
  error,
  countryName,
  measureId,
}: DataChartProps) => {
  const measure = AVAILABLE_MEASURES.find((m) => m.id === measureId);
  const chartTitle =
    countryName && measure
      ? `${measure.name} in ${countryName}`
      : "No data selected";

  const getYAxisLabel = () => {
    switch (measureId) {
      case "life_expectancy":
        return "Years";
      case "population":
        return "People";
      case "net_migration_rate":
        return "Per 1000 population";
      default:
        return "";
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="font-medium">{`Year: ${label}`}</p>
          <p>{`${measure?.name}: ${formatTooltipValue(
            payload[0].value,
            measureId
          )}`}</p>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="chart-container">
        <HeadingText level={2}>{chartTitle}</HeadingText>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-container">
        <HeadingText level={2}>{chartTitle}</HeadingText>
        <ErrorDisplay message={error} />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="chart-container">
        <HeadingText level={2}>{chartTitle}</HeadingText>
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">
            No data available for the selected criteria
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <HeadingText level={2}>{chartTitle}</HeadingText>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="year"
            tick={{ fill: "#6b7280" }}
            tickLine={{ stroke: "#e5e7eb" }}
            axisLine={{ stroke: "#e5e7eb" }}
            label={{
              value: "Year",
              position: "insideBottom",
              offset: -10,
              fill: "#6b7280",
            }}
          />
          <YAxis
            tick={{ fill: "#6b7280" }}
            tickLine={{ stroke: "#e5e7eb" }}
            axisLine={{ stroke: "#e5e7eb" }}
            label={{
              value: getYAxisLabel(),
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle", fill: "#6b7280" },
            }}
            tickFormatter={(value) => formatYAxis(value, measureId)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "10px" }} />
          <Line
            type="monotone"
            dataKey="value"
            name={measure?.name || "Value"}
            stroke="#0EA5E9"
            strokeWidth={2}
            dot={{ fill: "#0EA5E9", r: 4 }}
            activeDot={{ r: 6, fill: "#0284C7" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
