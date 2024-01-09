import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string) {
        if (value) {
            let vals: string[] = value.split(" ");
            const calitalizedName = vals.map((val) => {
                return val.charAt(0).toUpperCase() + val.slice(1);
            });
            return calitalizedName.join(" ");
        }
        return value;
    }
}