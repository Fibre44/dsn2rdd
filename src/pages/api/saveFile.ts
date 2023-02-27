// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { makeUUID } from '@/tools/makeUUID'
import { createFolderTmp, createFolderProjet } from '@/tools/createFolder'
import { parseFormDatas } from '@/tools/parseFormDatas'
import { dsnParser } from '@/tools/dsnParser'
import path from 'path'
import { readdir } from 'node:fs/promises';
import { peopleNetIndividu } from '@/tools/peopleNet'

type Data = {
    url?: {
        uuid: string,
        fileNameList: string[],
    },
    error?: any
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        //Etape 1 création du dossier tmp si il n'existe pas
        createFolderTmp()
        //Etape 2 on va obtenir un uuid pour le projet
        const uuid = makeUUID()
        //Etape 3 on va créer un dossier dans tmp avec l'uuid
        createFolderProjet(uuid)
        //Etape 4 on va parser la requete pour sauvegarder les fichiers et obtenir le type d'export
        const formData = await parseFormDatas(req, uuid, true)
        const exportType = formData.fields.export
        //Etape 5 on va parser le fichier
        const patchProject = path.join(process.cwd() + "/tmp/", uuid)
        const files = await readdir(patchProject);
        const dsnList = []
        for (const file of files) {
            let filePatch = path.join(patchProject, file)
            let dsn = await dsnParser(filePatch)
            dsnList.push(dsn)

        }
        const fileNameList: string[] = []
        switch (exportType) {
            case 'peopleNet':
                await peopleNetIndividu(patchProject, dsnList, 'CFR_RDD_TMP_INDIVIDU.xlsx')
                fileNameList.push('CFR_RDD_TMP_INDIVIDU.xlsx')
                break
            default:
                throw (`Le type de de logiciel n'existe pas ${exportType}`)
        }

        res.status(200).json({
            url: {
                uuid,
                fileNameList
            }
        })
    } catch (e) {
        res.status(500).json({ error: e })
    }


}
