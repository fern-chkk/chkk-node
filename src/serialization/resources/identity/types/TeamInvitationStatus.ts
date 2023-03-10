/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const TeamInvitationStatus: core.serialization.Schema<
    serializers.TeamInvitationStatus.Raw,
    Chkk.TeamInvitationStatus
> = core.serialization.enum_(["ACCEPTED", "PENDING"]);

export declare namespace TeamInvitationStatus {
    type Raw = "ACCEPTED" | "PENDING";
}
