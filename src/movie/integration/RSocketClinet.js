import {RSocketClient, JsonSerializer, IdentitySerializer} from "rsocket-core";
import RSocketWebSocketClient  from "rsocket-websocket-client";

const endpoint = 'ws://localhost:7000'
const route = 'general'

export default function connect() {
    console.log("connecting with RSocket...");
    const transport = new RSocketWebSocketClient({
        url: endpoint
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
                metadata: String.fromCharCode(route.length) + route
            }).subscribe({
                onComplete: data => {
                    console.log('got response')
                    //TODO use data
                    console.log(data)
                },
                onError: error => {
                    console.log("got connection error")
                    console.error(error)
                },
                onSubscribe: subscription => {
                    console.log('is subscribed')
                }
            })
        }
    })
}