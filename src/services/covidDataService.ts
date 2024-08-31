import { useQuery, UseQueryResult } from '@tanstack/react-query';

//types
import type { AllCasesData, CountryData, HistoricalData } from '../types';

const fetchAllCases = async (): Promise<AllCasesData> => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

const fetchCountryData = async (): Promise<CountryData> => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

const fetchHistoricalData = async (): Promise<HistoricalData> => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const useAllCases = (): UseQueryResult =>
    useQuery({
        queryKey: ['allCases'],
        queryFn: fetchAllCases,
    });

export const useCountryData = (): UseQueryResult<CountryData, Error> =>
    useQuery<CountryData, Error>({
        queryKey: ['countryData'],
        queryFn: fetchCountryData,
    });

export const useHistoricalData = (): UseQueryResult<HistoricalData, Error> =>
    useQuery<HistoricalData, Error>({
        queryKey: ['historicalData'],
        queryFn: fetchHistoricalData,
    });