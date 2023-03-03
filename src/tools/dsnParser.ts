import { DsnParser } from "@fibre44/dsn-parser"
import type { DsnObject, EstablishmentObject, EmployeeObject, WorkContractObject, MutualObject, BaseObject, ContributionObject, ContributionFundObject, atObject, MobilityObject, WorkStoppingObject, BaseSubjectObject, BonusObject } from "@fibre44/dsn-parser/lib/dsn"
export type DatasDSN = {
    dsnInfo: DsnObject,
    establishement: EstablishmentObject[]
    employees: EmployeeObject[]
    workContract: WorkContractObject[]
    mutual: MutualObject[],
    base: BaseObject[],
    contribution: ContributionObject[],
    contributionFund: ContributionFundObject[]
    rateAt: atObject[]
    mobilityRate: MobilityObject[]
    workStoppingObject: WorkStoppingObject[]
    baseSubject: BaseSubjectObject[]
    bonus: BonusObject[]
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
        contributionFund: dsnParser.contributionFund,
        rateAt: dsnParser.rateAt,
        mobilityRate: dsnParser.rateMobility,
        workStoppingObject: dsnParser.workStopping,
        baseSubject: dsnParser.baseSubject,
        bonus: dsnParser.bonus
    }
    return datasDsn
}