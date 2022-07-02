import { service } from '../services/apiConfig'

export const getAllPokemon = new Promise((resolve, reject): void => {
    try {
        const response = service.request({
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        console.log(error)
        reject(error)
    }
})

export const getPokemon = (id: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        try {
            const response = service.request({
                method: 'get',
                url: id
            })
            resolve(response)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}