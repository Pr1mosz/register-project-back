export interface NewCompetitorEntity extends Omit<CompetitorEntity, 'id'> {
    id?: string;
}

export enum CompetitorSex {
    men = 'M',
    women = 'K'
}

export interface CompetitorEntity {
    id: string;
    firstName: string;
    lastName: string;
    sex: CompetitorSex;
    mail: string;
    yearOfBirth: number;
    club: string;
    city: string;
    competitionId: string;
}