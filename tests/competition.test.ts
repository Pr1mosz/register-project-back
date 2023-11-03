import {CompetitionRecord} from "../records/competition.record";

test('CompetitionRecord.listAll return data from database', async () => {
    const competition = await CompetitionRecord.listAll();

    expect(competition).toBeDefined();
})