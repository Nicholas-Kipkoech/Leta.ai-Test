// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contacts_pb = require('./contacts_pb.js');

function serialize_contacts_Contact(arg) {
  if (!(arg instanceof contacts_pb.Contact)) {
    throw new Error('Expected argument of type contacts.Contact');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_Contact(buffer_arg) {
  return contacts_pb.Contact.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contacts_ContactID(arg) {
  if (!(arg instanceof contacts_pb.ContactID)) {
    throw new Error('Expected argument of type contacts.ContactID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_ContactID(buffer_arg) {
  return contacts_pb.ContactID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contacts_ContactList(arg) {
  if (!(arg instanceof contacts_pb.ContactList)) {
    throw new Error('Expected argument of type contacts.ContactList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_ContactList(buffer_arg) {
  return contacts_pb.ContactList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contacts_Empty(arg) {
  if (!(arg instanceof contacts_pb.Empty)) {
    throw new Error('Expected argument of type contacts.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_Empty(buffer_arg) {
  return contacts_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContactServiceService = exports.ContactServiceService = {
  addContact: {
    path: '/contacts.ContactService/AddContact',
    requestStream: false,
    responseStream: false,
    requestType: contacts_pb.Contact,
    responseType: contacts_pb.ContactID,
    requestSerialize: serialize_contacts_Contact,
    requestDeserialize: deserialize_contacts_Contact,
    responseSerialize: serialize_contacts_ContactID,
    responseDeserialize: deserialize_contacts_ContactID,
  },
  getContacts: {
    path: '/contacts.ContactService/GetContacts',
    requestStream: false,
    responseStream: false,
    requestType: contacts_pb.Empty,
    responseType: contacts_pb.ContactList,
    requestSerialize: serialize_contacts_Empty,
    requestDeserialize: deserialize_contacts_Empty,
    responseSerialize: serialize_contacts_ContactList,
    responseDeserialize: deserialize_contacts_ContactList,
  },
  updateContact: {
    path: '/contacts.ContactService/UpdateContact',
    requestStream: false,
    responseStream: false,
    requestType: contacts_pb.Contact,
    responseType: contacts_pb.Contact,
    requestSerialize: serialize_contacts_Contact,
    requestDeserialize: deserialize_contacts_Contact,
    responseSerialize: serialize_contacts_Contact,
    responseDeserialize: deserialize_contacts_Contact,
  },
  deleteContact: {
    path: '/contacts.ContactService/DeleteContact',
    requestStream: false,
    responseStream: false,
    requestType: contacts_pb.ContactID,
    responseType: contacts_pb.Empty,
    requestSerialize: serialize_contacts_ContactID,
    requestDeserialize: deserialize_contacts_ContactID,
    responseSerialize: serialize_contacts_Empty,
    responseDeserialize: deserialize_contacts_Empty,
  },
};

exports.ContactServiceClient = grpc.makeGenericClientConstructor(ContactServiceService);
