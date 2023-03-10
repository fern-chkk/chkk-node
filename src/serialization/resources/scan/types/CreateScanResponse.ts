/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const CreateScanResponse: core.serialization.ObjectSchema<
    serializers.CreateScanResponse.Raw,
    Chkk.CreateScanResponse
> = core.serialization.object({
    id: core.serialization.string(),
    status: core.serialization.string(),
    created: core.serialization.number(),
});

export declare namespace CreateScanResponse {
    interface Raw {
        id: string;
        status: string;
        created: number;
    }
}
