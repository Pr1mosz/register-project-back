import {CompetitionEntity} from "../types";
import {ValidationError} from "../utils/errors";

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
}