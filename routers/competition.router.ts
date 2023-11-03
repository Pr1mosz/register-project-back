import {Router} from "express";
import {CompetitionRecord} from "../records/competition.record";

export const competitionRouter = Router()

    .get('/', async (req, res) => {
        const competitionList = await CompetitionRecord.listAll()
        res.json(competitionList);
    })