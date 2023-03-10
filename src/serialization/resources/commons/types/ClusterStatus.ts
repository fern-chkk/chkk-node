/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ClusterStatus: core.serialization.Schema<serializers.ClusterStatus.Raw, Chkk.ClusterStatus> =
    core.serialization.enum_(["active", "deactivated"]);

export declare namespace ClusterStatus {
    type Raw = "active" | "deactivated";
}
