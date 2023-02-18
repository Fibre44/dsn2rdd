import formidable from "formidable"
import type { NextApiRequest } from 'next'
import path from "path";

export const parseFormDatas = async (
    req: NextApiRequest,
    date: string,
    saveLocally: boolean = true): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {};
    if (saveLocally) {
        options.uploadDir = path.join(process.cwd(), `/tmp/${date}`);
        options.filename = (name, ext, path, form) => {
            console.log(options.filename)

            return Date.now().toString() + "_" + path.originalFilename;
        };
    }
    options.maxFileSize = 4000 * 1024 * 1024;
    options.encoding = 'utf-8'
    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

