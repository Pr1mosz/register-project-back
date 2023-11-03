import {CompetitorRecord} from "../records/competitor.record";
import {CompetitorSex} from "../types";

const defaultObj = {
    id: '0',
    firstName: 'Tester',
    lastName: 'Testowy',
    sex: CompetitorSex.men,
    mail: 'a@b.c',
    yearOfBirth: 1985,
    club: '',
    city: '',
    competitionId: '',
}

test('Can build Competitor', () => {
    const competitor = new CompetitorRecord(defaultObj);

    expect(competitor.firstName).toBe('Tester');
    expect(competitor.lastName).toBe('Testowy');
    expect(competitor.sex).toBe('M');
    expect(competitor.mail).toBe('a@b.c')
    expect(competitor.yearOfBirth).toBe(1985);
});

test('Validates empty first name', () => {
    expect(() => new CompetitorRecord({
        ...defaultObj,
        firstName: '',
    })).toThrow('Imię nie może być puste, ani przekraczać 30 znaków.')
});

test('Validates to long first name', () => {
    expect(() => new CompetitorRecord({
        ...defaultObj,
        firstName: 'Albus Percival Wulfryk Brian Joseph',
    })).toThrow('Imię nie może być puste, ani przekraczać 30 znaków.')
});

test('Validates empty last name', () => {
    expect(() => new CompetitorRecord({
        ...defaultObj,
        lastName: '',
    })).toThrow('Nazwisko nie może być puste, ani przekraczać 50 znaków.')
});

test('Validates empty last name', () => {
    expect(() => new CompetitorRecord({
        ...defaultObj,
        lastName: 'asdflkiniesvfsdijlaksdnfialsndfiasdfjilasdjfilasdnfiasdn',
    })).toThrow('Nazwisko nie może być puste, ani przekraczać 50 znaków.')
});

test('Validates invalid year of birth', () => {
   expect(() => new CompetitorRecord({
        ...defaultObj,
        yearOfBirth: 1890,
    })).toThrow('Rok urodzenia musi być z przedziału od 1900 do 2020.')
});


// @TODO: Check all the validations