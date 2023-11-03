export interface NewCompetitionEntity extends Omit<CompetitionEntity, 'id'> {
    id?: string;
}
export interface CompetitionEntity {
    name: string;
    date: string;
    typeOfRun: string;
}