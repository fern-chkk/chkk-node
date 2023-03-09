/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const QuickStartResponseItemUser: core.serialization.ObjectSchema<
    serializers.QuickStartResponseItemUser.Raw,
    Chkk.QuickStartResponseItemUser
> = core.serialization.object({
    name: core.serialization.string(),
    email: core.serialization.string(),
});

export declare namespace QuickStartResponseItemUser {
    interface Raw {
        name: string;
        email: string;
    }
}
