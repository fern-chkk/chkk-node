/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const AvailabilityRiskAffectedResourceSummary: core.serialization.ObjectSchema<
    serializers.AvailabilityRiskAffectedResourceSummary.Raw,
    Chkk.AvailabilityRiskAffectedResourceSummary
> = core.serialization.object({
    clusters: core.serialization.number().optional(),
    namespaces: core.serialization.number().optional(),
    addons: core.serialization.number().optional(),
});

export declare namespace AvailabilityRiskAffectedResourceSummary {
    interface Raw {
        clusters?: number | null;
        namespaces?: number | null;
        addons?: number | null;
    }
}
