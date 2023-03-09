/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const AvailabilityRisk: core.serialization.ObjectSchema<
    serializers.AvailabilityRisk.Raw,
    Chkk.AvailabilityRisk
> = core.serialization.object({
    id: core.serialization.string(),
    title: core.serialization.string(),
    category: core.serialization.list(core.serialization.string()).optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).AvailabilityRiskStatus).optional(),
    needAttention: core.serialization.property("need_attention", core.serialization.boolean().optional()),
    severity: core.serialization.lazy(async () => (await import("../../..")).AvailabilityRiskSeverity),
    availabilityImpact: core.serialization.property("availability_impact", core.serialization.string()),
    labels: core.serialization.record(
        core.serialization.string(),
        core.serialization.lazy(async () => (await import("../../..")).StringArray).optional()
    ),
    components: core.serialization.lazyObject(async () => (await import("../../..")).AvailabilityRiskComponents),
    affectedResourceSummary: core.serialization.property(
        "affected_resource_summary",
        core.serialization.lazyObject(async () => (await import("../../..")).AvailabilityRiskAffectedResourceSummary)
    ),
});

export declare namespace AvailabilityRisk {
    interface Raw {
        id: string;
        title: string;
        category?: string[] | null;
        status?: serializers.AvailabilityRiskStatus.Raw | null;
        need_attention?: boolean | null;
        severity: serializers.AvailabilityRiskSeverity.Raw;
        availability_impact: string;
        labels: Record<string, serializers.StringArray.Raw | null | undefined>;
        components: serializers.AvailabilityRiskComponents.Raw;
        affected_resource_summary: serializers.AvailabilityRiskAffectedResourceSummary.Raw;
    }
}