import fs from 'fs';
import path from "path";

export const createFolderTmp = (): void => {
    if (!fs.existsSync(process.cwd() + "/tmp/")) {
        fs.mkdirSync(process.cwd() + "/tmp/");
    }
    return
}

export const createFolderProjet = (uuid: string): void => {
    const patch = path.join(process.cwd() + "/tmp/", uuid)
    const pathString = patch.toString()
    fs.mkdirSync(pathString);
    return
}