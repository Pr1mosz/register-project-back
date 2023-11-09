import {CompetitionRecord} from "../records/competition.record";
import {pool} from "../utils/db";

const defaultObj = {
    name: '[test] Bieg Świętojański',
    date: '2023-11-20',
    typeOfRun: 'bieg uliczny',
    city: 'Gdynia',
}

afterAll(async () => {
    await pool.end();
});

test('CompetitionRecord.listAll return data from database', async () => {
    const competition = await CompetitionRecord.listAll();

    expect(competition).toBeDefined();
})

test('CompetitionRecord.insert returns new UUID.', async () => {
    const competition = new CompetitionRecord(defaultObj);
    await competition.insert();

    expect(competition.id).toBeDefined();
    expect(typeof competition.id).toBe('string')
})

test('CompetitionRecord.insert inserts data to database.', async () => {
    const competition = new CompetitionRecord(defaultObj);
    await competition.insert();

    const foundCompetition = await CompetitionRecord.getOne(competition.id);
    expect(foundCompetition).toBeDefined();
    expect(foundCompetition).not.toBeNull();
    expect(foundCompetition.id).toBe(competition.id);
})