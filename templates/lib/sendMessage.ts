import { IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { IRoom } from '@rocket.chat/apps-engine/definition/rooms';
import { IUser } from '@rocket.chat/apps-engine/definition/users';

export async function sendMessage(
    modify: IModify,
    room: IRoom,
    user: IUser,
    message: string,
): Promise<string> {

    const msg = modify.getCreator().startMessage()
        .setSender(user)
        .setRoom(room)
        .setText(message);

    return await modify.getCreator().finish(msg);
}
