import { Exclude, Expose } from 'class-transformer';
import { RedirectCode } from '@url-manager/enums/redirect-code.enum';

@Exclude()
export class GetRedirectDto {
  @Expose()
  readonly targetUrl: string;

  @Expose()
  readonly redirectCode: RedirectCode;
}
