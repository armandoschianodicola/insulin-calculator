import {foodOptions} from '../data/foodOptions'

export abstract class FoodOption {
    constructor(
        public name: string,
        public carbs: number
    ) {}

    abstract get(): void;
}

export class ManualFoodOption extends FoodOption {

    get(): {'name': string, 'carbs': number}[] {
        return foodOptions
    }

}
