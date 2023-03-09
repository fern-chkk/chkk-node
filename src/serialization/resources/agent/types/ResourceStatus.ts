/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ResourceStatus: core.serialization.Schema<serializers.ResourceStatus.Raw, Chkk.ResourceStatus> =
    core.serialization.enum_(["Waiting", "Terminated", "Running", "Unknown"]);

export declare namespace ResourceStatus {
    type Raw = "Waiting" | "Terminated" | "Running" | "Unknown";
}