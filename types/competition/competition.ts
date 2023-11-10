import {CompetitionEntity} from "./competition.entity";
import {SimpleCompetitorEntity} from "../competitor";

export interface GetSingleCompetitionRes {
    competition: CompetitionEntity;
    competitorsList: SimpleCompetitorEntity[];
}