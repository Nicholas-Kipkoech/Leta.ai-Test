// package: contacts
// file: contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Contact extends jspb.Message { 
    getId(): string;
    setId(value: string): Contact;
    getName(): string;
    setName(value: string): Contact;
    getEmail(): string;
    setEmail(value: string): Contact;
    getPhone(): string;
    setPhone(value: string): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        phone: string,
    }
}

export class ContactID extends jspb.Message { 
    getId(): string;
    setId(value: string): ContactID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactID.AsObject;
    static toObject(includeInstance: boolean, msg: ContactID): ContactID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactID;
    static deserializeBinaryFromReader(message: ContactID, reader: jspb.BinaryReader): ContactID;
}

export namespace ContactID {
    export type AsObject = {
        id: string,
    }
}

export class ContactList extends jspb.Message { 
    clearContactsList(): void;
    getContactsList(): Array<Contact>;
    setContactsList(value: Array<Contact>): ContactList;
    addContacts(value?: Contact, index?: number): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactList.AsObject;
    static toObject(includeInstance: boolean, msg: ContactList): ContactList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactList;
    static deserializeBinaryFromReader(message: ContactList, reader: jspb.BinaryReader): ContactList;
}

export namespace ContactList {
    export type AsObject = {
        contactsList: Array<Contact.AsObject>,
    }
}
