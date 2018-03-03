import { Container } from "inversify";
import { TYPES } from "@rtcfly/types";
import { IUserAgent, 
         IMessenger, 
         IWebClient, 
         IIPService, 
         IRTCService, 
         IErrorService,
         IWindowWebSocket } from "@rtcfly/interfaces";
import { SipMessenger } from '@rtcfly/messenger';
import { UserAgent } from '@rtcfly/core';
import { WebRTC } from '@rtcfly/rtc';
import { WebSockets } from '@rtcfly/webclient';
import { ErrorService } from '@rtcfly/error';

const WindowWebSocket = window["WebSocket"];

const sipContainer = new Container();
sipContainer.bind<IMessenger>(TYPES.Messenger).to(SipMessenger);
sipContainer.bind<IUserAgent>(TYPES.UserAgent).to(UserAgent);
sipContainer.bind<IRTCService>(TYPES.RTCService).to(WebRTC);
sipContainer.bind<IWindowWebSocket>(TYPES.WindowWebSocket).to(WindowWebSocket);
sipContainer.bind<IWebClient>(TYPES.WebClient).to(WebSockets);
sipContainer.bind<IErrorService>(TYPES.ErrorService).to(ErrorService);


export { sipContainer };