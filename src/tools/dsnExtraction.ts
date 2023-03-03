import Excel from 'exceljs'
import type { DatasDSN } from './dsnParser';

export const dsnExtraction = async (patch: string, datasDsn: DatasDSN[], fileName: string) => {
    //Attention on utilise la méthode sync qui bloque JS voir pour passer sur l'API Async
    //Création du fichier
    const workbook = new Excel.Workbook();
    workbook.addWorksheet('Sommaire', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Synthèse reprise contrat', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Synthèse SRE', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('DSN', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Etablissement', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Organismes sociaux', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Individus', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Contrat travail', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Affiliations', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Base', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Base assujeti', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Cotisations', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Taux AT', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Taux versement transport', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Absences', { properties: { tabColor: { argb: 'FFC0000' } } });
    workbook.addWorksheet('Primes', { properties: { tabColor: { argb: 'FFC0000' } } });

    //Onglet sommaire
    const summarySheet = workbook.getWorksheet('Sommaire')
    summarySheet.getCell('A1').value = 'Logiciel dsn2Rdd'
    summarySheet.getCell('B1').value = 'Version beta 1'
    summarySheet.getCell('A2').value = 'Github : '
    summarySheet.getCell('B2').value = {
        text: 'Code source',
        hyperlink: 'https://github.com/Fibre44/dsn2rdd',
    };
    summarySheet.getCell('A4').value = 'Index'
    summarySheet.getCell('A5').value = { text: 'DSN', hyperlink: '#\'DSN\'!A1' };
    summarySheet.getCell('A6').value = { text: 'Etablissement', hyperlink: '#\'Etablissement\'!A1' };
    summarySheet.getCell('A7').value = { text: 'Organismes sociaux', hyperlink: '#\'Organismes sociaux\'!A1' };
    summarySheet.getCell('A8').value = { text: 'Individus', hyperlink: '#\'Individus\'!A1' };
    summarySheet.getCell('A9').value = { text: 'Contrat travail', hyperlink: '#\'Contrat travail\'!A1' };
    summarySheet.getCell('A10').value = { text: 'Affiliations', hyperlink: '#\'Affiliations\'!A1' };
    summarySheet.getCell('A11').value = { text: 'Base', hyperlink: '#\'Base\'!A1' };
    summarySheet.getCell('A12').value = { text: 'Base assujeti', hyperlink: '#\'Base assujeti\'!A1' };
    summarySheet.getCell('A13').value = { text: 'Cotisations', hyperlink: '#\'Cotisations\'!A1' };
    summarySheet.getCell('A14').value = { text: 'Taux AT', hyperlink: '#\'Taux AT\'!A1' };
    summarySheet.getCell('A15').value = { text: 'Taux versement transport', hyperlink: '#\'Taux versement transport\'!A1' };
    summarySheet.getCell('A16').value = { text: 'Cotisations', hyperlink: '#\'Absences\'!A1' };
    summarySheet.getCell('A17').value = { text: 'Cotisations', hyperlink: '#\'Absences\'!A1' };


    //Onglet DSN

    for (let data of datasDsn) {
        //Gestion de la feuille DSN
        const dsnSheet = workbook.getWorksheet('DSN')
        dsnSheet.columns = [
            { header: 'Mois', key: 'month', width: 10, outlineLevel: 1 },
            { header: 'Nom du logiciel', key: 'softwareName', width: 25 },
            { header: 'Fournisseur', key: 'provider', width: 10 },
            { header: 'Version du logiciel', key: 'softwareVersion', width: 10, outlineLevel: 1 },
            { header: 'type', key: 'type', width: 10, outlineLevel: 1 },
            { header: 'Version de la norme', key: 'dsn', width: 10, outlineLevel: 1 },

        ];
        dsnSheet.addRow({
            month: data.dsnInfo.month,
            softwareName: data.dsnInfo.softwareName,
            provider: data.dsnInfo.provider,
            softwareVersion: data.dsnInfo.softwareName,
            type: data.dsnInfo.type,
            dsn: data.dsnInfo.dsnVersion
        })
        //Gestion des établissements
        const establishmentSheet = workbook.getWorksheet('Etablissement')
        establishmentSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'NIC', key: 'nic', width: 25 },
            { header: 'Code APET', key: 'apet', width: 25 },
            { header: 'Adresse', key: 'adress1', width: 25 },
            { header: 'Complément adresse', key: 'adress2', width: 25 },
            { header: 'Code postal', key: 'codeZip', width: 25 },

        ]
        for (let establishment of data.establishement) {
            establishmentSheet.addRow({
                month: data.dsnInfo.month,
                nic: establishment.nic,
                apet: establishment.apet,
                adress1: establishment.adress1,
                adress2: establishment.adress2,
                codeZip: establishment.codeZip,
            })
        }

        //Onglet synthèse reprise des contrats

        const rddContractSheet = workbook.getWorksheet('Synthèse reprise contrat')
        rddContractSheet.columns = [
            { header: 'Mois', key: 'month', width: 10, outlineLevel: 1 },
            { header: 'Matricule', key: 'employeeId', width: 10, outlineLevel: 1 },
            { header: 'Date début contrat', key: 'startDate', width: 10, outlineLevel: 1 },
            { header: 'Date fin de contrat', key: 'endDate', width: 10, outlineLevel: 1 },
            { header: 'Numéro de contrat', key: 'idContract', width: 10, outlineLevel: 1 },
        ]

        for (let contract of data.workContract) {
            rddContractSheet.addRow({
                month: data.dsnInfo.month,
                employeeId: contract.employeeId,
                startDate: contract.startDate,
                endDate: contract?.contractEndDate,
                idContract: contract.contract
            })

        }

        //Synthèse SRE 

        const sreSheet = workbook.getWorksheet('Synthèse SRE')

        sreSheet.columns = [
            { header: 'Mois', key: 'month', width: 10, outlineLevel: 1 },
            { header: 'Matricule', key: 'employeeId', width: 10, outlineLevel: 1 },
            { header: '[FP] Indice brut d’origine', key: 'indice', width: 10, outlineLevel: 1 },
            { header: '[FP] Indice brut de cotisation dans un emploi supérieur (article 15)', key: 'indiceCot', width: 10, outlineLevel: 1 },
            { header: '[FP] Indemnité mensuelle de technicité', key: 'bonus040', width: 10, outlineLevel: 1 },
            { header: '[FP] Indemnité de sujétions spéciales', key: 'bonus041', width: 10, outlineLevel: 1 },
            { header: '[FP] Indemnité de risque', key: 'bonus042', width: 10, outlineLevel: 1 },
            { header: '[FP] Prime de sujétions spéciales', key: 'bonus043', width: 10, outlineLevel: 1 },
            { header: '[FP] Indemnité de sujétion spécifique', key: 'bonus044', width: 10, outlineLevel: 1 },
            { header: '[FP] SRE – Base brute pension civile et militaire', key: 'base46', width: 10, outlineLevel: 1 },
            { header: '[FP] SRE – Base brute accessoires pension civile et militaire', key: 'base47', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur ISS ou PSS (part salariale)', key: 'contribution313', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur ISS ou PSS (part patronale) ', key: 'contribution314', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur IR (part salariale)', key: 'contribution315', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur IR (part patronale)', key: 'contribution316', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur IMT (part salariale)', key: 'contribution317', width: 10, outlineLevel: 1 },
            { header: '[FP] Cotisations pour pension sur IMT (part patronale)', key: 'contribution318', width: 10, outlineLevel: 1 },
            { header: `[FP] Cotisations pour l'allocation temporaire d'invalidité (part patronale)`, key: 'contribution319', width: 10, outlineLevel: 1 },
            { header: `[FP] Surcotisation (part salariale)`, key: 'contribution320', width: 10, outlineLevel: 1 },
            { header: `[FP] Rachat des années d'études (part salariale)`, key: 'contribution321', width: 10, outlineLevel: 1 },

        ]

        for (let employee of data.employees) {
            let month = data.dsnInfo.month
            let employeeId = employee.employeeId
            let employeeContract = data.workContract.find(contract => contract.employeeId === employeeId)
            let employeeBonus = data.bonus.filter(bonus => bonus.employeeId === employeeId)
            let bonus040 = employeeBonus.find(bonus => bonus.typeBonus === '040')
            let bonus041 = employeeBonus.find(bonus => bonus.typeBonus === '041')
            let bonus042 = employeeBonus.find(bonus => bonus.typeBonus === '042')
            let bonus043 = employeeBonus.find(bonus => bonus.typeBonus === '043')
            let bonus044 = employeeBonus.find(bonus => bonus.typeBonus === '044')

            let employeeContribution = data.contribution.filter(contribution => contribution.employeeId === employeeId)
            let contribution313 = employeeContribution.find(contribution => contribution.idContribution === '313')
            let contribution314 = employeeContribution.find(contribution => contribution.idContribution === '314')
            let contribution315 = employeeContribution.find(contribution => contribution.idContribution === '315')
            let contribution316 = employeeContribution.find(contribution => contribution.idContribution === '316')
            let contribution317 = employeeContribution.find(contribution => contribution.idContribution === '317')
            let contribution318 = employeeContribution.find(contribution => contribution.idContribution === '318')
            let contribution319 = employeeContribution.find(contribution => contribution.idContribution === '319')
            let contribution320 = employeeContribution.find(contribution => contribution.idContribution === '320')
            let contribution321 = employeeContribution.find(contribution => contribution.idContribution === '321')

            if (employeeContract) {
                sreSheet.addRow({
                    month: month,
                    employeeId: employeeId,
                    indice: employeeContract.fpIndice,
                    indiceCot: employeeContract.article15,
                    bonus040: bonus040 ? bonus040 : '',
                    bonus041: bonus041 ? bonus041 : '',
                    bonus042: bonus042 ? bonus042 : '',
                    bonus043: bonus043 ? bonus043 : '',
                    bonus044: bonus040 ? bonus044 : '',
                    contribution313: contribution313 ? contribution313 : '',
                    contribution314: contribution314 ? contribution314 : '',
                    contribution315: contribution315 ? contribution315 : '',
                    contribution316: contribution316 ? contribution316 : '',
                    contribution317: contribution317 ? contribution317 : '',
                    contribution318: contribution318 ? contribution318 : '',
                    contribution319: contribution319 ? contribution319 : '',
                    contribution320: contribution320 ? contribution320 : '',
                    contribution321: contribution321 ? contribution321 : '',

                })
            }
        }

        //Gestion des OPS

        const contributionFundSheet = workbook.getWorksheet('Organismes sociaux')
        contributionFundSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Code DSN', key: 'codeDsn', width: 25 },
            { header: 'Organisme', key: 'name', width: 25 },
            { header: 'Adresse', key: 'adress1', width: 25 },
            { header: 'Code postal', key: 'codeZip', width: 25 },
            { header: 'Ville', key: 'city', width: 25 },
            { header: 'siret', key: 'siret', width: 25 },
        ]

        for (let contributionFund of data.contributionFund) {
            contributionFundSheet.addRow({
                month: data.dsnInfo.month,
                codeDsn: contributionFund.codeDsn,
                name: contributionFund.name,
                adress1: contributionFund.adress1,
                codeZip: contributionFund.codeZip,
                city: contributionFund.city,
                siret: contributionFund.siret,
            })
        }
        //Gestion des individus
        const employeeSheet = workbook.getWorksheet('Individus')
        employeeSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Matricule', key: 'employeeId', width: 25 },
            { header: 'Numéro de Sécurité Sociale', key: 'numSS', width: 25 },
            { header: 'Département de naissance', key: 'codeZipBith', width: 25 },
            { header: 'Pays de naissance', key: 'countryBirth', width: 25 },
            { header: 'Nom', key: 'lastname', width: 25 },
            { header: 'Nom de famille', key: 'surname', width: 25 },
            { header: 'Prénom', key: 'firstname', width: 25 },
            { header: 'Sexe', key: 'sex', width: 25 },
            { header: 'Date anniversaire', key: 'birthday', width: 25 },
            { header: 'Lieu de naissance', key: 'placeOfBith', width: 25 },
            { header: 'Adresse', key: 'address1', width: 25 },
            { header: 'Complément de la localisation de la construction', key: 'address2', width: 25 },
            { header: 'Service de distribution, complément de localisation de la voie', key: 'address3', width: 25 },
            { header: 'Code postal', key: 'codeZip', width: 25 },
            { header: 'Ville', key: 'city', width: 25 },
            { header: 'Email', key: 'email', width: 25 },
            { header: 'Niveau etude', key: 'graduate', width: 25 },
            { header: `Niveau de diplôme préparé par l'individu`, key: 'v', width: 25 },

        ]
        for (let employee of data.employees) {
            employeeSheet.addRow({
                month: data.dsnInfo.month,
                employeeId: employee.employeeId,
                numSS: employee.numSS,
                codeZipBith: employee.codeZipBith,
                countryBirth: employee.countryBirth,
                lastname: employee.lastname,
                surname: employee.surname,
                firstname: employee.firstname,
                sex: employee.sex,
                birthday: employee.birthday,
                placeOfBith: employee.placeOfBith,
                address1: employee.address1,
                address2: employee?.address2,
                address3: employee?.address3,
                codeZip: employee.codeZip,
                city: employee.city,
                email: employee.email,
                graduate: employee?.graduate,
                studies: employee?.studies
            })
        }

        //Gestion des contrats de travail
        const workContractSheet = workbook.getWorksheet('Contrat travail')
        workContractSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Matricule', key: 'employeeId', width: 25 },
            { header: 'Date début de contrat', key: 'startDate', width: 25 },
            { header: 'Date de fin prévisionnelle du contrat', key: 'endDate', width: 25 },
            { header: 'Statut du salarié (conventionnel)', key: 'status', width: 25 },
            { header: 'Code statut catégoriel Retraite Complémentaire obligatoire', key: 'retirement', width: 25 },
            { header: 'Code profession et catégorie socioprofessionnelle (PCS-ESE)', key: 'pcs', width: 25 },
            { header: 'Code complément PCS-ESE (pour la fonction publique : référentiels NEH, NET et grade de la NNE)', key: 'pcsBis', width: 25 },
            { header: `Libellé de l'emploi`, key: 'employmentLabel', width: 25 },
            { header: 'Nature du contrat', key: 'contract', width: 25 },
            { header: 'Dispositif de politique publique et conventionnel', key: 'publicDispPolitic', width: 25 },
            { header: 'Numéro du contrat', key: 'contractId', width: 25 },
            { header: 'Unité de mesure de la quotité de travail', key: 'DNACodeUnitTime', width: 25 },
            { header: `Quotité de travail de référence de l'entreprise pour la catégorie de salarié`, key: 'DSNWorkQuotaEstablishment', width: 25 },
            { header: `Quotité de travail du contrat`, key: 'DSNWorkQuotaWorkContract', width: 25 },
            { header: `Modalité d'exercice du temps de travail`, key: 'workTime', width: 25 },
            { header: `Complément de base au régime obligatoire`, key: 'ss', width: 25 },
            { header: `Code convention collective applicable`, key: 'idcc', width: 25 },
            { header: `Code régime de base risque maladie`, key: 'mal', width: 25 },
            { header: `Identifiant du lieu de travail`, key: 'estabWorkPlace', width: 25 },
            { header: `Code régime de base risque vieillesse`, key: 'vieillesse', width: 25 },
            { header: `Motif de recours`, key: 'pattern', width: 25 },
            { header: `Code caisse professionnelle de congés payés`, key: 'vacation', width: 25 },
            { header: `Taux de déduction forfaitaire spécifique pour frais professionnels`, key: 'rateProfessionalFess', width: 25 },
            { header: `Travailleur à l'étranger au sens du code de la Sécurité Sociale`, key: 'foreigner', width: 25 },
            { header: `Motif d'exclusion DSN`, key: 'exclusionDsn', width: 25 },
            { header: `Statut d'emploi du salarié`, key: 'statusEmployment', width: 25 },
            { header: `Code affectation Assurance chômage`, key: 'unemployment', width: 25 },
            { header: `Numéro interne employeur public`, key: 'idPublicEmployer', width: 25 },
            { header: `Type de gestion de l’Assurance chômage`, key: 'methodUnemployment', width: 25 },
            { header: `Date d'adhésion`, key: 'joiningDate', width: 25 },
            { header: `Date de dénonciation`, key: 'denunciationDate', width: 25 },
            { header: `Date d’effet de la convention de gestion`, key: 'dateManagementAgreement', width: 25 },
            { header: `Numéro de convention de gestion`, key: 'idAgreement', width: 25 },
            { header: `Code délégataire du risque maladie`, key: 'healthRiskDelegate', width: 25 },
            { header: `Code emplois multiples`, key: 'multipleJobCode', width: 25 },
            { header: `Code employeurs multiples`, key: 'multipleEmployerCode', width: 25 },
            { header: `Code régime de base risque accident du travail`, key: 'workAccidentRisk', width: 25 },
            { header: `Code risque accident du travail`, key: 'idWorkAccidentRisk', width: 25 },
            { header: `Positionnement dans la convention collective`, key: 'positionCollectiveAgreement', width: 25 },
            { header: `Code statut catégoriel APECITA`, key: 'apecita', width: 25 },
            { header: `Taux de cotisation accident du travail`, key: 'rateAt', width: 25 },
            { header: `Salarié à temps partiel cotisant à temps plein`, key: 'contributingFullTime', width: 25 },
            { header: `Rémunération au pourboire`, key: 'tip', width: 25 },
            { header: `Identifiant de l’établissement utilisateur`, key: 'useEstablishmentId', width: 25 },
            { header: `Numéro de label « Prestataire de services du spectacle vivant`, key: 'livePerfomances', width: 25 },
            { header: `Numéro de licence entrepreneur spectacle`, key: 'licences', width: 25 },
            { header: `Numéro objet spectacle`, key: 'showId', width: 25 },
            { header: `Statut organisateur spectacle`, key: 'showrunner', width: 25 },
            { header: `[FP] Code complément PCS-ESE pour la fonction publique d'Etat(emploi de la NNE)`, key: 'fpPcs', width: 25 },
            { header: `Nature du poste`, key: 'typePosition', width: 25 },
            { header: `[FP] Quotité de travail de référence de l'entreprise pour la catégorie de salarié dans l’hypothèse d’un poste à temps complet`, key: 'fpQuotite', width: 25 },
            { header: `Taux de travail à temps partiel`, key: 'partTimeWork', width: 25 },
            { header: `Code catégorie de service`, key: 'serviceCode', width: 25 },
            { header: `[FP] Indice brut`, key: 'fpIndice', width: 25 },
            { header: `[FP] Indice majoré`, key: 'fpIndiceMaj', width: 25 },
            { header: `[FP] Nouvelle bonification indiciaire (NBI)`, key: 'NBI', width: 25 },
            { header: `[FP] Indice brut d'origine`, key: 'indiceOriginal', width: 25 },
            { header: `[FP] Indice brut de cotisation dans un emploi supérieur (article 15)`, key: 'article15', width: 25 },
            { header: `[FP] Ancien employeur public`, key: 'oldEstablishment', width: 25 },
            { header: `[FP] Indice brut d’origine ancien salarié employeur public`, key: 'oldIndice', width: 25 },
            { header: `[FP] Indice brut d’origine sapeur-pompier professionnel (SPP)`, key: 'SPP', width: 25 },
            { header: `[FP] Maintien du traitement d'origine d'un contractuel titulaire`, key: 'contractual', width: 25 },
            { header: `[FP] Type de détachement`, key: 'secondment', width: 25 },
            { header: `Genre de navigation`, key: 'browsing', width: 25 },
            { header: `Taux de service actif`, key: 'activityDutyRate', width: 25 },
            { header: `Niveau de rémunération`, key: 'payLevel', width: 25 },
            { header: `Echelon`, key: 'echelon', width: 25 },
            { header: `Coefficient`, key: 'coefficient', width: 25 },
            { header: `Statut BOETH`, key: 'boeth', width: 25 },
            { header: `Complément de dispositif de politique publique`, key: 'addPublicPolicy', width: 25 },
            { header: `Cas de mise à disposition externe d'un individu de l'établissement`, key: 'arrangement', width: 25 },
            { header: `Catégorie de classement finale`, key: 'finaly', width: 25 },
            { header: `Identifiant du contrat d'engagement maritime`, key: 'navy', width: 25 },
            { header: `Collège (CNIEG)`, key: 'cnieg', width: 25 },
            { header: `Forme d'aménagement du temps de travail dans le cadre de l'activité partielle`, key: 'activityRate', width: 25 },
            { header: `Grade`, key: 'grade', width: 25 },
            { header: `[FP] Indice complément de traitement indiciaire (CTI)`, key: 'cti', width: 25 },
            { header: `FINESS géographique`, key: 'finess', width: 25 },

        ]

        for (let workContract of data.workContract) {
            workContractSheet.addRow({
                month: data.dsnInfo.month,
                employeeId: workContract.employeeId,
                startDate: workContract.startDate,
                endDate: workContract?.contractEndDate,
                status: workContract?.status,
                retirement: workContract.retirement,
                pcs: workContract.pcs,
                pcsBis: workContract.pcsBis,
                employmentLabel: workContract.employmentLabel,
                contract: workContract.contract,
                publicDispPolitic: workContract.publicDispPolitic,
                contractId: workContract.contract,
                DNACodeUnitTime: workContract.DNACodeUnitTime,
                DSNWorkQuotaEstablishment: workContract.DSNWorkQuotaEstablishment,
                DSNWorkQuotaWorkContract: workContract.DSNWorkQuotaWorkContract,
                workTime: workContract.workTime,
                ss: workContract.ss,
                idcc: workContract.idcc,
                mal: workContract.mal,
                estabWorkPlace: workContract.estabWorkPlace,
                vieillesse: workContract.vieillesse,
                pattern: workContract.pattern,
                vacation: workContract.vacation,
                rateProfessionalFess: workContract?.rateProfessionalFess,
                foreigner: workContract?.foreigner,
                exclusionDsn: workContract?.exclusionDsn,
                statusEmployment: workContract.statusEmployment,
                unemployment: workContract.unemployment,
                idPublicEmployer: workContract.idPublicEmployer,
                methodUnemployment: workContract.methodUnemployment,
                joiningDate: workContract.joiningDate,
                denunciationDate: workContract.denunciationDate,
                dateManagementAgreement: workContract.dateManagementAgreement,
                idAgreement: workContract.idAgreement,
                healthRiskDelegate: workContract.healthRiskDelegate,
                multipleJobCode: workContract.multipleJobCode,
                multipleEmployerCode: workContract.multipleEmployerCode,
                workAccidentRisk: workContract.workAccidentRisk,
                idWorkAccidentRisk: workContract.idWorkAccidentRisk,
                positionCollectiveAgreement: workContract.positionCollectiveAgreement,
                apecita: workContract.apecita,
                rateAt: workContract.rateAt,
                contributingFullTime: workContract.contributingFullTime,
                tip: workContract.tip,
                useEstablishmentId: workContract.useEstablishmentId,
                livePerfomances: workContract?.livePerfomances,
                licences: workContract?.licences,
                showId: workContract?.showId,
                showrunner: workContract?.showrunner,
                fpPcs: workContract?.fpPcs,
                typePosition: workContract?.typePosition,
                fpQuotite: workContract?.fpQuotite,
                partTimeWork: workContract?.partTimeWork,
                serviceCode: workContract?.serviceCode,
                fpIndice: workContract?.fpIndice,
                fpIndiceMaj: workContract?.fpIndiceMaj,
                NBI: workContract?.NBI,
                indiceOriginal: workContract?.indiceOriginal,
                article15: workContract?.article15,
                oldEstablishment: workContract?.oldEstablishment,
                oldIndice: workContract?.oldIndice,
                SPP: workContract?.SPP,
                contractual: workContract?.contractual,
                secondment: workContract?.secondment,
                browsing: workContract?.browsing,
                activityDutyRate: workContract?.activityDutyRate,
                payLevel: workContract?.payLevel,
                echelon: workContract?.echelon,
                coefficient: workContract?.coefficient,
                boeth: workContract?.boeth,
                addPublicPolicy: workContract?.addPublicPolicy,
                arrangement: workContract?.arrangement,
                finaly: workContract?.finaly,
                navy: workContract?.navy,
                cnieg: workContract?.cnieg,
                activityRate: workContract?.activityRate,
                grade: workContract?.grade,
                cti: workContract?.cti,
                finess: workContract?.finess
            })
        }
        //Gestion des bases 
        const baseSheet = workbook.getWorksheet('Base')
        baseSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Matricule', key: 'employeeId', width: 25 },
            { header: 'Code de base assujettie', key: 'idBase', width: 25 },
            { header: 'Date de début de période de rattachement', key: 'startDate', width: 25 },
            { header: 'Date de fin de période de rattachement', key: 'endDate', width: 25 },
            { header: 'Montant', key: 'amount', width: 25 },
            { header: 'Identifiant technique Affiliation', key: 'idTechAff', width: 25 },
            { header: 'Numéro du contrat', key: 'idContract', width: 25 },
            { header: 'CRM', key: 'crm', width: 25 },

        ]
        for (let base of data.base) {
            baseSheet.addRow({
                month: base.date,
                employeeId: base.employeeId,
                idBase: base.idBase,
                startDate: base.startDate,
                endDate: base.endDate,
                amount: base.amount,
                idTechAff: base?.idTechAff,
                idContract: base?.idContract,
                crm: base?.crm

            })
        }

        //Gestion des bases assujetis

        const baseSubjectSheet = workbook.getWorksheet('Base assujeti')

        baseSubjectSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Matricule', key: 'employeeId', width: 25 },
            { header: 'Type de composant de base assujettie', key: 'typeBaseSubject', width: 25 },
            { header: 'Montant de composant de base assujettie', key: 'amountBaseSubject', width: 25 },
            { header: `Identifiant du CRM à l'origine de la régularisation`, key: 'crmBaseSubject', width: 25 },
        ]

        for (let baseSubject of data.baseSubject) {
            baseSubjectSheet.addRow({
                month: baseSubject.date,
                employeeId: baseSubject.employeeId,
                typeBaseSubject: baseSubject.typeBaseSubject,
                amountBaseSubject: baseSubject.amountBaseSubject,
                crmBaseSubject: baseSubject.crmBaseSubject

            })
        }
        //Gestion des cotisations
        const contributionSheet = workbook.getWorksheet('Cotisations')
        contributionSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Matricule', key: 'employeeId', width: 25 },
            { header: 'Code de cotisation', key: 'idContribution', width: 25 },
            { header: 'Identifiant Organisme de Protection Sociale', key: 'ops', width: 25 },
            { header: `Montant d assiette`, key: 'baseContribution', width: 25 },
            { header: `Montant de cotisation`, key: 'amountContribution', width: 25 },
            { header: `Code INSEE commune`, key: 'idInsee', width: 25 },
            { header: `Identifiant du CRM à l origine de la régularisation`, key: 'crmContribution', width: 25 },
            { header: `Taux de cotisation`, key: 'rateContribution', width: 25 },

        ]
        for (let contribution of data.contribution) {
            if (contribution.amountContribution) {
                contributionSheet.addRow({
                    month: contribution.date,
                    employeeId: contribution.employeeId,
                    idContribution: contribution.idContribution,
                    ops: contribution?.ops,
                    baseContribution: contribution?.baseContribution,
                    amountContribution: contribution.amountContribution,
                    idInsee: contribution?.idInsee,
                    crmContribution: contribution?.crmContribution,
                    rateContribution: contribution?.rateContribution
                })
            }

        }

        //Gestion des taux AT

        const rateAtSheet = workbook.getWorksheet('Taux AT')
        rateAtSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Siret', key: 'siret', width: 25 },
            { header: 'Code risque', key: 'code', width: 25 },
            { header: 'Taux', key: 'rate', width: 25 },

        ]
        for (let rateAT of data.rateAt) {
            rateAtSheet.addRow({
                month: rateAT?.date,
                siret: rateAT.siret,
                code: rateAT.code,
                rate: rateAT.rate
            })
        }

        //Gestion des taux versement transport

        const rateMobilitySheet = workbook.getWorksheet('Taux versement transport')
        rateMobilitySheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Siret', key: 'siret', width: 25 },
            { header: 'Code insee', key: 'codeInsee', width: 25 },
            { header: 'Taux', key: 'rate', width: 25 },
        ]
        /** 
        for (let rateMobility of data.mobilityRate) {
            rateMobilitySheet.addRow = ({
                month: '',
                siret: '',
                codeInsee: rateMobility.insee,
                rate: rateMobility.rate
            })
        }
        */

        //Gestion des absences 

        const workStoppingSheet = workbook.getWorksheet('Absences')
        workStoppingSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: 'Siret', key: 'siret', width: 25 },
            { header: `Matricule`, key: 'employeeId', width: 25 },
            { header: `Motif de l'arrêt`, key: 'reasonStop', width: 25 },
            { header: 'Date du dernier jour travaillé', key: 'lastDayWorked', width: 25 },
            { header: 'Date de fin prévisionnelle', key: 'estimatedEndDate', width: 25 },
            { header: 'Subrogation', key: 'subrogation', width: 25 },
            { header: 'Date de début de subrogation', key: 'subrogationStartDate', width: 25 },
            { header: 'Date de début de subrogation', key: 'subrogationEndDate', width: 25 },
            { header: 'IBAN', key: 'iban', width: 25 },
            { header: 'BIC', key: 'bic', width: 25 },
            { header: 'Date de la reprise', key: 'recoveryDate', width: 25 },
            { header: 'Motif de la reprise', key: 'reasonRecovery', width: 25 },
            { header: `Date de l'accident ou de la première constatation`, key: 'dateWorkAccident', width: 25 },
            { header: `SIRET Centralisateur`, key: 'SIRETCentralizer', width: 25 },

        ]
        for (let establishement of data.establishement) {
            let month = data.dsnInfo.month
            let siret = establishement.siren + establishement.nic
            for (let employee of data.employees) {
                let employeeId = employee.employeeId
                let workStoppingFilter = data.workStoppingObject.filter(workStopping => workStopping.employeeId === employeeId)
                for (let workStopping of workStoppingFilter) {
                    workStoppingSheet.addRow({
                        month: month,
                        siret: siret,
                        employeeId: workStopping.employeeId,
                        reasonStop: workStopping.reasonStop,
                        lastDayWorked: workStopping.lastDayWorked,
                        estimatedEndDate: workStopping?.estimatedEndDate,
                        subrogation: workStopping?.subrogation,
                        subrogationStartDate: workStopping?.subrogationStartDate,
                        subrogationEndDate: workStopping?.subrogationEndDate,
                        iban: workStopping?.iban,
                        bic: workStopping?.bic,
                        recoveryDate: workStopping?.recoveryDate,
                        reasonRecovery: workStopping?.reasonRecovery,
                        dateWorkAccident: workStopping?.dateWorkAccident,
                        SIRETCentralizer: workStopping?.SIRETCentralizer
                    })
                }
            }

        }

        //Gestion des primes
        const bonusSheet = workbook.getWorksheet('Primes')
        bonusSheet.columns = [
            { header: 'Mois', key: 'month', width: 25 },
            { header: `Matricule`, key: 'employeeId', width: 25 },
            { header: `Type`, key: 'typeBonus', width: 25 },
            { header: `Montant`, key: 'amountBonus', width: 25 },
            { header: `Date de début de la période de rattachement`, key: 'dateStartBonus', width: 25 },
            { header: `Date de fin de la période de rattachement`, key: 'dateEndBonus', width: 25 },
            { header: `Numéro du contrat`, key: 'contractIdBonus', width: 25 },
            { header: `Date de versement d'origine`, key: 'datePaymentBonus', width: 25 },

        ]

        for (let bonus of data.bonus) {
            let month = data.dsnInfo.month

            bonusSheet.addRow({
                month: month,
                employeeId: bonus.employeeId,
                typeBonus: bonus.typeBonus,
                amountBonus: bonus.amountBonus,
                dateStartBonus: bonus.dateStartBonus,
                dateEndBonus: bonus.dateEndBonus,
                contractIdBonus: bonus.contractIdBonus,
                datePaymentBonus: bonus.datePaymentBonus
            })
        }

    }

    await workbook.xlsx.writeFile(`${patch}/${fileName}`);

}
