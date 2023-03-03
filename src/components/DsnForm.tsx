"use client"
import { useRef, useState } from 'react';
import { Files } from './Files';
import { Loader } from './Loading'
import { useRouter } from 'next/navigation';
export const DsnForm = () => {
    const router = useRouter();
    const [files, setFiles] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [response, setResponse] = useState({
        uuid: '',
        fileNameList: [],
    },)
    const form = useRef(null)
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(() => true)
        setError(() => false)
        setFiles(() => false)

        if (form.current) {
            const formData = new FormData(form.current)
            const response = await fetch('/api/saveFile', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const json = await response.json()
                setResponse(() => json.url)
                setFiles(() => true)
                setLoading(() => false)
            } else {
                setLoading(() => false)
                setError(() => true)
            }
        }
    }
    return (<div className="container">
        <form ref={form} onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="form-group mb-4">
                <label htmlFor="dsn">Selectionner vos fichiers DSN</label>
                <input type="file" name='dsn' className="form-control" id="dsn" accept=".dsn,.txt" multiple required />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="export">Selectionner un type d'export</label>
                <select name="export" id="export" className='form-select'>
                    <option value="hru">Cegid HRU</option>
                    <option value="peopleNet">Cegid People Net</option>
                    <option value="dsn">Export Excel</option>
                </select>
            </div>

            {loading ? <Loader /> : <button type='submit' className="btn btn-lg btn-primary btn-block" >Envoyer les données</button>}
        </form>
        {error ? <p>Oups</p> : ''}
        {files ? <Files url={response} /> : ''}
    </div>

    )
}