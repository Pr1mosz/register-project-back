import {CompetitionEntity} from "./competition.entity";
import {CompetitorEntity} from "../competitor";

export interface GetSingleCompetitionRes {
    competition: CompetitionEntity;
    competitorsList: CompetitorEntity[];
}