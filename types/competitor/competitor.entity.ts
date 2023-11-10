export interface NewCompetitorEntity extends Omit<CompetitorEntity, 'id'> {
    id?: string;
}

export enum CompetitorSex {
    men = 'M',
    women = 'K'
}

export interface SimpleCompetitorEntity {
    id: string;
    firstName: string;
    lastName: string;
    sex: CompetitorSex;
    club: string;
    city: string;
    competitionId: string;
}

export interface CompetitorEntity extends SimpleCompetitorEntity{
    mail: string;
    yearOfBirth: number;
}