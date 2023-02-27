"use client"

type Props = {
    url: {
        uuid: string,
        fileNameList: string[],
    },
}

export const Files = ({ url }: Props) => {
    return <>
        {url.fileNameList ? url.fileNameList.map(file => <p key={`${url.uuid}_${file}`}>{JSON.stringify(file)}</p>) : <p>test</p>}
    </>
}