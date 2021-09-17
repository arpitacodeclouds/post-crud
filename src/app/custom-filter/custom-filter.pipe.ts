import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], search_post: string): any[] {
    if (!items) {
      return [];
    }
    if (!search_post) {
      return items;
    } 
    search_post = search_post.toLocaleLowerCase();

    return Object.values(items).filter((item) => {
        return item.title.toLocaleLowerCase().includes(search_post);
    });
  }

}
