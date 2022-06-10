export interface Character{
    name: string;
    image: string;
    status: string;
    species: string;
}

export interface PageData{
    results: Array<Character>;
}