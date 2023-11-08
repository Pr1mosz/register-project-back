import {CompetitionEntity, NewCompetitionEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';

type CompetitionRecordResults = [CompetitionEntity[], FieldPacket[]]
export class CompetitionRecord implements CompetitionEntity {
    public id: string;
    public name: string;
    public date: string;
    public city: string;
    public typeOfRun: string;

    constructor(obj: NewCompetitionEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa zawodów nie może być pusta, ani przekraczać 100 znaków.')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.date = obj.date;
        this.typeOfRun = obj.typeOfRun;
        this.city = obj.city;
    }


    static async getOne(id: string): Promise<CompetitionRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `competitions` WHERE `id` = :id", {
            id,
        }) as CompetitionRecordResults;
        return results.length === 0 ? null : new CompetitionRecord(results[0]);
    }
    static async listAll(): Promise<CompetitionRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `competitions` ORDER BY `date` ASC") as CompetitionRecordResults;
        return results.map(obj => new CompetitionRecord(obj))
    }

    async insert():Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new ValidationError('Cannot insert something that is already inserted!');
        }
        await pool.execute("INSERT INTO `competitions`(`id`, `name`, `date`, `city`, `typeOfRun`) VALUES(:id, :name, :date, :city, :typeOfRun)", this);
    }
}