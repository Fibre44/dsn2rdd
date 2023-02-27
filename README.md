This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Table CFR_RDD_TMP_INDIVIDU ##

| Champ | Libelle | Repris| Champ DSN| Structure DSN| Commentaire |
|-------|--------|----------|----|--------------|-----|
|TYPE_IMPORT|Type d'import |Oui|  |  | Toujours la valeur "new"
|CFR_ID_PERSON|Code de l'individu| Oui|matricule | S21.G00.30.019 |
|CFR_DT_EFFET|Date d'effet|Oui| |
|CFR_CHANGE_REASON|DESCRIPTION DU CHANGEMENT|Non|
|CFR_N_FAMILY_NAME|Nom d'usage|Oui|Nom d'usage|S21.G00.30.003
|CFR_N_FIRST_NAME|Prénom|Oui|Prénoms|S21.G00.30.004
|CFR_SS_NUMBER|Nº de Sécurité sociale|Oui|Code SS sans la clé|S21.G00.30.001
|CFR_SS_KEY|Nº de Sécurité sociale|Oui|Clé numéro SS|S21.G00.30.001
|CFR_HR_OTHER_ID|IDENTIFIANT EXTERNE|Non|||
|CFR_ID_SALUTATION|Code du titre|Oui|||Si homme alors monsieur sinon madame|
|CFR_NM_SALUTATION|Libéllé du Titre|Oui|||Si homme alors monsieur sinon madame|
|CFR_ID_GENDER|Code du sexe|Oui|Numéro d'inscription au répertoire|S21.G00.30.005|
|CFR_NM_GENDER|Libéllé du sexe|Oui|Numéro d'inscription au répertoire|S21.G00.30.005|
|CFR_ID_MARITAL_STAT|Situation de famille|Non
|CFR_NM_MARITAL_STATUS|Libéllé de la situation de fam|Non
|CFR_N_MAIDEN_NAME|Nom de naissance|Oui|Nom d'usage|S21.G00.30.003
|CFR_ID_COUNTRY_NATIONALITY|Code pays nationalité|Oui|Code pays de naissance|S21.G00.30.015
|CFR_NM_COUNTRY_NAC|Libéllé de la nationalité|Oui|Code pays de naissance|S21.G00.30.015
|CFR_ID_FOREIGN_CARD_TYPE|Code du type de carte|Non
|CFR_NM_TYP_CARD|Libéllé du type de carte|Non
|CFR_FOREIGN_CARD_NUMBER|Nº de carte étranger|Non
|CFR_DT_START_CARD|Date de début carte|Non
|CFR_DT_END_CARD|Date de fin carte|Non
|CFR_DT_BIRTH|Date de naissance|Oui|Date de naissance|S21.G00.30.006
|CFR_ID_COUNTRY_BIRTH|Code pays de naissance|Oui|Code pays de naissance|S21.G00.30.015
|CFR_ID_GEO_DIV_BIRTH|Code département de naiss.|Oui|Code département de naissance|S21.G00.30.014
|CFR_N_SUB_GEO_DIV_BIRTH|Nom de la commune de naissance|Oui|Lieu de naissance|S21.G00.30.007
|CFR_ID_CODE_INSEE_BIRTH|Code commune INSEE Naissance|Oui|Numéro d'inscription au répertoire|S21.G00.30.001|Position 6 à 10
|CFR_PROF_TEL_INDICATIF|INDICATIF BUREAU|Non
|CFR_PROF_TEL_NUMBER|TÉLÉPHONE BUREAU|Non
|CFR_INDICATIF_GSM|Indicatif Téléphone GSM|Non
|CFR_PHONE_GSM|Numéro à composer GSM|Non
|CFR_INDICATIF_HOME|Indicatif Téléphone domicile|Non
|CFR_PHONE_HOME|Numéro à composer domicile|Non
|CFR_HOME_GSM_INDICATIF|INDICATIF GSM PERSO|Non
|CFR_HOME_GSM_NUMBER|GSM PERSO|Non
|CFR_EMAIL_PRO|Adresse électronique pro|Oui|Adresse mél|S21.G00.30.018
|CFR_EMAIL_PERSO|Adresse électronique perso|Non
|CFR_MAILING_CHECK|Adresse de correspondance|Non
|CFR_ID_LOCATION_TYPE|Type de lieu|Non
|CFR_NUM_VIA|Nº de voie|Non
|CFR_ID_TIPO_VIVIENDA|Complément nº de la voie|Non
|CFR_ID_SIGLA_DOMIC|Code du type de voie (SPA)|Non
|CFR_NM_VOIE|Nom de voie|Non
|CFR_ADDRESS_LINE_1|1re ligne d'adresse|Oui|Numéro, extension, nature et libellé de la voie|S21.G00.30.008
|CFR_ADDRESS_LINE_2|2e ligne d'adresse|Oui|Complément de la localisation de la construction|S21.G00.30.016
|CFR_ADDRESS_LINE_3|3e ligne d'adresse|Oui|Service de distribution, complément de localisation de la voie|S21.G00.30.017
|CFR_ZIP_CODE|Code postal|Oui|Code postal|S21.G00.30.009
|CFR_BUREAU_DISTRIBUTEUR|4e ligne d'adresse|Oui|Localité|S21.G00.30.010
|CFR_ID_COUNTRY|Code du pays|Oui|Code pays|S21.G00.30.011
|CFR_ID_GEO_DIV|Département|Oui|Code postal|S21.G00.30.009
|CFR_ID_CODE_INSEE|Code commune INSEE|Non
|CFR_ADDR_INSEE_CITY_NAME|NOM COMMUNE|Non
|CFR_ID_IBAN_STANDARD|Code IBAN standard|Non
|CFR_ID_BANK_BRANCH|Code organisme financier|Non
|CFR_ENTITLED|Nom titulaire|Non
|CFR_IBAN_CODE|Code pays|Non
|CFR_IBAN_KEY|Clé IBAN|Non
|CFR_ID_ACCOUNT_TYPE|Code du type de compte|Non
|CFR_ID_CURRENCY_ACCOUNT|Code de la devise du compte|Non
|CFR_GB_IBAN|IBAN|Non