// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
    userMe: IAuthServiceService_IUserMe;
    refreshAccessToken: IAuthServiceService_IRefreshAccessToken;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<auth_pb.LoginRequest, auth_pb.LoginResponse> {
    path: "/auth.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginResponse>;
}
interface IAuthServiceService_IUserMe extends grpc.MethodDefinition<auth_pb.UserRequest, auth_pb.UserResponse> {
    path: "/auth.AuthService/UserMe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.UserRequest>;
    responseSerialize: grpc.serialize<auth_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.UserResponse>;
}
interface IAuthServiceService_IRefreshAccessToken extends grpc.MethodDefinition<auth_pb.RefreshAccessTokenRequest, auth_pb.RefreshAccessTokenResponse> {
    path: "/auth.AuthService/RefreshAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.RefreshAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.RefreshAccessTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.RefreshAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.RefreshAccessTokenResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginResponse>;
    userMe: grpc.handleUnaryCall<auth_pb.UserRequest, auth_pb.UserResponse>;
    refreshAccessToken: grpc.handleUnaryCall<auth_pb.RefreshAccessTokenRequest, auth_pb.RefreshAccessTokenResponse>;
}

export interface IAuthServiceClient {
    login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    userMe(request: auth_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    userMe(request: auth_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    userMe(request: auth_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public userMe(request: auth_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public userMe(request: auth_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public userMe(request: auth_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
