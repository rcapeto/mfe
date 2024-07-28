export function getPath(baseURL: string, path: string) {
   if (!baseURL) {
     return `/${path}`;
   }
 
   return `/${baseURL}/${path}`;
 }
 