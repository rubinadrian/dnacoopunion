import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform
{
    /**
     *
     * @param sanitizer
     */
    constructor(
        private sanitizer: DomSanitizer
    ){}

    /**
     *
     * @param v
     * @returns {SafeHtml}
     */
    transform(v:string):SafeHtml
    {
        return this.sanitizer.bypassSecurityTrustHtml(v);
    }
}