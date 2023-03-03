
import { makeUUID } from "@/tools/makeUUID"
import Link from "next/link"
export default function Page() {
    const uuid = makeUUID()
    return <>
        <Link href={`/migration/${uuid}`}>
            <button type="submit" className="w-100 btn btn-lg btn-primary">Commencer une migration</button>
        </Link>
    </>
}