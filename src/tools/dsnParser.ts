import { DsnParser } from "@fibre44/dsn-parser"
import type { DsnObject, EstablishmentObject, EmployeeObject, WorkContractObject, MutualObject, BaseObject, ContributionObject, ContributionFundObject } from "@fibre44/dsn-parser/lib/dsn"
export type DatasDSN = {
    dsnInfo: DsnObject,
    establishement: EstablishmentObject[]
    employees: EmployeeObject[]
    workContract: WorkContractObject[]
    mutual: MutualObject[],
    base: BaseObject[],
    contribution: ContributionObject[],
    contributionFund: ContributionFundObject[]
}

export const dsnParser = async (patchFile: string) => {
    const dsnParser = new DsnParser()
    await dsnParser.asyncInit(patchFile, { controleDsnVersion: true, deleteFile: true })
    const datasDsn: DatasDSN = {
        dsnInfo: dsnParser.dsn,
        establishement: dsnParser.establishment,
        employees: dsnParser.employee,
        workContract: dsnParser.workContract,
        mutual: dsnParser.mutual,
        base: dsnParser.base,
        contribution: dsnParser.contribution,
        contributionFund: dsnParser.contributionFund

    }
    return datasDsn
}