import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'
/**
 * Crypto helper
 * Decryption by `AES` and `RSA`
 */
export default class Crypto {
    static key: any = CryptoJS.enc.Latin1.parse('KSJ0JIQRWYVM4UES')
    static iv: any = CryptoJS.enc.Latin1.parse('16-Bytes--String')
    ///
    /// required key
    static rasPrivateKey: string = ''
    static aesKey: string = ''
    ///
    ///
    static JSEncrypt = new JSEncrypt()
    /// 
    /// 
    /**
     * encrypt data
     * @param {String} data some data of need to encrypt
     */
    static encryptAES(data: string): string {
        return CryptoJS.AES.encrypt(data, Crypto.key, { iv: Crypto.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString()
    }
    /**
     * decrypt data
     * @param {String} ciphertext some ciphertext data of need to decrypt
     */
    static decryptAES(ciphertext: string): string {
        return CryptoJS.AES.decrypt(ciphertext, Crypto.key, { iv: Crypto.iv, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
    }

    /**
     * initialize configuration
     * first, ras private key
     * second, aes key
     * @param {String} ciphertext this encryption text is `AES` key
     */
    static launch(ciphertext: string): void {
        // encryption switch
        let origin = undefined
        if (JSON.parse(ciphertext).status) {
            origin = JSON.parse(ciphertext)
        } else {
            origin = JSON.parse(Crypto.decryptAES(ciphertext))
        }
        if (origin && origin.status === 1) {
            Crypto.rasPrivateKey = origin.data.privateKey
            // decrypt aes key
            Crypto.aesKey = origin.data.aesKey
            Crypto.JSEncrypt.setPrivateKey(Crypto.rasPrivateKey)
            const aes = Crypto.JSEncrypt.decrypt(Crypto.aesKey)
            if (aes) {
                Crypto.key = aes
            }
        }
    }

}