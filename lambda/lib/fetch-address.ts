import axios from "axios";

export interface Address {
    code: string;
    data: Datum[];
}

export interface Datum {
    prefcode: string;
    ja:       Detail;
    en:       Detail;
}

export interface Detail {
    prefecture: string;
    address1:   string;
    address2:   string;
    address3:   string;
    address4:   string;
}


export const fetchAddress = async (postcode: String): Promise<Address> => {
    const match = postcode.match(/^(\d{3}).*(\d{4})$/)
    if (!match) {
        throw Error("invalid postcode")
    }
    const response = await axios.get<Address>(`https://madefor.github.io/postal-code-api/api/v1/${match[1]}/${match[2]}.json`)
    return response.data
}