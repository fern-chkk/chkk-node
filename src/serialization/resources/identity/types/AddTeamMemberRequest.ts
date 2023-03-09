/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const AddTeamMemberRequest: core.serialization.ObjectSchema<
    serializers.AddTeamMemberRequest.Raw,
    Chkk.AddTeamMemberRequest
> = core.serialization.object({
    memberEmail: core.serialization.property("member_email", core.serialization.string()),
});

export declare namespace AddTeamMemberRequest {
    interface Raw {
        member_email: string;
    }
}