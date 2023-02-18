import { v4 as uuidv4 } from 'uuid';
export const makeUUID = () => {
    const uuid = uuidv4()
    return uuid
}