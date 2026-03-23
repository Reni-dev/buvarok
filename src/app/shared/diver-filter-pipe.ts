import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diverFilter',
  standalone: true,
  pure: false
})
export class DiverFilterPipe implements PipeTransform {

  transform(divers: any[], search: string | null): any[] {
    if (!divers) return []
    if (!search) return divers  

    const lowerSearch = search.toLowerCase()

    return divers.filter(diver =>
      Object.values(diver).some(value =>
        value?.toString().toLowerCase().includes(lowerSearch)
      )
    )
  }
}
