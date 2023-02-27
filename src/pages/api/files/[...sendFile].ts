// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from 'node:fs/promises';
import path from 'node:path';

type Data = {
    name?: string,
    error?: string

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | string>
) {
    try {
        const params = req.query
        if (!params.sendFile) {
            return res.status(400).json({ error: 'Les paramètres sont absents' })
        }
        //const [uuid,fileName]=params.sendFile Erreur TypeScript à revoir
        const uuid = params.sendFile[0]
        const fileName = params.sendFile[1]
        if (!uuid || !fileName) {
            return res.status(400).json({ error: 'Les paramètres sont absents' })
        }
        const filePath = path.join(process.cwd() + "/tmp/", uuid, fileName)
        console.log(filePath)
        const excelBuffer = await readFile(filePath, { encoding: 'utf8' });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('X-Powered-By', 'NextJs')

        return res.send(excelBuffer)
    } catch (e) {
        return res.status(500).json({ error: 'Erreur impossible de trouver le fichier' })
    }

}


