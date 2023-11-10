import {Router} from "express";
import {CompetitionRecord} from "../records/competition.record";
import {CompetitorRecord} from "../records/competitor.record";
import {GetSingleCompetitionRes} from "../types";

export const competitionRouter = Router()

    .get('/', async (req, res) => {
        const competitionList = await CompetitionRecord.listAll();
        res.json({competitionList});
    })

    .get('/:competitionId', async (req, res) => {
        const competition = await CompetitionRecord.getOne(req.params.competitionId);
        const competitorsList = await CompetitorRecord.listAllCompetitorRegisteredOnCompetition(req.params.competitionId)

        res.json({
            competition,
            competitorsList,
        } as GetSingleCompetitionRes);
    })

    .post('/', async (req, res) => {
        const competition = new CompetitionRecord(req.body);
        await competition.insert();
        res.json(competition);
    });