import {CompetitorRecord} from "../records/competitor.record";
import {pool} from "../utils/db";

afterAll(async () => {
    await pool.end();
});

test('CompetitorRecord.getOne returns data from database for one entry', async () => {
    const competitor = await CompetitorRecord.getOne('3c381627-9bfa-4fdc-a73c-abe75d7d04bf');

    expect(competitor).toBeDefined();
    expect(competitor.id).toBe('3c381627-9bfa-4fdc-a73c-abe75d7d04bf');
    expect(competitor.yearOfBirth).toBe(1954);
});

test('CompetitorRecord.getOne returns null form database for unexisting entry.', async () => {
    const competitor = await CompetitorRecord.getOne('---');

    expect(competitor).toBeNull();
});

test('CompetitorRecord.listAllCompetitorRegisteredOnCompetition returns array of found entries', async () => {
    const competitors = await CompetitorRecord.listAllCompetitorRegisteredOnCompetition('d6d71995-f984-44f1-96d7-ccab7973cdd8');

    expect(competitors).not.toEqual([]);
    expect(competitors[0].id).toBeDefined();
});

test('CompetitorRecord.listAllCompetitorRegisteredOnCompetition returns empty array', async () => {
    const competitors = await CompetitorRecord.listAllCompetitorRegisteredOnCompetition('');

    expect(competitors).toEqual([]);
});