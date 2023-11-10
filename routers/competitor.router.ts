import {Router} from "express";
import {CompetitorRecord} from "../records/competitor.record";

export const competitorRouter = Router()

    .post('/', async (req, res) => {
        const competitor = new CompetitorRecord(req.body);
        await competitor.insert();
        res.json(competitor);
    });