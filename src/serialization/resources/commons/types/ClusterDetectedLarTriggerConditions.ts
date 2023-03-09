/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ClusterDetectedLarTriggerConditions: core.serialization.ObjectSchema<
    serializers.ClusterDetectedLarTriggerConditions.Raw,
    Chkk.ClusterDetectedLarTriggerConditions
> = core.serialization.object({
    affectedVersions: core.serialization.property(
        "affected_versions",
        core.serialization.list(core.serialization.string())
    ),
    affectedImages: core.serialization.property(
        "affected_images",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace ClusterDetectedLarTriggerConditions {
    interface Raw {
        affected_versions: string[];
        affected_images: string[];
    }
}
