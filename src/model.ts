export interface Character {
    name: string;
    image: string;
    status: string;
    species: string;
    origin: Origin;
    location: Location;
}

export interface PageData {
    results: Array<Character>;
}

export interface Origin {
    originName: string;
    originUrl: string
}

export interface Location {
    locationName: string;
    locationUrl: string;
}