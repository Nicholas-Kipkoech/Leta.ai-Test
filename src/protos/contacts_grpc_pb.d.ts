// package: contacts
// file: contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as contacts_pb from "./contacts_pb";

interface IContactServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addContact: IContactServiceService_IAddContact;
    getContacts: IContactServiceService_IGetContacts;
    updateContact: IContactServiceService_IUpdateContact;
    deleteContact: IContactServiceService_IDeleteContact;
}

interface IContactServiceService_IAddContact extends grpc.MethodDefinition<contacts_pb.Contact, contacts_pb.ContactID> {
    path: "/contacts.ContactService/AddContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contacts_pb.Contact>;
    requestDeserialize: grpc.deserialize<contacts_pb.Contact>;
    responseSerialize: grpc.serialize<contacts_pb.ContactID>;
    responseDeserialize: grpc.deserialize<contacts_pb.ContactID>;
}
interface IContactServiceService_IGetContacts extends grpc.MethodDefinition<contacts_pb.Empty, contacts_pb.ContactList> {
    path: "/contacts.ContactService/GetContacts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contacts_pb.Empty>;
    requestDeserialize: grpc.deserialize<contacts_pb.Empty>;
    responseSerialize: grpc.serialize<contacts_pb.ContactList>;
    responseDeserialize: grpc.deserialize<contacts_pb.ContactList>;
}
interface IContactServiceService_IUpdateContact extends grpc.MethodDefinition<contacts_pb.Contact, contacts_pb.Contact> {
    path: "/contacts.ContactService/UpdateContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contacts_pb.Contact>;
    requestDeserialize: grpc.deserialize<contacts_pb.Contact>;
    responseSerialize: grpc.serialize<contacts_pb.Contact>;
    responseDeserialize: grpc.deserialize<contacts_pb.Contact>;
}
interface IContactServiceService_IDeleteContact extends grpc.MethodDefinition<contacts_pb.ContactID, contacts_pb.Empty> {
    path: "/contacts.ContactService/DeleteContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contacts_pb.ContactID>;
    requestDeserialize: grpc.deserialize<contacts_pb.ContactID>;
    responseSerialize: grpc.serialize<contacts_pb.Empty>;
    responseDeserialize: grpc.deserialize<contacts_pb.Empty>;
}

export const ContactServiceService: IContactServiceService;

export interface IContactServiceServer extends grpc.UntypedServiceImplementation {
    addContact: grpc.handleUnaryCall<contacts_pb.Contact, contacts_pb.ContactID>;
    getContacts: grpc.handleUnaryCall<contacts_pb.Empty, contacts_pb.ContactList>;
    updateContact: grpc.handleUnaryCall<contacts_pb.Contact, contacts_pb.Contact>;
    deleteContact: grpc.handleUnaryCall<contacts_pb.ContactID, contacts_pb.Empty>;
}

export interface IContactServiceClient {
    addContact(request: contacts_pb.Contact, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    addContact(request: contacts_pb.Contact, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    addContact(request: contacts_pb.Contact, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    getContacts(request: contacts_pb.Empty, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    getContacts(request: contacts_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    getContacts(request: contacts_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    updateContact(request: contacts_pb.Contact, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    updateContact(request: contacts_pb.Contact, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    updateContact(request: contacts_pb.Contact, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    deleteContact(request: contacts_pb.ContactID, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteContact(request: contacts_pb.ContactID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteContact(request: contacts_pb.ContactID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ContactServiceClient extends grpc.Client implements IContactServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addContact(request: contacts_pb.Contact, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    public addContact(request: contacts_pb.Contact, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    public addContact(request: contacts_pb.Contact, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactID) => void): grpc.ClientUnaryCall;
    public getContacts(request: contacts_pb.Empty, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    public getContacts(request: contacts_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    public getContacts(request: contacts_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.ContactList) => void): grpc.ClientUnaryCall;
    public updateContact(request: contacts_pb.Contact, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    public updateContact(request: contacts_pb.Contact, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    public updateContact(request: contacts_pb.Contact, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.Contact) => void): grpc.ClientUnaryCall;
    public deleteContact(request: contacts_pb.ContactID, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteContact(request: contacts_pb.ContactID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteContact(request: contacts_pb.ContactID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.Empty) => void): grpc.ClientUnaryCall;
}
