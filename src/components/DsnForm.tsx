"use client"
import { useRef } from 'react';
export const DsnForm = () => {
    const form = useRef(null)
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
        if (form.current) {
            const formData = new FormData(form.current)
            const response = await fetch('/api/saveFile', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const json = await response.json()
                console.log(json)
            }
        }
    }
    return (
        <form ref={form} onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="form-group mb-4">
                <label htmlFor="dsn">Selectionner vos fichiers DSN</label>
                <input type="file" name='dsn' className="form-control" id="dsn" accept=".dsn,.txt" multiple required />
            </div>

            <button type='submit' className="btn btn-lg btn-primary btn-block" >Envoyer les données</button>
        </form>
    )
}