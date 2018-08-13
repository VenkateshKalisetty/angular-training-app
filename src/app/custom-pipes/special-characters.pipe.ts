import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'specialcharacters'
})

export class SpecialCharactersPipe implements PipeTransform{
    transform(input: string): string {
        if(!input){
            return "";
        }else if(/[\W]/.test(input)){
            return input.replace(/\W/g, '\xa0');
        }else{
            return input;
        }
    }
}