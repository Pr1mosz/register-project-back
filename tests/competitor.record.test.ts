import {CompetitorRecord} from "../records/competitor.record";

const defaultObj = {
    id: '0',
    firstName: 'Tester',
    lastName: 'Testowy',
    sex: 'M',
    mail: 'a@b.c',
    yearOfBirth: 1985,
    club: '',
    city: '',
}

test('Can build Competitor', () => {
    const competitor = new CompetitorRecord(defaultObj);

    expect(competitor.firstName).toBe('Tester');
    expect(competitor.lastName).toBe('Testowy');
});

test('Validates invalid year of birth', () => {
   expect(() => new CompetitorRecord({
        ...defaultObj,
        yearOfBirth: 1890,
    })).toThrow('Rok urodzenia musi być z przedziału od 1900 do 2020.')
});

// @TODO: Check all the validations