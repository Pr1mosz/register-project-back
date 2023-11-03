import {CompetitionEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type CompetitionRecordResults = [CompetitionEntity[], FieldPacket[]]
export class CompetitionRecord implements CompetitionEntity {
    public id: string;
    public name: string;
    public date: string;
    public typeOfRun: string;

    constructor(obj: CompetitionEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa zawodów nie może być pusta, ani przekraczać 100 znaków.')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.date = obj.date;
        this.typeOfRun = obj.typeOfRun;
    }

    static async listAll(): Promise<CompetitionRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `competitions` ORDER BY `date` ASC") as CompetitionRecordResults;
        return results.map(obj => new CompetitionRecord(obj))
    }
}