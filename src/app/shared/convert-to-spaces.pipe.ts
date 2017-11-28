import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    // replace the passed in character with space
    return value.replace(character, " ");
  }
}
