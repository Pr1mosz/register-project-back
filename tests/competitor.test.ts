import {CompetitorRecord} from "../records/competitor.record";
import {pool} from "../utils/db";

afterAll(async () => {
    await pool.end();
});

test('CompetitorRecord.getOne returns data from database for one entry', async () => {
    const competitor = await CompetitorRecord.getOne('12354');

    expect(competitor).toBeDefined();
    expect(competitor.id).toBe('12354');
    expect(competitor.yearOfBirth).toBe(1985);
});

test('CompetitorRecord.getOne returns null form database for unexisting entry.', async () => {
    const competitor = await CompetitorRecord.getOne('---');

    expect(competitor).toBeNull();
});

test('CompetitorRecord.listAllCompetitorRegisteredOnCompetition returns array of found entries', async () => {
    const competitors = await CompetitorRecord.listAllCompetitorRegisteredOnCompetition('23456');

    expect(competitors).not.toEqual([]);
    expect(competitors[0].id).toBeDefined();
});

test('CompetitorRecord.listAllCompetitorRegisteredOnCompetition returns empty array', async () => {
    const competitors = await CompetitorRecord.listAllCompetitorRegisteredOnCompetition('');

    expect(competitors).toEqual([]);
});