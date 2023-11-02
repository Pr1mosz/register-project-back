import {CompetitorEntity, NewCompetitorEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type CompetitorRecordResults = [CompetitorEntity[], FieldPacket[]]
export class CompetitorRecord implements CompetitorEntity {
    public id: string;
    public firstName: string;
    public lastName: string;
    public sex: string;
    public yearOfBirth: number;
    public mail: string;
    public city: string;
    public club: string;
    constructor(obj: NewCompetitorEntity) {
        if (!obj.firstName || obj.firstName.length > 50) {
            throw new ValidationError('Imię nie może być puste, ani przekraczać 50 znaków.')
        }

        if (!obj.lastName || obj.lastName.length > 10) {
            throw new ValidationError('Nazwisko nie może być puste, ani przekraczać 100 znaków.')
        }

        if (obj.yearOfBirth < 1900 || obj.yearOfBirth > 2020) {
            throw new ValidationError('Rok urodzenia musi być z przedziału od 1900 do 2020.')
        }

        // @TODO: Validate all property of competitor class

        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.sex = obj.sex;
        this.yearOfBirth = obj.yearOfBirth;
        this.mail = obj.mail;
        this.city = obj.city;
        this.club = obj.club;

    }

    static async getOne(id: string): Promise<CompetitorRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `competitors` WHERE id = :id", {
            id,
        }) as CompetitorRecordResults;

        return results.length === 0 ? null : new CompetitorRecord(results[0]);
    }


}