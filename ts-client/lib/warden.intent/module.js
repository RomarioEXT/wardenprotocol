// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgNewIntentResponse } from "./types/warden/intent/tx";
import { MsgRevokeActionResponse } from "./types/warden/intent/tx";
import { Params } from "./types/warden/intent/params";
import { Intent } from "./types/warden/intent/intent";
import { QueryIntentByIdRequest } from "./types/warden/intent/query";
import { MsgApproveActionResponse } from "./types/warden/intent/tx";
import { MsgRevokeAction } from "./types/warden/intent/tx";
import { MsgNewIntent } from "./types/warden/intent/tx";
import { QueryActionsResponse } from "./types/warden/intent/query";
import { QueryIntentsResponse } from "./types/warden/intent/query";
import { QueryActionByIdRequest } from "./types/warden/intent/query";
import { Approver } from "./types/warden/intent/action";
import { MsgUpdateParams } from "./types/warden/intent/tx";
import { QueryIntentByIdResponse } from "./types/warden/intent/query";
import { QueryActionByIdResponse } from "./types/warden/intent/query";
import { MsgUpdateParamsResponse } from "./types/warden/intent/tx";
import { QueryParamsRequest } from "./types/warden/intent/query";
import { QueryActionsByAddressResponse } from "./types/warden/intent/query";
import { MsgActionCreated } from "./types/warden/intent/action";
import { MsgApproveAction } from "./types/warden/intent/tx";
import { MsgUpdateIntent } from "./types/warden/intent/tx";
import { QueryParamsResponse } from "./types/warden/intent/query";
import { QueryIntentsRequest } from "./types/warden/intent/query";
import { GenesisState } from "./types/warden/intent/genesis";
import { MsgUpdateIntentResponse } from "./types/warden/intent/tx";
import { QueryActionsRequest } from "./types/warden/intent/query";
import { QueryActionsByAddressRequest } from "./types/warden/intent/query";
import { Action } from "./types/warden/intent/action";
export { MsgNewIntentResponse, MsgRevokeActionResponse, Params, Intent, QueryIntentByIdRequest, MsgApproveActionResponse, MsgRevokeAction, MsgNewIntent, QueryActionsResponse, QueryIntentsResponse, QueryActionByIdRequest, Approver, MsgUpdateParams, QueryIntentByIdResponse, QueryActionByIdResponse, MsgUpdateParamsResponse, QueryParamsRequest, QueryActionsByAddressResponse, MsgActionCreated, MsgApproveAction, MsgUpdateIntent, QueryParamsResponse, QueryIntentsRequest, GenesisState, MsgUpdateIntentResponse, QueryActionsRequest, QueryActionsByAddressRequest, Action };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgNewIntentResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgNewIntentResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgNewIntentResponse({ value: MsgNewIntentResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgNewIntentResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevokeActionResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevokeActionResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevokeActionResponse({ value: MsgRevokeActionResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevokeActionResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendIntent({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendIntent: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.intent({ value: Intent.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendIntent: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryIntentByIdRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryIntentByIdRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryIntentByIdRequest({ value: QueryIntentByIdRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryIntentByIdRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgApproveActionResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgApproveActionResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgApproveActionResponse({ value: MsgApproveActionResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgApproveActionResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevokeAction({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevokeAction: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevokeAction({ value: MsgRevokeAction.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevokeAction: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgNewIntent({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgNewIntent: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgNewIntent({ value: MsgNewIntent.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgNewIntent: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionsResponse({ value: QueryActionsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryIntentsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryIntentsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryIntentsResponse({ value: QueryIntentsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryIntentsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionByIdRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionByIdRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionByIdRequest({ value: QueryActionByIdRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionByIdRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendApprover({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendApprover: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.approver({ value: Approver.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendApprover: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryIntentByIdResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryIntentByIdResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryIntentByIdResponse({ value: QueryIntentByIdResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryIntentByIdResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionByIdResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionByIdResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionByIdResponse({ value: QueryActionByIdResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionByIdResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionsByAddressResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionsByAddressResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionsByAddressResponse({ value: QueryActionsByAddressResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionsByAddressResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgActionCreated({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgActionCreated: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgActionCreated({ value: MsgActionCreated.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgActionCreated: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgApproveAction({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgApproveAction: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgApproveAction({ value: MsgApproveAction.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgApproveAction: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateIntent({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateIntent: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateIntent({ value: MsgUpdateIntent.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateIntent: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryIntentsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryIntentsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryIntentsRequest({ value: QueryIntentsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryIntentsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateIntentResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateIntentResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateIntentResponse({ value: MsgUpdateIntentResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateIntentResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionsRequest({ value: QueryActionsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryActionsByAddressRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryActionsByAddressRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryActionsByAddressRequest({ value: QueryActionsByAddressRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryActionsByAddressRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAction({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAction: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.action({ value: Action.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAction: Could not broadcast Tx: ' + e.message);
            }
        },
        msgNewIntentResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgNewIntentResponse", value: MsgNewIntentResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgNewIntentResponse: Could not create message: ' + e.message);
            }
        },
        msgRevokeActionResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgRevokeActionResponse", value: MsgRevokeActionResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevokeActionResponse: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/warden.intent.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        intent({ value }) {
            try {
                return { typeUrl: "/warden.intent.Intent", value: Intent.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Intent: Could not create message: ' + e.message);
            }
        },
        queryIntentByIdRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryIntentByIdRequest", value: QueryIntentByIdRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryIntentByIdRequest: Could not create message: ' + e.message);
            }
        },
        msgApproveActionResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgApproveActionResponse", value: MsgApproveActionResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgApproveActionResponse: Could not create message: ' + e.message);
            }
        },
        msgRevokeAction({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgRevokeAction", value: MsgRevokeAction.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevokeAction: Could not create message: ' + e.message);
            }
        },
        msgNewIntent({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgNewIntent", value: MsgNewIntent.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgNewIntent: Could not create message: ' + e.message);
            }
        },
        queryActionsResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionsResponse", value: QueryActionsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionsResponse: Could not create message: ' + e.message);
            }
        },
        queryIntentsResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryIntentsResponse", value: QueryIntentsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryIntentsResponse: Could not create message: ' + e.message);
            }
        },
        queryActionByIdRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionByIdRequest", value: QueryActionByIdRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionByIdRequest: Could not create message: ' + e.message);
            }
        },
        approver({ value }) {
            try {
                return { typeUrl: "/warden.intent.Approver", value: Approver.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Approver: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        queryIntentByIdResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryIntentByIdResponse", value: QueryIntentByIdResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryIntentByIdResponse: Could not create message: ' + e.message);
            }
        },
        queryActionByIdResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionByIdResponse", value: QueryActionByIdResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionByIdResponse: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        queryActionsByAddressResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionsByAddressResponse", value: QueryActionsByAddressResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionsByAddressResponse: Could not create message: ' + e.message);
            }
        },
        msgActionCreated({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgActionCreated", value: MsgActionCreated.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgActionCreated: Could not create message: ' + e.message);
            }
        },
        msgApproveAction({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgApproveAction", value: MsgApproveAction.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgApproveAction: Could not create message: ' + e.message);
            }
        },
        msgUpdateIntent({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgUpdateIntent", value: MsgUpdateIntent.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateIntent: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryIntentsRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryIntentsRequest", value: QueryIntentsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryIntentsRequest: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/warden.intent.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        msgUpdateIntentResponse({ value }) {
            try {
                return { typeUrl: "/warden.intent.MsgUpdateIntentResponse", value: MsgUpdateIntentResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateIntentResponse: Could not create message: ' + e.message);
            }
        },
        queryActionsRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionsRequest", value: QueryActionsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionsRequest: Could not create message: ' + e.message);
            }
        },
        queryActionsByAddressRequest({ value }) {
            try {
                return { typeUrl: "/warden.intent.QueryActionsByAddressRequest", value: QueryActionsByAddressRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryActionsByAddressRequest: Could not create message: ' + e.message);
            }
        },
        action({ value }) {
            try {
                return { typeUrl: "/warden.intent.Action", value: Action.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Action: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            WardenIntent: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
