import {CompetitionEntity} from "./competition.entity";

export type CreateCompetitionReq = Omit<CompetitionEntity, 'id'>;