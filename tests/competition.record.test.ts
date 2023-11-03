import {CompetitionRecord} from "../records/competition.record";

const defaultObj = {
    id: '2342',
    name: 'Bieg Świętojański',
    date: '2023-11-20',
    typeOfRun: 'bieg uliczny',
}

test('Can build Competition', () => {
    const competition = new CompetitionRecord(defaultObj);

   expect(competition.name).toBe('Bieg Świętojański');
   expect(competition.date).toBe('2023-11-20');
   expect(competition.typeOfRun).toBe('bieg uliczny')
});

test('Validates empty name', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        name: '',
    })).toThrow('Nazwa zawodów nie może być pusta, ani przekraczać 100 znaków.')
});

test('Validates to long first name', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        name: 'Transcontinental Ultimate Endurance Challenge: Multi-Terrain Ultra-Distance Cycling and Running Race ',
    })).toThrow('Nazwa zawodów nie może być pusta, ani przekraczać 100 znaków.')
});