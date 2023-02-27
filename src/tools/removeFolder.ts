import fs from 'fs';

export const removeFolder = (patchProjet: string): void => {

    fs.rm(`${patchProjet}`, { recursive: true }, (err) => {
        if (err) {
            // File deletion failed
            throw (`Erreur suppression des données ${patchProjet}`)
            ;
        }
        console.log(`Suppression du dossier /tmp/${patchProjet}`);

    })

}