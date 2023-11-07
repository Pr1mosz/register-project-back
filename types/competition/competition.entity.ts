export interface NewCompetitionEntity extends Omit<CompetitionEntity, 'id'> {
    id?: string;
}
export interface CompetitionEntity {
    id: string;
    name: string;
    date: string;
    typeOfRun: string;
}