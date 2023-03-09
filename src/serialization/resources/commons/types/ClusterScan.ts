/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ClusterScan: core.serialization.ObjectSchema<serializers.ClusterScan.Raw, Chkk.ClusterScan> =
    core.serialization.object({
        id: core.serialization.string(),
        clusterId: core.serialization.property("cluster_id", core.serialization.string()),
        status: core.serialization.lazy(async () => (await import("../../..")).ClusterScanStatus),
        signatures: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ClusterScannedSignature))
            .optional(),
        signatureCount: core.serialization.property("signature_count", core.serialization.number()),
        lars: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ClusterDetectedLar))
            .optional(),
        larCount: core.serialization.property("lar_count", core.serialization.number()),
        created: core.serialization.number(),
        updated: core.serialization.number().optional(),
    });

export declare namespace ClusterScan {
    interface Raw {
        id: string;
        cluster_id: string;
        status: serializers.ClusterScanStatus.Raw;
        signatures?: serializers.ClusterScannedSignature.Raw[] | null;
        signature_count: number;
        lars?: serializers.ClusterDetectedLar.Raw[] | null;
        lar_count: number;
        created: number;
        updated?: number | null;
    }
}
