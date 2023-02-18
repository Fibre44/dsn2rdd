// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { makeUUID } from '@/tools/makeUUID'
import { createFolderTmp, createFolderProjet } from '@/tools/createFolder'
import { parseFormDatas } from '@/tools/parseFormDatas'
type Data = {
    uuid: string
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
    //Etape 1 création du dossier tmp si il n'existe pas
    createFolderTmp()
    //Etape 2 on va obtenir un uuid pour le projet
    const uuid = makeUUID()
    //Etape 3 on va créer un dossier dans tmp avec l'uuid
    createFolderProjet(uuid)
    //Etape 4 on va parser la requete pour sauvegarder les fichiers
    await parseFormDatas(req, uuid, true)
    res.status(200).json({ uuid: uuid })
}
