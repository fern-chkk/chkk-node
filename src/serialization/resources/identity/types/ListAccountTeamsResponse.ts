/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListAccountTeamsResponse: core.serialization.ObjectSchema<
    serializers.ListAccountTeamsResponse.Raw,
    Chkk.ListAccountTeamsResponse
> = core.serialization.object({
    continuationToken: core.serialization.property("continuation_token", core.serialization.string()),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Team)),
});

export declare namespace ListAccountTeamsResponse {
    interface Raw {
        continuation_token: string;
        data: serializers.Team.Raw[];
    }
}
