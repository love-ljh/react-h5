declare module 'jsencrypt' {
    export class JSEncrypt {
        constructor()
        setPublicKey(key: string): void
        setPrivateKey(key: string): void
        encrypt(key: string): string
        decrypt(key: string): string | boolean
    }
}