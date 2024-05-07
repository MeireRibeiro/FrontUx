import * as contentful from 'contentful';

export const client = contentful.createClient({
    space: "fit873cgelym",//import.meta.env.VITE_SPACE_ID,
    accessToken: "A_WvGSZvAwvkqSlILCThWGaa65EfGrtc3cph2FVCBUA"//import.meta.env.VITE_ACCESS_TOKEN
});


