import {CompetitionRecord} from "../records/competition.record";

const defaultObj = {
    id: '2342',
    name: 'Bieg Świętojański',
}

test('Can build Competition', () => {
    const competition = new CompetitionRecord(defaultObj);

   expect(competition.name).toBe('Bieg Świętojański');
});
