/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ClusterDetectedLarRemidiation: core.serialization.ObjectSchema<
    serializers.ClusterDetectedLarRemidiation.Raw,
    Chkk.ClusterDetectedLarRemidiation
> = core.serialization.object({
    description: core.serialization.string(),
    type: core.serialization.string(),
});

export declare namespace ClusterDetectedLarRemidiation {
    interface Raw {
        description: string;
        type: string;
    }
}