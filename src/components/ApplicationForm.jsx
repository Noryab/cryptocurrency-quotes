import styled from '@emotion/styled'
import {useState, useEffect} from 'react'
import { currencies } from '../data/coins'
import useSelectCoins from '../hooks/useSelectCoins'
import Error from './Error'


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .5s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
const ApplicationForm = ({setCoins}) => {
    
    const [error, setError] = useState(false)
    const [cryptocurrencies , setCryptocurrencies] = useState([])
    const [currency, SelectCoins] = useSelectCoins('Choose your coin', currencies)
    const [cryptocurrency, SelectCryptoCoin] = useSelectCoins('Choose your crypto-coin', cryptocurrencies)
    console.log(cryptocurrency, currency)


    useEffect( () =>{
        const cryptoAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const response = await fetch(url)
            const result = await response.json()                        

            const arrayCryptos = result.Data.map( crypto => {
                const objectCrypto = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return objectCrypto
            })
            setCryptocurrencies(arrayCryptos)
        }
        cryptoAPI()

    }, [])


    const handleSubmit = e => {
        e.preventDefault()

        if([currency, cryptocurrency].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setCoins({
            currency,
            cryptocurrency
        })
    }
    return (   
        <>
            {error && <Error>All fields are required</Error>}
            <form 
                onSubmit={handleSubmit}>
                <SelectCoins />
                <SelectCryptoCoin />

                <InputSubmit type='submit' value= "quoter"/>
        </form>    
        </>
    )
}

export default ApplicationForm