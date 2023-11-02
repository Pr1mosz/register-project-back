export interface NewCompetitorEntity extends Omit<CompetitorEntity, 'id'> {
    id?: string;
}

export interface CompetitorEntity {
    id: string;
    firstName: string;
    lastName: string;
    sex: string;
    mail: string;
    yearOfBirth: number;
    club: string;
    city: string;
}