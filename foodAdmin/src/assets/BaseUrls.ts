export class BaseUrls {
    public static readonly BASE_HREF: string = "http://localhost:9090";

    public static readonly USER_GROUPURL: string = "user";


    public static getLoginUrl(key: string): string { return `${this.BASE_HREF}/${key}/login`; }
    public static getUrl(key: string): string { return `${this.BASE_HREF}/${key}/get`; }
}