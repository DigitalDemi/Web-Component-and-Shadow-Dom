export interface create_element{
    element_name: string;
    text?: string;
    id?:string;
    classes?:string[];
    attributes?: {[key:string]:string | undefined};
}

