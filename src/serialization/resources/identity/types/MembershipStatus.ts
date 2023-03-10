/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const MembershipStatus: core.serialization.Schema<serializers.MembershipStatus.Raw, Chkk.MembershipStatus> =
    core.serialization.enum_(["ACTIVE", "INACTIVE", "DEACTIVATED", "INVITED"]);

export declare namespace MembershipStatus {
    type Raw = "ACTIVE" | "INACTIVE" | "DEACTIVATED" | "INVITED";
}
