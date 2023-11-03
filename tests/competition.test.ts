import {CompetitionRecord} from "../records/competition.record";
import {pool} from "../utils/db";


afterAll(async () => {
    await pool.end();
});

test('CompetitionRecord.listAll return data from database', async () => {
    const competition = await CompetitionRecord.listAll();

    expect(competition).toBeDefined();
})