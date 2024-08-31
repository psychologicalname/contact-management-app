//contactsSlice.ts
export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: 'active' | 'inactive';
}

export interface ContactsState {
    contacts: Contact[];
}

//ContactForm.tsx
export interface ContactFormProps {
    contactId: string | null;
    onFormSubmit: () => void;
}

//ContactsList.tsx
export interface ContactsListProps {
    onEditContact: (id: string) => void;
    onAddContact: () => void;
}

//covidDataService.ts
export interface AllCasesData {
    cases: number;
    deaths: number;
    recovered: number;
    updated: number;
}

export interface CountryData {
    [key: string]: {
        countryInfo: {
            lat: number;
            long: number;
            flag: string;
        };
        cases: number;
        deaths: number;
        recovered: number;
        active: number;
        country: string;
        updated: number;
    };
}

export interface HistoricalData {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
}


//Map.tsx
export interface CountryInfo {
    lat: number;
    long: number;
    flag: string;
}

export interface Country {
    country: string;
    countryInfo: CountryInfo;
    active: number;
    recovered: number;
    deaths: number;
}
