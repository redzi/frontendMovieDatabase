import {IdentitySerializer, JsonSerializer, RSocketClient} from "rsocket-core";
import RSocketWebSocketClient from "rsocket-websocket-client";

const ENDPOINT = 'ws://localhost:7000'
const ROUTE = 'general'

export default function connect() {

    return new Promise((resolve, reject) => {
        console.log("connecting with RSocket...");
        const transport = new RSocketWebSocketClient({
            url: ENDPOINT
        });
        const client = new RSocketClient({
            // send/receive JSON objects instead of strings/buffers
            serializers: {
                data: JsonSerializer,
                metadata: IdentitySerializer
            },
            setup: {
                // ms btw sending keepalive to server
                keepAlive: 60000,
                // ms timeout if no keepalive response
                lifetime: 180000,
                // format of `data`
                dataMimeType: "application/json",
                // format of `metadata`
                metadataMimeType: "message/x.rsocket.routing.v0"
            },
            transport
        });
        client.connect().subscribe({
            onComplete: socket => {
                socket.requestResponse({
                    data: {
                        name: 'The Matrix'
                    },
                    metadata: String.fromCharCode(ROUTE.length) + ROUTE
                }).subscribe({
                    onComplete: data => {
                        console.log('got response')
                        //TODO use data
                        console.log(data.data)
                        resolve(data.data)
                    },
                    onError: error => {
                        console.log("got connection error")
                        console.error(error)
                        reject()
                    },
                    onSubscribe: subscription => {
                        console.log('is subscribed')
                    }
                })
            }
        })
    })
}