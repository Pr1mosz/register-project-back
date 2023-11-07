import {CompetitionEntity} from "./competition.entity";
import {CompetitorEntity, SimpleCompetitorEntity} from "../competitor";

export interface GetSingleCompetitionRes {
    competition: CompetitionEntity;
    competitorsList: SimpleCompetitorEntity[];
}