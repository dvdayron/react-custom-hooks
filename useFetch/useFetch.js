/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    const setLoading = () => {
        setState({...state, isLoading: true})
    }

    const getFetch = async(url) => {
        setLoading()

        const resp = await fetch(url)

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: true,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                },
            })

            return
        }

        const data = await resp.json()

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })
    }

    useEffect(() => {
        getFetch(url)
    }, [url])

    return {
        ...state,
    }
}
