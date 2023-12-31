import { Client, Account, Databases } from 'appwrite'

export const client = new Client()
const databases = new Databases(client)

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65905182817b88c986bf')

export const account = new Account(client)
export const db = databases
export { ID } from 'appwrite'
export const DATABASE_ID = 'ahmedibra.com'
// export const COLLECTION_ID = '5f9f5c5f5f3f2'
