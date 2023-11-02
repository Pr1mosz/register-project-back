import {CompetitorRecord} from "../records/competitor.record";

test('CompetitorRecord returns data from fatabase for one entry', async () => {
    const competitor = await CompetitorRecord.getOne('12354');

    expect(competitor).toBeDefined();
    expect(competitor.id).toBe('12354');
    expect(competitor.yearOfBirth).toBe(1985);
});

test('CompetitorRecord returns null form database for unexisting entry.', async () => {
    const competitor = await CompetitorRecord.getOne('---');

    expect(competitor).toBeNull();
})