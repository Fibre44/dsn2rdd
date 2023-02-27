import Excel from 'exceljs'
import type { DatasDSN } from './dsnParser';

export const peopleNetIndividu = async (patch: string, datasDsn: DatasDSN[], fileName: string) => {
    const workbook = new Excel.Workbook();
    workbook.addWorksheet('INDIVIDU', { properties: { tabColor: { argb: 'FFC0000' } } });
    const individuSheet = workbook.getWorksheet('INDIVIDU')
    individuSheet.columns = [
        { header: `Type d'import`, key: 'TYPE_IMPORT', width: 10, outlineLevel: 1 },
        { header: `Code de l'individu`, key: 'CFR_ID_PERSON', width: 25 },
        { header: `Date d'effet`, key: 'CFR_DT_EFFET', width: 10 },
        { header: 'DESCRIPTION DU CHANGEMENT', key: 'CFR_CHANGE_REASON', width: 10, outlineLevel: 1 },
        { header: `Nom d'usage`, key: 'CFR_N_FAMILY_NAME', width: 10, outlineLevel: 1 },
        { header: `Prénom`, key: 'CFR_N_FIRST_NAME', width: 10, outlineLevel: 1 },
        { header: 'Nº de Sécurité sociale', key: 'CFR_SS_NUMBER', width: 10, outlineLevel: 1 },
        { header: 'Clé SS', key: 'CFR_SS_KEY', width: 10, outlineLevel: 1 },
        { header: 'IDENTIFIANT EXTERNE', key: 'CFR_HR_OTHER_ID', width: 10, outlineLevel: 1 },
        { header: 'Code du titre', key: 'CFR_ID_SALUTATION', width: 10, outlineLevel: 1 },
        { header: 'Libéllé du Titre', key: 'CFR_NM_SALUTATION', width: 10, outlineLevel: 1 },
        { header: 'Code du sexe', key: 'CFR_ID_GENDER', width: 10, outlineLevel: 1 },
        { header: 'Libéllé du sexe', key: 'CFR_NM_GENDER', width: 10, outlineLevel: 1 },
        { header: 'Situation de famille', key: 'CFR_ID_MARITAL_STAT', width: 10, outlineLevel: 1 },
        { header: 'Libéllé de la situation de fam', key: 'CFR_NM_MARITAL_STATUS', width: 10, outlineLevel: 1 },
        { header: 'Nom de naissance', key: 'CFR_N_MAIDEN_NAME', width: 10, outlineLevel: 1 },
        { header: 'Code pays nationalité', key: 'CFR_ID_COUNTRY_NATIONALITY', width: 10, outlineLevel: 1 },
        { header: 'Libéllé de la nationalité', key: 'CFR_NM_COUNTRY_NAC', width: 10, outlineLevel: 1 },
        { header: 'Code du type de carte ', key: 'CFR_ID_FOREIGN_CARD_TYPE', width: 10, outlineLevel: 1 },
        { header: 'Libéllé du type de carte', key: 'CFR_NM_TYP_CARD', width: 10, outlineLevel: 1 },
        { header: 'Nº de carte étranger', key: 'CFR_FOREIGN_CARD_NUMBER', width: 10, outlineLevel: 1 },
        { header: 'Date de début carte', key: 'CFR_DT_START_CARD', width: 10, outlineLevel: 1 },
        { header: 'Date de fin carte', key: 'CFR_DT_END_CARD', width: 10, outlineLevel: 1 },
        { header: 'Date de naissance', key: 'CFR_DT_BIRTH', width: 10, outlineLevel: 1 },
        { header: 'Code pays de naissance', key: 'CFR_ID_COUNTRY_BIRTH', width: 10, outlineLevel: 1 },
        { header: 'Code département de naiss.', key: 'CFR_ID_GEO_DIV_BIRTH', width: 10, outlineLevel: 1 },
        { header: 'Nom de la commune de naissance', key: 'CFR_N_SUB_GEO_DIV_BIRTH', width: 10, outlineLevel: 1 },
        { header: 'Code commune INSEE Naissance', key: 'CFR_ID_CODE_INSEE_BIRTH', width: 10, outlineLevel: 1 },
        { header: 'INDICATIF BUREAU', key: 'CFR_PROF_TEL_INDICATIF', width: 10, outlineLevel: 1 },
        { header: 'TÉLÉPHONE BUREAU', key: 'CFR_PROF_TEL_NUMBER', width: 10, outlineLevel: 1 },
        { header: 'Indicatif Téléphone GSM', key: 'CFR_INDICATIF_GSM', width: 10, outlineLevel: 1 },
        { header: 'Numéro à composer GSM', key: 'CFR_PHONE_GSM', width: 10, outlineLevel: 1 },
        { header: 'Indicatif Téléphone domicile', key: 'CFR_INDICATIF_HOME', width: 10, outlineLevel: 1 },
        { header: 'Numéro à composer domicile', key: 'CFR_PHONE_HOME', width: 10, outlineLevel: 1 },
        { header: 'INDICATIF GSM PERSO', key: 'CFR_HOME_GSM_INDICATIF', width: 10, outlineLevel: 1 },
        { header: 'GSM PERSO', key: 'CFR_HOME_GSM_NUMBER', width: 10, outlineLevel: 1 },
        { header: 'Adresse électronique pro', key: 'CFR_EMAIL_PRO', width: 10, outlineLevel: 1 },
        { header: 'Adresse électronique perso', key: 'CFR_EMAIL_PERSO', width: 10, outlineLevel: 1 },
        { header: 'Adresse de correspondance', key: 'CFR_MAILING_CHECK', width: 10, outlineLevel: 1 },
        { header: 'Type de lieu', key: 'CFR_ID_LOCATION_TYPE', width: 10, outlineLevel: 1 },
        { header: 'Nº de voie', key: 'CFR_NUM_VIA', width: 10, outlineLevel: 1 },
        { header: 'Complément nº de la voie', key: 'CFR_ID_TIPO_VIVIENDA', width: 10, outlineLevel: 1 },
        { header: 'Code du type de voie (SPA)', key: 'CFR_ID_SIGLA_DOMIC', width: 10, outlineLevel: 1 },
        { header: 'Nom de voie', key: 'CFR_NM_VOIE', width: 10, outlineLevel: 1 },
        { header: `1re ligne d'adresse`, key: 'CFR_ADDRESS_LINE_1', width: 10, outlineLevel: 1 },
        { header: `2e ligne d'adresse`, key: 'CFR_ADDRESS_LINE_2', width: 10, outlineLevel: 1 },
        { header: `3e ligne d'adresse`, key: 'CFR_ADDRESS_LINE_3', width: 10, outlineLevel: 1 },
        { header: 'Code postal', key: 'CFR_ZIP_CODE', width: 10, outlineLevel: 1 },
        { header: `4e ligne d'adresse`, key: 'CFR_BUREAU_DISTRIBUTEUR', width: 10, outlineLevel: 1 },
        { header: 'Code du pays', key: 'CFR_ID_COUNTRY', width: 10, outlineLevel: 1 },
        { header: 'Département', key: 'CFR_ID_GEO_DIV', width: 10, outlineLevel: 1 },
        { header: 'Code commune INSEE', key: 'CFR_ID_CODE_INSEE', width: 10, outlineLevel: 1 },
        { header: 'NOM COMMUNE', key: 'CFR_ADDR_INSEE_CITY_NAME', width: 10, outlineLevel: 1 },
        { header: 'Code IBAN standard', key: 'CFR_ID_IBAN_STANDARD', width: 10, outlineLevel: 1 },
        { header: 'Code organisme financier', key: 'CFR_ID_BANK_BRANCH', width: 10, outlineLevel: 1 },
        { header: 'Nom titulaire', key: 'CFR_ENTITLED', width: 10, outlineLevel: 1 },
        { header: 'Code pays', key: 'CFR_IBAN_CODE', width: 10, outlineLevel: 1 },
        { header: 'Clé IBAN', key: 'CFR_ID_ACCOUNT_TYPE', width: 10, outlineLevel: 1 },
        { header: 'Code de la devise du compte', key: 'CFR_ID_CURRENCY_ACCOUNT', width: 10, outlineLevel: 1 },
        { header: 'IBAN', key: 'CFR_GB_IBAN', width: 10, outlineLevel: 1 },

    ];
    const employeesDSNDatas = []
    datasDsn.forEach(datas => employeesDSNDatas.push(datas.employees))
    //On tourne par DSN
    let setEmployeeIdenfier = new Set
    for (let dsn of datasDsn) {
        for (let employee of dsn.employees) {
            //Un salarié peut etre présent dans X DSN. Un salarié peut avoir un num SS ou un NTT
            let employeeIdentifier = employee?.numSS ? employee.numSS : employee.ntt
            if (!setEmployeeIdenfier.has(employeeIdentifier)) {
                individuSheet.addRow({
                    TYPE_IMPORT: 'NEW',
                    CFR_ID_PERSON: employee?.employeeId,
                    CFR_DT_EFFET: '01/01/2023',
                    CFR_CHANGE_REASON: '',
                    CFR_N_FAMILY_NAME: employee?.lastname,
                    CFR_SS_NUMBER: employee?.numSS?.slice(0, 10),
                    CFR_SS_KEY: employee?.numSS?.slice(-2),
                    CFR_HR_OTHER_ID: '',
                    CFR_ID_SALUTATION: employee?.numSS?.slice(0) === '1' ? 'Monsieur' : 'Madame',
                    CFR_NM_SALUTATION: '',
                    CFR_ID_GENDER: employee.sex,
                    CFR_NM_GENDER: '',
                    CFR_ID_MARITAL_STAT: '',
                    CFR_NM_MARITAL_STATUS: '',
                    CFR_N_MAIDEN_NAME: employee?.surname,
                    CFR_ID_COUNTRY_NATIONALITY: employee?.country,
                    CFR_NM_COUNTRY_NAC: '',
                    CFR_ID_FOREIGN_CARD_TYPE: '',
                    CFR_NM_TYP_CARD: '',
                    CFR_FOREIGN_CARD_NUMBER: '',
                    CFR_DT_START_CARD: '',
                    CFR_DT_END_CARD: '',
                    CFR_DT_BIRTH: employee?.birthday,
                    CFR_ID_COUNTRY_BIRTH: employee?.countryBirth,
                    CFR_ID_GEO_DIV_BIRTH: '',
                    CFR_N_SUB_GEO_DIV_BIRTH: '',
                    CFR_ID_CODE_INSEE_BIRTH: '',
                    CFR_PROF_TEL_INDICATIF: '',
                    CFR_PROF_TEL_NUMBER: '',
                    CFR_INDICATIF_GSM: '',
                    CFR_PHONE_GSM: '',
                    CFR_INDICATIF_HOME: '',
                    CFR_PHONE_HOME: '',
                    CFR_HOME_GSM_INDICATIF: '',
                    CFR_HOME_GSM_NUMBER: '',
                    CFR_EMAIL_PRO: employee?.email,
                    CFR_EMAIL_PERSO: '',
                    CFR_MAILING_CHECK: '',
                    CFR_ID_LOCATION_TYPE: '',
                    CFR_NUM_VIA: '',
                    CFR_ID_TIPO_VIVIENDA: '',
                    CFR_ID_SIGLA_DOMIC: '',
                    CFR_NM_VOIE: '',
                    CFR_ADDRESS_LINE_1: employee?.address1,
                    CFR_ADDRESS_LINE_2: employee?.address2,
                    CFR_ADDRESS_LINE_3: employee?.address3,
                    CFR_ZIP_CODE: employee?.codeZip,
                    CFR_BUREAU_DISTRIBUTEUR: employee?.city,
                    CFR_ID_COUNTRY: employee?.country,
                    CFR_ID_GEO_DIV: '',
                    CFR_ID_CODE_INSEE: '',
                    CFR_ADDR_INSEE_CITY_NAME: '',
                    CFR_ID_IBAN_STANDARD: '',
                    CFR_ID_BANK_BRANCH: '',
                    CFR_ENTITLED: '',
                    CFR_IBAN_CODE: '',
                    CFR_IBAN_KEY: '',
                    CFR_ID_ACCOUNT_TYPE: '',
                    CFR_ID_CURRENCY_ACCOUNT: '',
                    CFR_GB_IBAN: ''
                })
                setEmployeeIdenfier.add(employeeIdentifier)
            }
        }
    }
    await workbook.xlsx.writeFile(`${patch}/${fileName}`);

    return

}