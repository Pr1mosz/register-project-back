import {CompetitionRecord} from "../records/competition.record";

const defaultObj = {
    id: '2342',
    name: 'Bieg Świętojański',
    date: '2023-11-20',
    typeOfRun: 'bieg uliczny',
    city: 'Gdynia',
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

test('Validates to long name', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        name: 'Transcontinental Ultimate Endurance Challenge: Multi-Terrain Ultra-Distance Cycling and Running Race ',
    })).toThrow('Nazwa zawodów nie może być pusta, ani przekraczać 100 znaków.')
});

test('Validates empty date', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        date: '',
    })).toThrow('Data nie może być pusta')
});
test('Validates empty city', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        city: '',
    })).toThrow('Miasto nie może być puste, ani przekraczać 50 znaków.')
});

test('Validates to long city', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        city: 'Przedmieście Szczebrzeszyńskie Sobienie Kiełczewskie Pierwsze',
    })).toThrow('Miasto nie może być puste, ani przekraczać 50 znaków.')
});

test('Validates empty typeOfRun', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        typeOfRun: '',
    })).toThrow('Rodzaj biegu nie może być pusty, ani przekraczać 50 znaków.')
});

test('Validates to long typeOfRun', () => {
    expect(() => new CompetitionRecord({
        ...defaultObj,
        typeOfRun: 'Bieg pod górkę z przeszkodami po kamieniach i piasku',
    })).toThrow('Rodzaj biegu nie może być pusty, ani przekraczać 50 znaków.')
});