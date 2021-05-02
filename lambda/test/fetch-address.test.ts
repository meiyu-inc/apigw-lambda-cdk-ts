import {fetchAddress} from "../lib/fetch-address";

describe(
    "fetch-address function",() =>{
        it("正常系 ハイフン無し", async () => {
            const result = await fetchAddress("1360074")
            expect(result.data[0].ja.prefecture).toEqual("東京都")
            expect(result.data[0].ja.address1).toEqual("江東区")
        })
        it("正常系 ハイフン有り", async () => {
            const result = await fetchAddress("136-0074")
            expect(result.data[0].ja.prefecture).toEqual("東京都")
            expect(result.data[0].ja.address1).toEqual("江東区")
        })
        it("異常系 不正な郵便番号", async () => {
            await expect(fetchAddress("aaaaa")).rejects.toThrow("invalid postcode")
        })
    }
)